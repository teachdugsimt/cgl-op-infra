"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyDbStack = void 0;
const cdk = require("@aws-cdk/core");
const rds = require("@aws-cdk/aws-rds");
const ec2 = require("@aws-cdk/aws-ec2");
const secretsmanager = require("@aws-cdk/aws-secretsmanager");
// const envSgp = { region: 'ap-southeast-1' }
class LegacyDbStack extends cdk.Stack {
    // get availabilityZones(): string[] {
    //   return ['ap-southeast-1a'];
    // }
    constructor(scope, id, props) {
        super(scope, id, props);
        const vpc = new ec2.Vpc(this, 'CGLDevDbVPC', {
            // maxAzs: 1,
            natGateways: 1
        });
        const instance_name = "CGLDevDbInstance";
        const database_name = "postgres";
        const secrets_name_hash_key = "CGLDevHashKey";
        const secrets_id_hash_key = "LegacyDBSecret";
        // const legacyDbSecret = secretsmanager.Secret.fromSecretNameV2(this, secrets_id_hash_key, secrets_name_hash_key);
        new secretsmanager.Secret(this, secrets_id_hash_key, {
            description: "Hashing key",
            secretName: secrets_name_hash_key,
        });
        const instance = new rds.DatabaseInstance(this, instance_name, {
            multiAz: false,
            engine: rds.DatabaseInstanceEngine.postgres({
                version: rds.PostgresEngineVersion.VER_12_3,
            }),
            instanceIdentifier: "cgl-dev-db",
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO),
            // credentials: rds.Credentials.fromSecret(legacyDbSecret),
            // credentials: rds.Credentials.fromGeneratedSecret(instance_name, {}),
            // Method 2 : Deprecate !!
            // credentials: rds.Credentials.fromUsername('admin', { u:'' }),
            credentials: rds.Credentials.fromGeneratedSecret(database_name, { secretName: instance_name }),
            // credentials: rds.Credentials.fromUsername(database_name, { secretName: instance_name }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnYWN5LWRiLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVnYWN5LWRiLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDhEQUE4RDtBQUU5RCw4Q0FBOEM7QUFDOUMsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFMUMsc0NBQXNDO0lBQ3RDLGdDQUFnQztJQUNoQyxJQUFJO0lBQ0osWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUMzQyxhQUFhO1lBQ2IsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7UUFJSCxNQUFNLGFBQWEsR0FBVyxrQkFBa0IsQ0FBQTtRQUNoRCxNQUFNLGFBQWEsR0FBVyxVQUFVLENBQUE7UUFFeEMsTUFBTSxxQkFBcUIsR0FBVyxlQUFlLENBQUE7UUFDckQsTUFBTSxtQkFBbUIsR0FBVyxnQkFBZ0IsQ0FBQTtRQUVwRCxtSEFBbUg7UUFDbkgsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUUscUJBQXFCO1NBS2xDLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRO2FBQzVDLENBQUM7WUFDRixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUV2RiwyREFBMkQ7WUFDM0QsdUVBQXVFO1lBR3ZFLDBCQUEwQjtZQUMxQixnRUFBZ0U7WUFDaEUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQzlGLDJGQUEyRjtZQUUzRixHQUFHO1lBQ0gsVUFBVSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDbEM7WUFDRCxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQTtRQUVGLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBQ0Y7QUF6REQsc0NBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgcmRzIGZyb20gJ0Bhd3MtY2RrL2F3cy1yZHMnO1xuaW1wb3J0ICogYXMgZWMyIGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInO1xuaW1wb3J0ICogYXMgc2VjcmV0c21hbmFnZXIgZnJvbSAnQGF3cy1jZGsvYXdzLXNlY3JldHNtYW5hZ2VyJztcblxuLy8gY29uc3QgZW52U2dwID0geyByZWdpb246ICdhcC1zb3V0aGVhc3QtMScgfVxuZXhwb3J0IGNsYXNzIExlZ2FjeURiU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuXG4gIC8vIGdldCBhdmFpbGFiaWxpdHlab25lcygpOiBzdHJpbmdbXSB7XG4gIC8vICAgcmV0dXJuIFsnYXAtc291dGhlYXN0LTFhJ107XG4gIC8vIH1cbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHZwYyA9IG5ldyBlYzIuVnBjKHRoaXMsICdDR0xEZXZEYlZQQycsIHtcbiAgICAgIC8vIG1heEF6czogMSxcbiAgICAgIG5hdEdhdGV3YXlzOiAxXG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgaW5zdGFuY2VfbmFtZTogc3RyaW5nID0gXCJDR0xEZXZEYkluc3RhbmNlXCJcbiAgICBjb25zdCBkYXRhYmFzZV9uYW1lOiBzdHJpbmcgPSBcInBvc3RncmVzXCJcblxuICAgIGNvbnN0IHNlY3JldHNfbmFtZV9oYXNoX2tleTogc3RyaW5nID0gXCJDR0xEZXZIYXNoS2V5XCJcbiAgICBjb25zdCBzZWNyZXRzX2lkX2hhc2hfa2V5OiBzdHJpbmcgPSBcIkxlZ2FjeURCU2VjcmV0XCJcblxuICAgIC8vIGNvbnN0IGxlZ2FjeURiU2VjcmV0ID0gc2VjcmV0c21hbmFnZXIuU2VjcmV0LmZyb21TZWNyZXROYW1lVjIodGhpcywgc2VjcmV0c19pZF9oYXNoX2tleSwgc2VjcmV0c19uYW1lX2hhc2hfa2V5KTtcbiAgICBuZXcgc2VjcmV0c21hbmFnZXIuU2VjcmV0KHRoaXMsIHNlY3JldHNfaWRfaGFzaF9rZXksIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkhhc2hpbmcga2V5XCIsXG4gICAgICBzZWNyZXROYW1lOiBzZWNyZXRzX25hbWVfaGFzaF9rZXksXG4gICAgICAvLyBnZW5lcmF0ZVNlY3JldFN0cmluZzoge1xuICAgICAgLy8gICBzZWNyZXRTdHJpbmdUZW1wbGF0ZTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgLy8gICBnZW5lcmF0ZVN0cmluZ0tleTogJ2hhc2hpbmcta2V5J1xuICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgcmRzLkRhdGFiYXNlSW5zdGFuY2UodGhpcywgaW5zdGFuY2VfbmFtZSwge1xuICAgICAgbXVsdGlBejogZmFsc2UsXG4gICAgICBlbmdpbmU6IHJkcy5EYXRhYmFzZUluc3RhbmNlRW5naW5lLnBvc3RncmVzKHtcbiAgICAgICAgdmVyc2lvbjogcmRzLlBvc3RncmVzRW5naW5lVmVyc2lvbi5WRVJfMTJfMyxcbiAgICAgIH0pLFxuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBcImNnbC1kZXYtZGJcIixcbiAgICAgIGluc3RhbmNlVHlwZTogZWMyLkluc3RhbmNlVHlwZS5vZihlYzIuSW5zdGFuY2VDbGFzcy5CVVJTVEFCTEUyLCBlYzIuSW5zdGFuY2VTaXplLk1JQ1JPKSxcblxuICAgICAgLy8gY3JlZGVudGlhbHM6IHJkcy5DcmVkZW50aWFscy5mcm9tU2VjcmV0KGxlZ2FjeURiU2VjcmV0KSxcbiAgICAgIC8vIGNyZWRlbnRpYWxzOiByZHMuQ3JlZGVudGlhbHMuZnJvbUdlbmVyYXRlZFNlY3JldChpbnN0YW5jZV9uYW1lLCB7fSksXG5cblxuICAgICAgLy8gTWV0aG9kIDIgOiBEZXByZWNhdGUgISFcbiAgICAgIC8vIGNyZWRlbnRpYWxzOiByZHMuQ3JlZGVudGlhbHMuZnJvbVVzZXJuYW1lKCdhZG1pbicsIHsgdTonJyB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiByZHMuQ3JlZGVudGlhbHMuZnJvbUdlbmVyYXRlZFNlY3JldChkYXRhYmFzZV9uYW1lLCB7IHNlY3JldE5hbWU6IGluc3RhbmNlX25hbWUgfSksXG4gICAgICAvLyBjcmVkZW50aWFsczogcmRzLkNyZWRlbnRpYWxzLmZyb21Vc2VybmFtZShkYXRhYmFzZV9uYW1lLCB7IHNlY3JldE5hbWU6IGluc3RhbmNlX25hbWUgfSksXG5cbiAgICAgIHZwYyxcbiAgICAgIHZwY1N1Ym5ldHM6IHtcbiAgICAgICAgc3VibmV0VHlwZTogZWMyLlN1Ym5ldFR5cGUuUFVCTElDLFxuICAgICAgfSxcbiAgICAgIHB1YmxpY2x5QWNjZXNzaWJsZTogdHJ1ZSxcbiAgICB9KVxuXG4gICAgaW5zdGFuY2UuY29ubmVjdGlvbnMuYWxsb3dGcm9tQW55SXB2NChlYzIuUG9ydC50Y3AoNTQzMikpXG4gIH1cbn1cbiJdfQ==