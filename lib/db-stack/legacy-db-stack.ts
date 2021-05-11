import * as cdk from '@aws-cdk/core';
import * as rds from '@aws-cdk/aws-rds';
import * as ec2 from '@aws-cdk/aws-ec2';

export class LegacyDbStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'CGLDevDbVPC', { natGateways: 1 });

    const instance_name: string = "CGLDevDbInstance"
    const database_name: string = "postgres"

    const instance = new rds.DatabaseInstance(this, instance_name, {
      multiAz: false,
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_12_3,
      }),
      instanceIdentifier: "cgl-dev-db",
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO),
      credentials: rds.Credentials.fromGeneratedSecret(database_name, { secretName: instance_name }),
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      publiclyAccessible: true,
    })

    instance.connections.allowFromAnyIpv4(ec2.Port.tcp(5432))
  }
}
