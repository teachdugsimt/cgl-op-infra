"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyDbStack = void 0;
const cdk = require("@aws-cdk/core");
const rds = require("@aws-cdk/aws-rds");
const ec2 = require("@aws-cdk/aws-ec2");
class LegacyDbStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const vpc = new ec2.Vpc(this, 'CGLDevDbVPC', { natGateways: 1 });
        const instance_name = "CGLDevDbInstance";
        const database_name = "postgres";
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
        });
        instance.connections.allowFromAnyIpv4(ec2.Port.tcp(5432));
    }
}
exports.LegacyDbStack = LegacyDbStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnYWN5LWRiLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVnYWN5LWRiLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBRXhDLE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRTFDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqRSxNQUFNLGFBQWEsR0FBVyxrQkFBa0IsQ0FBQTtRQUNoRCxNQUFNLGFBQWEsR0FBVyxVQUFVLENBQUE7UUFFeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM3RCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVE7YUFDNUMsQ0FBQztZQUNGLGtCQUFrQixFQUFFLFlBQVk7WUFDaEMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZGLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQztZQUM5RixHQUFHO1lBQ0gsVUFBVSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDbEM7WUFDRCxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQTtRQUVGLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBQ0Y7QUEzQkQsc0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgcmRzIGZyb20gJ0Bhd3MtY2RrL2F3cy1yZHMnO1xuaW1wb3J0ICogYXMgZWMyIGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInO1xuXG5leHBvcnQgY2xhc3MgTGVnYWN5RGJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHZwYyA9IG5ldyBlYzIuVnBjKHRoaXMsICdDR0xEZXZEYlZQQycsIHsgbmF0R2F0ZXdheXM6IDEgfSk7XG5cbiAgICBjb25zdCBpbnN0YW5jZV9uYW1lOiBzdHJpbmcgPSBcIkNHTERldkRiSW5zdGFuY2VcIlxuICAgIGNvbnN0IGRhdGFiYXNlX25hbWU6IHN0cmluZyA9IFwicG9zdGdyZXNcIlxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgcmRzLkRhdGFiYXNlSW5zdGFuY2UodGhpcywgaW5zdGFuY2VfbmFtZSwge1xuICAgICAgbXVsdGlBejogZmFsc2UsXG4gICAgICBlbmdpbmU6IHJkcy5EYXRhYmFzZUluc3RhbmNlRW5naW5lLnBvc3RncmVzKHtcbiAgICAgICAgdmVyc2lvbjogcmRzLlBvc3RncmVzRW5naW5lVmVyc2lvbi5WRVJfMTJfMyxcbiAgICAgIH0pLFxuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBcImNnbC1kZXYtZGJcIixcbiAgICAgIGluc3RhbmNlVHlwZTogZWMyLkluc3RhbmNlVHlwZS5vZihlYzIuSW5zdGFuY2VDbGFzcy5CVVJTVEFCTEUyLCBlYzIuSW5zdGFuY2VTaXplLk1JQ1JPKSxcbiAgICAgIGNyZWRlbnRpYWxzOiByZHMuQ3JlZGVudGlhbHMuZnJvbUdlbmVyYXRlZFNlY3JldChkYXRhYmFzZV9uYW1lLCB7IHNlY3JldE5hbWU6IGluc3RhbmNlX25hbWUgfSksXG4gICAgICB2cGMsXG4gICAgICB2cGNTdWJuZXRzOiB7XG4gICAgICAgIHN1Ym5ldFR5cGU6IGVjMi5TdWJuZXRUeXBlLlBVQkxJQyxcbiAgICAgIH0sXG4gICAgICBwdWJsaWNseUFjY2Vzc2libGU6IHRydWUsXG4gICAgfSlcblxuICAgIGluc3RhbmNlLmNvbm5lY3Rpb25zLmFsbG93RnJvbUFueUlwdjQoZWMyLlBvcnQudGNwKDU0MzIpKVxuICB9XG59XG4iXX0=