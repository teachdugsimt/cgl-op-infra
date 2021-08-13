import * as cdk from '@aws-cdk/core';
interface CloudfrontStackProps extends cdk.StackProps {
    apigwUrl: string;
}
export declare class CloudFrontStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: CloudfrontStackProps);
}
export {};
