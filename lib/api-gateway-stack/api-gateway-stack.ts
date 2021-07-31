import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class ApiGatewayStack extends cdk.Stack {

  public gwUrl = ''

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apigw = new apigateway.RestApi(this, 'CglOpAPI', {

      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        // allowCredentials: true,
        allowHeaders: ["*"],
        // maxAge: cdk.Duration.seconds(0),
        disableCache: true
      },
      deploy: true,
      // binaryMediaTypes: ['*/*']
      binaryMediaTypes: ['application/pdf', 'multipart/form-data', 'image/png', 'image/jpeg', 'image/jpg', 'application/octet-stream']
    })

    this.gwUrl = apigw.url

    new cdk.CfnOutput(this, "CglOpApiUrl", {
      value: apigw.url.replace(/\/$/, ""),
      exportName: "ApiGatewayStack:APIGwCglOpAPIUrl"
    });

    new cdk.CfnOutput(this, "CglOpApiId", {
      value: apigw.restApiId,
      exportName: "ApiGatewayStack:CglOpApiId"
    });

  }
}
