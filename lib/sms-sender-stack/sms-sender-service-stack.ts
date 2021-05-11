import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam"

export class SmsSenderServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const snsPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      resources: ["*"],
      actions: ['sns:SetSMSAttributes', 'sns:Publish'],
    })

    const lambdaFn = new lambda.Function(this, "SmsSenderHandler", {
      runtime: lambda.Runtime.NODEJS_10_X, // So we can use async in widget.js
      code: lambda.Code.fromAsset("resources/sms-handler"),
      handler: "handler.main"
    });

    lambdaFn.addToRolePolicy(snsPolicy)

    const api = new apigateway.RestApi(this, "sms-api", {
      restApiName: "Sms Service",
      description: "This service for sms action."
    });

    const sendSMS = new apigateway.LambdaIntegration(lambdaFn, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("POST", sendSMS); // GET /
  }
}
