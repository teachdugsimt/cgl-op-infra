import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
export class DynamoDBStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // // dynamo db
        // new dynamodb.Table(this, 'CGLUserAuthorize', {
        //     tableName: "cgl_user_authentication",
        //     partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
        //     // TableEncryption.CUSTOMER_MANAGED
        //     // encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
        //     // encryptionKey:  {password: },
        // });

        // dynamo db
        const otpTable = new dynamodb.Table(this, 'CglOtpTable', {
            tableName: 'cgl_otp',
            partitionKey: { name: 'variant', type: dynamodb.AttributeType.STRING }
        });

        const userTable = new dynamodb.Table(this, 'CglUserTable', {
            tableName: 'cgl_user',
            partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
            // sortKey: { name: 'password', type: dynamodb.AttributeType.STRING }
        });

        const attachTable = new dynamodb.Table(this, 'CGLAttachCode', {
            tableName: "cgl_attach_code",
            partitionKey: { name: 'attach_code', type: dynamodb.AttributeType.STRING },
            sortKey: { name: "user_id", type: dynamodb.AttributeType.STRING }
            // TableEncryption.CUSTOMER_MANAGED
            // encryption: dynamodb.TableEncryption.CUSTOMER_MANAGED,
            // encryptionKey:  {password: },
        });

    }
}
