import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
interface VpcResourceProps extends cdk.NestedStackProps {
    vpc: ec2.Vpc;
}
export declare class RdsStack extends cdk.NestedStack {
    constructor(scope: cdk.Construct, id: string, props: VpcResourceProps);
}
export {};
