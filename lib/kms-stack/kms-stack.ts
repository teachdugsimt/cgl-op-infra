import * as cdk from '@aws-cdk/core';
import * as kms from '@aws-cdk/aws-kms';

export class KmsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const key = new kms.Key(this, 'CglUserKey', {
      alias: 'cgl_user_key',
      pendingWindow: cdk.Duration.days(30)
    });

    // Export values
    new cdk.CfnOutput(this, "KmsUserKey", {
      value: key.keyId,
    });

  }
}
