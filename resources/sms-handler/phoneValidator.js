'use strict';

var AWS = require('aws-sdk');
var aws_region = "ap-southeast-1";
AWS.config.update({ region: aws_region });

const phoneIsValid = async (phoneNumber) => {
  if (!phoneNumber) return false

  var params = {
    NumberValidateRequest: { /* required */
      // IsoCountryCode: 'TH',
      PhoneNumber: phoneNumber
    }
  };
  var pinpoint = new AWS.Pinpoint();

  try {
    const response = await pinpoint.phoneNumberValidate(params).promise();
    return {
      country: response.NumberValidateResponse.CountryCodeIso2,
      isValid: response.NumberValidateResponse.Carrier != 'Communications Authority of Thailand'
        && response.NumberValidateResponse.PhoneType != 'INVALID',
      phoneNumber: response.NumberValidateResponse.CountryCodeIso2 == 'TH'
        ? '0' + response.NumberValidateResponse.CleansedPhoneNumberNational
        : response.NumberValidateResponse.CleansedPhoneNumberNational
    }
  } catch (error) {
    return false
  }
}

module.exports = { phoneIsValid }