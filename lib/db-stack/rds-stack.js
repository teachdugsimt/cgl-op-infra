"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsStack = void 0;
const cdk = require("@aws-cdk/core");
const rds = require("@aws-cdk/aws-rds");
const ec2 = require("@aws-cdk/aws-ec2");
class RdsStack extends cdk.NestedStack {
    constructor(scope, id, props) {
        super(scope, id, props);
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
            vpc: props === null || props === void 0 ? void 0 : props.vpc,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PUBLIC,
            },
            publiclyAccessible: true,
        });
        instance.connections.allowFromAnyIpv4(ec2.Port.tcp(5432));
    }
}
exports.RdsStack = RdsStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmRzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmRzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBTXhDLE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBRTNDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBdUI7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFHeEIsTUFBTSxhQUFhLEdBQVcsa0JBQWtCLENBQUE7UUFDaEQsTUFBTSxhQUFhLEdBQVcsVUFBVSxDQUFBO1FBRXhDLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRO2FBQzVDLENBQUM7WUFDRixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN2RixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUM7WUFDOUYsR0FBRyxFQUFFLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxHQUFHO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDbEM7WUFDRCxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQTtRQUVGLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBQ0Y7QUExQkQsNEJBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgcmRzIGZyb20gJ0Bhd3MtY2RrL2F3cy1yZHMnO1xuaW1wb3J0ICogYXMgZWMyIGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInO1xuXG5pbnRlcmZhY2UgVnBjUmVzb3VyY2VQcm9wcyBleHRlbmRzIGNkay5OZXN0ZWRTdGFja1Byb3BzIHtcbiAgICB2cGM6IGVjMi5WcGNcbn1cblxuZXhwb3J0IGNsYXNzIFJkc1N0YWNrIGV4dGVuZHMgY2RrLk5lc3RlZFN0YWNrIHtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZwY1Jlc291cmNlUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuXG4gICAgY29uc3QgaW5zdGFuY2VfbmFtZTogc3RyaW5nID0gXCJDR0xEZXZEYkluc3RhbmNlXCJcbiAgICBjb25zdCBkYXRhYmFzZV9uYW1lOiBzdHJpbmcgPSBcInBvc3RncmVzXCJcblxuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHJkcy5EYXRhYmFzZUluc3RhbmNlKHRoaXMsIGluc3RhbmNlX25hbWUsIHtcbiAgICAgIG11bHRpQXo6IGZhbHNlLFxuICAgICAgZW5naW5lOiByZHMuRGF0YWJhc2VJbnN0YW5jZUVuZ2luZS5wb3N0Z3Jlcyh7XG4gICAgICAgIHZlcnNpb246IHJkcy5Qb3N0Z3Jlc0VuZ2luZVZlcnNpb24uVkVSXzEyXzMsXG4gICAgICB9KSxcbiAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogXCJjZ2wtZGV2LWRiXCIsXG4gICAgICBpbnN0YW5jZVR5cGU6IGVjMi5JbnN0YW5jZVR5cGUub2YoZWMyLkluc3RhbmNlQ2xhc3MuQlVSU1RBQkxFMiwgZWMyLkluc3RhbmNlU2l6ZS5NSUNSTyksXG4gICAgICBjcmVkZW50aWFsczogcmRzLkNyZWRlbnRpYWxzLmZyb21HZW5lcmF0ZWRTZWNyZXQoZGF0YWJhc2VfbmFtZSwgeyBzZWNyZXROYW1lOiBpbnN0YW5jZV9uYW1lIH0pLFxuICAgICAgdnBjOiBwcm9wcz8udnBjLFxuICAgICAgdnBjU3VibmV0czoge1xuICAgICAgICBzdWJuZXRUeXBlOiBlYzIuU3VibmV0VHlwZS5QVUJMSUMsXG4gICAgICB9LFxuICAgICAgcHVibGljbHlBY2Nlc3NpYmxlOiB0cnVlLFxuICAgIH0pXG5cbiAgICBpbnN0YW5jZS5jb25uZWN0aW9ucy5hbGxvd0Zyb21BbnlJcHY0KGVjMi5Qb3J0LnRjcCg1NDMyKSlcbiAgfVxufVxuIl19