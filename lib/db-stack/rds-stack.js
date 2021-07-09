"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsStack = void 0;
const cdk = require("@aws-cdk/core");
const rds = require("@aws-cdk/aws-rds");
const ec2 = require("@aws-cdk/aws-ec2");
class RdsStack extends cdk.NestedStack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const instance_name = process.env.RDS_INSTANCE_NAME || "CGLDevDbInstance";
        const database_name = "postgres";
        const instance = new rds.DatabaseInstance(this, instance_name, {
            multiAz: false,
            engine: rds.DatabaseInstanceEngine.postgres({
                version: rds.PostgresEngineVersion.VER_12_3,
            }),
            instanceIdentifier: process.env.RDS_INSTANCE_ID,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmRzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmRzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBTXhDLE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBRTNDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBdUI7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFHeEIsTUFBTSxhQUFhLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxrQkFBa0IsQ0FBQTtRQUNqRixNQUFNLGFBQWEsR0FBVyxVQUFVLENBQUE7UUFFeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM3RCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVE7YUFDNUMsQ0FBQztZQUNGLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZTtZQUMvQyxZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkYsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQzlGLEdBQUcsRUFBRSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsR0FBRztZQUNmLFVBQVUsRUFBRTtnQkFDVixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNO2FBQ2xDO1lBQ0Qsa0JBQWtCLEVBQUUsSUFBSTtTQUN6QixDQUFDLENBQUE7UUFFRixRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQztDQUNGO0FBMUJELDRCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIHJkcyBmcm9tICdAYXdzLWNkay9hd3MtcmRzJztcbmltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcblxuaW50ZXJmYWNlIFZwY1Jlc291cmNlUHJvcHMgZXh0ZW5kcyBjZGsuTmVzdGVkU3RhY2tQcm9wcyB7XG4gIHZwYzogZWMyLlZwY1xufVxuXG5leHBvcnQgY2xhc3MgUmRzU3RhY2sgZXh0ZW5kcyBjZGsuTmVzdGVkU3RhY2sge1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVnBjUmVzb3VyY2VQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG5cbiAgICBjb25zdCBpbnN0YW5jZV9uYW1lOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5SRFNfSU5TVEFOQ0VfTkFNRSB8fCBcIkNHTERldkRiSW5zdGFuY2VcIlxuICAgIGNvbnN0IGRhdGFiYXNlX25hbWU6IHN0cmluZyA9IFwicG9zdGdyZXNcIlxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgcmRzLkRhdGFiYXNlSW5zdGFuY2UodGhpcywgaW5zdGFuY2VfbmFtZSwge1xuICAgICAgbXVsdGlBejogZmFsc2UsXG4gICAgICBlbmdpbmU6IHJkcy5EYXRhYmFzZUluc3RhbmNlRW5naW5lLnBvc3RncmVzKHtcbiAgICAgICAgdmVyc2lvbjogcmRzLlBvc3RncmVzRW5naW5lVmVyc2lvbi5WRVJfMTJfMyxcbiAgICAgIH0pLFxuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBwcm9jZXNzLmVudi5SRFNfSU5TVEFOQ0VfSUQsXG4gICAgICBpbnN0YW5jZVR5cGU6IGVjMi5JbnN0YW5jZVR5cGUub2YoZWMyLkluc3RhbmNlQ2xhc3MuQlVSU1RBQkxFMiwgZWMyLkluc3RhbmNlU2l6ZS5NSUNSTyksXG4gICAgICBjcmVkZW50aWFsczogcmRzLkNyZWRlbnRpYWxzLmZyb21HZW5lcmF0ZWRTZWNyZXQoZGF0YWJhc2VfbmFtZSwgeyBzZWNyZXROYW1lOiBpbnN0YW5jZV9uYW1lIH0pLFxuICAgICAgdnBjOiBwcm9wcz8udnBjLFxuICAgICAgdnBjU3VibmV0czoge1xuICAgICAgICBzdWJuZXRUeXBlOiBlYzIuU3VibmV0VHlwZS5QVUJMSUMsXG4gICAgICB9LFxuICAgICAgcHVibGljbHlBY2Nlc3NpYmxlOiB0cnVlLFxuICAgIH0pXG5cbiAgICBpbnN0YW5jZS5jb25uZWN0aW9ucy5hbGxvd0Zyb21BbnlJcHY0KGVjMi5Qb3J0LnRjcCg1NDMyKSlcbiAgfVxufVxuIl19