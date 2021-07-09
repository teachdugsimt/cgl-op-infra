import * as cdk from '@aws-cdk/core'
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import *  as origins from '@aws-cdk/aws-cloudfront-origins'
import * as  s3 from '@aws-cdk/aws-s3'

export class CloudFrontStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        const policies = new cloudfront.CachePolicy(this, "CglCachePolicy", {
            cachePolicyName: 'allow-cors-to-authoization',
            comment: "whitelist-headers",
            enableAcceptEncodingGzip: true,
            enableAcceptEncodingBrotli: true,
            minTtl: cdk.Duration.seconds(1),
            maxTtl: cdk.Duration.seconds(1),
            defaultTtl: cdk.Duration.seconds(1),
            queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
            headerBehavior: cloudfront.CacheHeaderBehavior.allowList('Authorization', 'Origin',
                'Access-Control-Request-Method',
                'Access-Control-Request-Headers', 'Acceapt-Language', 'Content-Type', 'Accept')
        })

        const cloudfrontBucket = new s3.Bucket(this, id, {
            bucketName: process.env.S3_BUCKET_NAME_CLOUDFRONT || "cgl-cloudfront-log-dev",
            accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
        })
        const originDomain = '2kgrbiwfnc.execute-api.ap-southeast-1.amazonaws.com'
        new cloudfront.Distribution(this, 'CglCloudFront', {
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
                cachePolicy: {  //  ONly one props
                    cachePolicyId: policies.cachePolicyId
                },

                cachedMethods: { methods: ['GET', 'HEAD'] },  // don't have effect with API normal request (exclude GET,HEAD)
                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,  // INCLUDE ALL Request method for API gateway
                // allowedMethods: { methods: ['GET', 'HEAD'] }  // don't have effect with API normal request (exclude GET,HEAD)
            },
            priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL
        })

    }

}