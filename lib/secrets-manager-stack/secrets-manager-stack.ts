import * as cdk from '@aws-cdk/core';
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
export class LegacySecretsManagerStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const secrets_name_hash_key: string = process.env.SECRET_NAME_HASH_KEY || "CGLDevHashKey"
    const secrets_id_hash_key: string = "DynamoDBSecret"

    new secretsmanager.Secret(this, secrets_id_hash_key, {
      description: "Hashing key",
      secretName: secrets_name_hash_key,
      // generateSecretString: {  // ** Init key value **
      //   secretStringTemplate: JSON.stringify({}),
      //   generateStringKey: 'hashing-key'
      // }
    });
  }
}
