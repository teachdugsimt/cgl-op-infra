import * as cdk from '@aws-cdk/core';
import { RdsStack } from './rds-stack';
import { VpcStack } from './vpc-stack';
export declare class MainStack extends cdk.Stack {
    vpcResource: VpcStack;
    rdsResources: RdsStack;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
