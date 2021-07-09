import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'
export class CargolinkDocumentStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new s3.Bucket(this, id, {
            bucketName: process.env.S3_BUCKET_NAME,
            accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
        })
    }
}
