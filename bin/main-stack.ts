#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import * as AWS from 'aws-sdk'

import { MainStack } from '../lib/db-stack/nested-stack';
import { LegacySecretsManagerStack } from '../lib/secrets-manager-stack/secrets-manager-stack';
import { CognitoStack } from '../lib/cognito-stack/cognito-stack';
import { DynamoDBStack } from '../lib/dynamo-db-stack/dynamo-db-stack';
import { CargolinkDocumentStack } from '../lib/s3-cargolink-document-stack/cargolink-document-stack';
import { PinpointStack } from "../lib/pinpoint-stack/pinpoint-stack";
import { KmsStack } from "../lib/kms-stack/kms-stack";
import { CloudFrontStack } from '../lib/cloudfront-stack/nested-stack'
import { ApiGatewayStack } from '../lib/api-gateway-stack/api-gateway-stack';
import { spawn } from 'child_process';

const app = new cdk.App();

const envSgp = { region: 'ap-southeast-1' }
new MainStack(app, process.env.RDS_STACK_NAME || 'InfraStackDB', { env: envSgp });
new LegacySecretsManagerStack(app, process.env.SECRET_MANAGER_STACK_NAME || 'InfraStackSecretsHashKey', { env: envSgp });
const cognito_stack = new CognitoStack(app, process.env.COGNITO_STACK_NAME || 'InfraStackCognito', { env: envSgp });
new DynamoDBStack(app, process.env.DYNAMO_STACK_NAME || 'InfraStackDynamoDB', { env: envSgp });
new CargolinkDocumentStack(app, process.env.S3_STACK_NAME || 'InfraStackS3CargolinkDocument', { env: envSgp });
new PinpointStack(app, process.env.PINPOINT_STACK_NAME || 'InfraStackPinPoint', { env: envSgp });
new KmsStack(app, process.env.KMS_STACK_NAME || 'InfraStackKms', { env: envSgp });
// const apigw_stack = new ApiGatewayStack(app, process.env.API_GATEWAY_STACK_NAME || "InfraStackApiGwateway", { env: envSgp })

// exec('aws cloudformation list-exports --region ap-southeast-1')
const ls = spawn("aws", ["cloudformation", "list-exports"]);
ls.stdout.on("data", data => {
    const exports = JSON.parse(data.toString('utf-8'))

    const exportedList = exports.Exports.filter((e: any) => e.Name == 'ApiGatewayStack:APIGwCglOpAPIUrl')
    if (exportedList.length > 0) {
        const gwUrl = exportedList[0].Value
        // cdk.Fn.importValue('ApiGatewayStack:APIGwCglOpAPIUrl')
        console.log('GWURL', exportedList[0].Value)
        new CloudFrontStack(app, process.env.CLOUDFRONT_STACK_NAME || "InfraCloudFrontTest", {
            env: envSgp,
            apigwUrl: gwUrl.replace(/(^\w+:|^)\/\//, '')
        });
    }
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});

