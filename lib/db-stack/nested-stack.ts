import * as cdk from '@aws-cdk/core'
import { RdsStack } from './rds-stack'
import { VpcStack } from './vpc-stack'

export class MainStack extends cdk.Stack {
    vpcResource: VpcStack
    rdsResources: RdsStack


    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        this.vpcResource = new VpcStack(this, 'legacy-vpc-resources')
        const { vpc } = this.vpcResource

        this.rdsResources = new RdsStack(this, 'legacy-rds-resources', { vpc })

        this.rdsResources.addDependency(this.vpcResource)
    }

}