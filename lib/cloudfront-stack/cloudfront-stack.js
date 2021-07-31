"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFrontStack = void 0;
const cdk = require("@aws-cdk/core");
const cloudfront = require("@aws-cdk/aws-cloudfront");
const origins = require("@aws-cdk/aws-cloudfront-origins");
const s3 = require("@aws-cdk/aws-s3");
const certificate = require("@aws-cdk/aws-certificatemanager");
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
        const cloudfrontBucket = new s3.Bucket(this, id, {
            bucketName: process.env.S3_BUCKET_NAME_CLOUDFRONT || "cgl-cloudfront-log-dev",
            accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
        });
        const originDomain = '2kgrbiwfnc.execute-api.ap-southeast-1.amazonaws.com';
        new cloudfront.Distribution(this, 'CglCloudFront', {
            domainNames: ["dev.api.cargolink.co.th"],
            certificate: certificate.Certificate.fromCertificateArn(this, 'cgl-dev-certificate', 'arn:aws:acm:ap-southeast-1:029707422715:certificate/d7bea37d-b29c-4166-af4d-224986b8fdcf'),
            comment: "cargolink-cloudfront",
            logBucket: cloudfrontBucket,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkZnJvbnQtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW9DO0FBQ3BDLHNEQUFzRDtBQUN0RCwyREFBMkQ7QUFDM0Qsc0NBQXNDO0FBQ3RDLCtEQUE4RDtBQUU5RCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFMUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUV2QixNQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ2hFLGVBQWUsRUFBRSw0QkFBNEI7WUFDN0MsT0FBTyxFQUFFLG1CQUFtQjtZQUM1Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLDBCQUEwQixFQUFFLElBQUk7WUFDaEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRTtZQUM5RCxjQUFjLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUM5RSwrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQztTQUN0RixDQUFDLENBQUE7UUFFRixNQUFNLGdCQUFnQixHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQzdDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixJQUFJLHdCQUF3QjtZQUM3RSxhQUFhLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QjtTQUNsRSxDQUFDLENBQUE7UUFDRixNQUFNLFlBQVksR0FBRyxxREFBcUQsQ0FBQTtRQUMxRSxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUMvQyxXQUFXLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN4QyxXQUFXLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQ3hELHFCQUFxQixFQUNyQiwwRkFBMEYsQ0FBQztZQUMvRixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixhQUFhLEVBQUUsSUFBSTtZQUNuQixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDekMsc0JBQXNCLEVBQUUsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGFBQWE7WUFDdkUsZUFBZSxFQUFFO2dCQUNiLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO29CQUN6QyxVQUFVLEVBQUUsT0FBTztvQkFDbkIsY0FBYyxFQUFFLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVO29CQUMxRCxXQUFXLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUNyQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQzlDLENBQUM7Z0JBQ0Ysb0JBQW9CLEVBQUUsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQjtnQkFDdkUsV0FBVyxFQUFFO29CQUNULGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBYTtpQkFDeEM7Z0JBRUQsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUMzQyxjQUFjLEVBQUUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTO2FBRXREO1lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsZUFBZTtTQUNwRCxDQUFDLENBQUE7SUFFTixDQUFDO0NBRUo7QUExREQsMENBMERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnXG5pbXBvcnQgKiBhcyBjbG91ZGZyb250IGZyb20gJ0Bhd3MtY2RrL2F3cy1jbG91ZGZyb250JztcbmltcG9ydCAqICBhcyBvcmlnaW5zIGZyb20gJ0Bhd3MtY2RrL2F3cy1jbG91ZGZyb250LW9yaWdpbnMnXG5pbXBvcnQgKiBhcyAgczMgZnJvbSAnQGF3cy1jZGsvYXdzLXMzJ1xuaW1wb3J0ICogYXMgY2VydGlmaWNhdGUgZnJvbSAnQGF3cy1jZGsvYXdzLWNlcnRpZmljYXRlbWFuYWdlcidcblxuZXhwb3J0IGNsYXNzIENsb3VkRnJvbnRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBvbGljaWVzID0gbmV3IGNsb3VkZnJvbnQuQ2FjaGVQb2xpY3kodGhpcywgXCJDZ2xDYWNoZVBvbGljeVwiLCB7XG4gICAgICAgICAgICBjYWNoZVBvbGljeU5hbWU6ICdhbGxvdy1jb3JzLXRvLWF1dGhvaXphdGlvbicsXG4gICAgICAgICAgICBjb21tZW50OiBcIndoaXRlbGlzdC1oZWFkZXJzXCIsXG4gICAgICAgICAgICBlbmFibGVBY2NlcHRFbmNvZGluZ0d6aXA6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVBY2NlcHRFbmNvZGluZ0Jyb3RsaTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblR0bDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMSksXG4gICAgICAgICAgICBtYXhUdGw6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEpLFxuICAgICAgICAgICAgZGVmYXVsdFR0bDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMSksXG4gICAgICAgICAgICBxdWVyeVN0cmluZ0JlaGF2aW9yOiBjbG91ZGZyb250LkNhY2hlUXVlcnlTdHJpbmdCZWhhdmlvci5hbGwoKSxcbiAgICAgICAgICAgIGhlYWRlckJlaGF2aW9yOiBjbG91ZGZyb250LkNhY2hlSGVhZGVyQmVoYXZpb3IuYWxsb3dMaXN0KCdBdXRob3JpemF0aW9uJywgJ09yaWdpbicsXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJyxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJywgJ0FjY2VhcHQtTGFuZ3VhZ2UnLCAnQ29udGVudC1UeXBlJywgJ0FjY2VwdCcpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2xvdWRmcm9udEJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgaWQsIHtcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LlMzX0JVQ0tFVF9OQU1FX0NMT1VERlJPTlQgfHwgXCJjZ2wtY2xvdWRmcm9udC1sb2ctZGV2XCIsXG4gICAgICAgICAgICBhY2Nlc3NDb250cm9sOiBzMy5CdWNrZXRBY2Nlc3NDb250cm9sLkJVQ0tFVF9PV05FUl9GVUxMX0NPTlRST0xcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3JpZ2luRG9tYWluID0gJzJrZ3JiaXdmbmMuZXhlY3V0ZS1hcGkuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbSdcbiAgICAgICAgbmV3IGNsb3VkZnJvbnQuRGlzdHJpYnV0aW9uKHRoaXMsICdDZ2xDbG91ZEZyb250Jywge1xuICAgICAgICAgICAgZG9tYWluTmFtZXM6IFtcImRldi5hcGkuY2FyZ29saW5rLmNvLnRoXCJdLFxuICAgICAgICAgICAgY2VydGlmaWNhdGU6IGNlcnRpZmljYXRlLkNlcnRpZmljYXRlLmZyb21DZXJ0aWZpY2F0ZUFybih0aGlzLFxuICAgICAgICAgICAgICAgICdjZ2wtZGV2LWNlcnRpZmljYXRlJyxcbiAgICAgICAgICAgICAgICAnYXJuOmF3czphY206YXAtc291dGhlYXN0LTE6MDI5NzA3NDIyNzE1OmNlcnRpZmljYXRlL2Q3YmVhMzdkLWIyOWMtNDE2Ni1hZjRkLTIyNDk4NmI4ZmRjZicpLFxuICAgICAgICAgICAgY29tbWVudDogXCJjYXJnb2xpbmstY2xvdWRmcm9udFwiLFxuICAgICAgICAgICAgbG9nQnVja2V0OiBjbG91ZGZyb250QnVja2V0LFxuICAgICAgICAgICAgbG9nRmlsZVByZWZpeDogXCJjZ2wtY2xvdWRmcm9udFwiLFxuICAgICAgICAgICAgZW5hYmxlTG9nZ2luZzogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVJcHY2OiB0cnVlLFxuICAgICAgICAgICAgaHR0cFZlcnNpb246IGNsb3VkZnJvbnQuSHR0cFZlcnNpb24uSFRUUDIsXG4gICAgICAgICAgICBtaW5pbXVtUHJvdG9jb2xWZXJzaW9uOiBjbG91ZGZyb250LlNlY3VyaXR5UG9saWN5UHJvdG9jb2wuVExTX1YxXzJfMjAxOCxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjoge1xuICAgICAgICAgICAgICAgIG9yaWdpbjogbmV3IG9yaWdpbnMuSHR0cE9yaWdpbihvcmlnaW5Eb21haW4sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luUGF0aDogXCIvcHJvZFwiLFxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbFBvbGljeTogY2xvdWRmcm9udC5PcmlnaW5Qcm90b2NvbFBvbGljeS5IVFRQU19PTkxZLFxuICAgICAgICAgICAgICAgICAgICByZWFkVGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNDApLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uVGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHZpZXdlclByb3RvY29sUG9saWN5OiBjbG91ZGZyb250LlZpZXdlclByb3RvY29sUG9saWN5LlJFRElSRUNUX1RPX0hUVFBTLFxuICAgICAgICAgICAgICAgIGNhY2hlUG9saWN5OiB7ICAvLyAgT05seSBvbmUgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVQb2xpY3lJZDogcG9saWNpZXMuY2FjaGVQb2xpY3lJZFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjYWNoZWRNZXRob2RzOiB7IG1ldGhvZHM6IFsnR0VUJywgJ0hFQUQnXSB9LCAgLy8gZG9uJ3QgaGF2ZSBlZmZlY3Qgd2l0aCBBUEkgbm9ybWFsIHJlcXVlc3QgKGV4Y2x1ZGUgR0VULEhFQUQpXG4gICAgICAgICAgICAgICAgYWxsb3dlZE1ldGhvZHM6IGNsb3VkZnJvbnQuQWxsb3dlZE1ldGhvZHMuQUxMT1dfQUxMLCAgLy8gSU5DTFVERSBBTEwgUmVxdWVzdCBtZXRob2QgZm9yIEFQSSBnYXRld2F5XG4gICAgICAgICAgICAgICAgLy8gYWxsb3dlZE1ldGhvZHM6IHsgbWV0aG9kczogWydHRVQnLCAnSEVBRCddIH0gIC8vIGRvbid0IGhhdmUgZWZmZWN0IHdpdGggQVBJIG5vcm1hbCByZXF1ZXN0IChleGNsdWRlIEdFVCxIRUFEKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlQ2xhc3M6IGNsb3VkZnJvbnQuUHJpY2VDbGFzcy5QUklDRV9DTEFTU19BTExcbiAgICAgICAgfSlcblxuICAgIH1cblxufSJdfQ==