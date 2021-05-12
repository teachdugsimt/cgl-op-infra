import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
export declare class VpcStack extends cdk.NestedStack {
    vpc: ec2.Vpc;
    applicationSg: ec2.SecurityGroup;
    constructor(scope: cdk.Construct, id: string, props?: cdk.NestedStackProps);
}
