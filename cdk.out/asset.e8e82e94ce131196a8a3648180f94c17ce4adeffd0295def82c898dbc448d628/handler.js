const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-1' })

const { phoneIsValid } = require('./phoneValidator')
const { smsSender } = require('./sendSms')
const { thsmsSender } = require('./sendSmsTh')

exports.main = async function (event, context) {
  try {
    var method = event.httpMethod;

    if (method === "POST") {
      if (event.path === "/") {

        let data = JSON.parse(event.body)
        console.log(data)

        if (!data.message || !data.phoneNumber) {
          return {
            statusCode: 400,
            headers: {},
            body: "Bad Request : Invalide message or phone number"
          };
        } else {

          const phoneValid = await phoneIsValid(data.phoneNumber)
          if (phoneValid && !phoneValid.isValid && phoneValid.country == 'TH') {
            if (await thsmsSender(data.message, phoneValid.phoneNumber)) {
              return {
                statusCode: 200,
                headers: {},
                body: 'Success (Using THSMS service)'
              }
            }
          } else if (phoneValid && !phoneValid.isValid) {
            return {
              statusCode: 400,
              headers: {},
              body: "Bad Request : Invalide phone number"
            }
          }

        }

        return smsSender(data.message, data.phoneNumber)
      }
    }
    else {
      return {
        statusCode: 400,
        headers: {},
        body: "We only accept POST /"
      };
    }
  } catch (error) {
    let body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body)
    }
  }
}