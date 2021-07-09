"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFrontStack = void 0;
const cdk = require("@aws-cdk/core");
const cloudfront = require("@aws-cdk/aws-cloudfront");
const origins = require("@aws-cdk/aws-cloudfront-origins");
const s3 = require("@aws-cdk/aws-s3");
class CloudFrontStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const policies = new cloudfront.CachePolicy(this, "CglCachePolicy", {
            cachePolicyName: 'allow-cors-to-authoization',
            comment: "whitelist-headers",
            enableAcceptEncodingGzip: true,
            enableAcceptEncodingBrotli: true,
            minTtl: cdk.Duration.seconds(1),
            maxTtl: cdk.Duration.seconds(1),
            defaultTtl: cdk.Duration.seconds(1),
            queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
            headerBehavior: cloudfront.CacheHeaderBehavior.allowList('Authorization', 'Origin', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Acceapt-Language', 'Content-Type', 'Accept')
        });
        const originDomain = '2kgrbiwfnc.execute-api.ap-southeast-1.amazonaws.com';
        new cloudfront.Distribution(this, 'CglCloudFront', {
            comment: "cargolink-cloudfront",
            logBucket: s3.Bucket.fromBucketArn(this, "ImportBucket", "arn:aws:s3:::cloudfron-log"),
            logFilePrefix: "cgl-cloudfront",
            enableLogging: true,
            enabled: true,
            enableIpv6: true,
            httpVersion: cloudfront.HttpVersion.HTTP2,
            minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2018,
            defaultBehavior: {
                origin: new origins.HttpOrigin(originDomain, {
                    originPath: "/prod",
                    protocolPolicy: cloudfront.OriginProtocolPolicy.HTTPS_ONLY,
                    readTimeout: cdk.Duration.seconds(40),
                    connectionTimeout: cdk.Duration.seconds(10),
                }),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                cachePolicy: {
                    cachePolicyId: policies.cachePolicyId
                },
                cachedMethods: { methods: ['GET', 'HEAD'] },
                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
            },
            priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL
        });
    }
}
exports.CloudFrontStack = CloudFrontStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmVzdGVkLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvQztBQUNwQyxzREFBc0Q7QUFDdEQsMkRBQTJEO0FBQzNELHNDQUFzQztBQUV0QyxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFMUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUV2QixNQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ2hFLGVBQWUsRUFBRSw0QkFBNEI7WUFDN0MsT0FBTyxFQUFFLG1CQUFtQjtZQUM1Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLDBCQUEwQixFQUFFLElBQUk7WUFDaEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRTtZQUM5RCxjQUFjLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUM5RSwrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQztTQUN0RixDQUFDLENBQUE7UUFDRixNQUFNLFlBQVksR0FBRyxxREFBcUQsQ0FBQTtRQUMxRSxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUMvQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLDRCQUE0QixDQUFDO1lBQ3RGLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsYUFBYSxFQUFFLElBQUk7WUFDbkIsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQ3pDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhO1lBQ3ZFLGVBQWUsRUFBRTtnQkFDYixNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtvQkFDekMsVUFBVSxFQUFFLE9BQU87b0JBQ25CLGNBQWMsRUFBRSxVQUFVLENBQUMsb0JBQW9CLENBQUMsVUFBVTtvQkFDMUQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDckMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUM5QyxDQUFDO2dCQUNGLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUI7Z0JBQ3ZFLFdBQVcsRUFBRTtvQkFDVCxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWE7aUJBQ3hDO2dCQUVELGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDM0MsY0FBYyxFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUzthQUV0RDtZQUNELFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLGVBQWU7U0FDcEQsQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUVKO0FBakRELDBDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJ1xuaW1wb3J0ICogYXMgY2xvdWRmcm9udCBmcm9tICdAYXdzLWNkay9hd3MtY2xvdWRmcm9udCc7XG5pbXBvcnQgKiAgYXMgb3JpZ2lucyBmcm9tICdAYXdzLWNkay9hd3MtY2xvdWRmcm9udC1vcmlnaW5zJ1xuaW1wb3J0ICogYXMgIHMzIGZyb20gJ0Bhd3MtY2RrL2F3cy1zMydcblxuZXhwb3J0IGNsYXNzIENsb3VkRnJvbnRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBvbGljaWVzID0gbmV3IGNsb3VkZnJvbnQuQ2FjaGVQb2xpY3kodGhpcywgXCJDZ2xDYWNoZVBvbGljeVwiLCB7XG4gICAgICAgICAgICBjYWNoZVBvbGljeU5hbWU6ICdhbGxvdy1jb3JzLXRvLWF1dGhvaXphdGlvbicsXG4gICAgICAgICAgICBjb21tZW50OiBcIndoaXRlbGlzdC1oZWFkZXJzXCIsXG4gICAgICAgICAgICBlbmFibGVBY2NlcHRFbmNvZGluZ0d6aXA6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVBY2NlcHRFbmNvZGluZ0Jyb3RsaTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblR0bDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMSksXG4gICAgICAgICAgICBtYXhUdGw6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEpLFxuICAgICAgICAgICAgZGVmYXVsdFR0bDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMSksXG4gICAgICAgICAgICBxdWVyeVN0cmluZ0JlaGF2aW9yOiBjbG91ZGZyb250LkNhY2hlUXVlcnlTdHJpbmdCZWhhdmlvci5hbGwoKSxcbiAgICAgICAgICAgIGhlYWRlckJlaGF2aW9yOiBjbG91ZGZyb250LkNhY2hlSGVhZGVyQmVoYXZpb3IuYWxsb3dMaXN0KCdBdXRob3JpemF0aW9uJywgJ09yaWdpbicsXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJyxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJywgJ0FjY2VhcHQtTGFuZ3VhZ2UnLCAnQ29udGVudC1UeXBlJywgJ0FjY2VwdCcpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9yaWdpbkRvbWFpbiA9ICcya2dyYml3Zm5jLmV4ZWN1dGUtYXBpLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20nXG4gICAgICAgIG5ldyBjbG91ZGZyb250LkRpc3RyaWJ1dGlvbih0aGlzLCAnQ2dsQ2xvdWRGcm9udCcsIHtcbiAgICAgICAgICAgIGNvbW1lbnQ6IFwiY2FyZ29saW5rLWNsb3VkZnJvbnRcIixcbiAgICAgICAgICAgIGxvZ0J1Y2tldDogczMuQnVja2V0LmZyb21CdWNrZXRBcm4odGhpcywgXCJJbXBvcnRCdWNrZXRcIiwgXCJhcm46YXdzOnMzOjo6Y2xvdWRmcm9uLWxvZ1wiKSxcbiAgICAgICAgICAgIGxvZ0ZpbGVQcmVmaXg6IFwiY2dsLWNsb3VkZnJvbnRcIixcbiAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmc6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZW5hYmxlSXB2NjogdHJ1ZSxcbiAgICAgICAgICAgIGh0dHBWZXJzaW9uOiBjbG91ZGZyb250Lkh0dHBWZXJzaW9uLkhUVFAyLFxuICAgICAgICAgICAgbWluaW11bVByb3RvY29sVmVyc2lvbjogY2xvdWRmcm9udC5TZWN1cml0eVBvbGljeVByb3RvY29sLlRMU19WMV8yXzIwMTgsXG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyBvcmlnaW5zLkh0dHBPcmlnaW4ob3JpZ2luRG9tYWluLCB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblBhdGg6IFwiL3Byb2RcIixcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2xQb2xpY3k6IGNsb3VkZnJvbnQuT3JpZ2luUHJvdG9jb2xQb2xpY3kuSFRUUFNfT05MWSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZFRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDQwKSxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvblRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB2aWV3ZXJQcm90b2NvbFBvbGljeTogY2xvdWRmcm9udC5WaWV3ZXJQcm90b2NvbFBvbGljeS5SRURJUkVDVF9UT19IVFRQUyxcbiAgICAgICAgICAgICAgICBjYWNoZVBvbGljeTogeyAgLy8gIE9ObHkgb25lIHByb3BzXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUG9saWN5SWQ6IHBvbGljaWVzLmNhY2hlUG9saWN5SWRcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2FjaGVkTWV0aG9kczogeyBtZXRob2RzOiBbJ0dFVCcsICdIRUFEJ10gfSwgIC8vIGRvbid0IGhhdmUgZWZmZWN0IHdpdGggQVBJIG5vcm1hbCByZXF1ZXN0IChleGNsdWRlIEdFVCxIRUFEKVxuICAgICAgICAgICAgICAgIGFsbG93ZWRNZXRob2RzOiBjbG91ZGZyb250LkFsbG93ZWRNZXRob2RzLkFMTE9XX0FMTCwgIC8vIElOQ0xVREUgQUxMIFJlcXVlc3QgbWV0aG9kIGZvciBBUEkgZ2F0ZXdheVxuICAgICAgICAgICAgICAgIC8vIGFsbG93ZWRNZXRob2RzOiB7IG1ldGhvZHM6IFsnR0VUJywgJ0hFQUQnXSB9ICAvLyBkb24ndCBoYXZlIGVmZmVjdCB3aXRoIEFQSSBub3JtYWwgcmVxdWVzdCAoZXhjbHVkZSBHRVQsSEVBRClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUNsYXNzOiBjbG91ZGZyb250LlByaWNlQ2xhc3MuUFJJQ0VfQ0xBU1NfQUxMXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn0iXX0=