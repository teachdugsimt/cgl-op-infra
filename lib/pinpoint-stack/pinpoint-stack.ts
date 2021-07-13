import * as cdk from '@aws-cdk/core';
import * as pinpoint from '@aws-cdk/aws-pinpoint';

export class PinpointStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pinpointProject = new pinpoint.CfnApp(this, 'CglMessagingService', {
      name: 'cgl-messaging-service',
    })

    const pinpointProjectSms = new pinpoint.CfnSMSChannel(this, 'CglSmsService', {
      applicationId: pinpointProject.ref
    })

    // const pinpointProjectEmail = new pinpoint.CfnEmailChannel(this, 'CglEmailService', {
    //   applicationId: pinpointProject.ref,
    //   fromAddress: '',
    //   identity: '',
    // })

    new cdk.CfnOutput(this, "CglPinpointProjectID", {
      value: pinpointProject.ref,
      exportName: "PinPointStack:CglPinpointProjectID"
    });
  }
}
