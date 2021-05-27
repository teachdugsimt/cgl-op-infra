import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class DynamoDBStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // dynamo db
        new dynamodb.Table(this, 'CGLUserAuthorize', {
            tableName: "cgl_user_authentication",
            partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
        });

    }
}
