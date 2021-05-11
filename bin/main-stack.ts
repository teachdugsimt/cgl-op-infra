#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
// import { LegacyDbStack } from '../lib/db-stack/legacy-db-stack';
import { MainStack } from '../lib/db-stack/nested-stack';
import { LegacySecretsManagerStack } from '../lib/secrets-manager-stack/secrets-manager-stack';
import { CognitoStack } from '../lib/cognito-stack/cognito-stack';
import { DynamoDBStack } from '../lib/dynamo-db-stack/dynamo-db-stack';
import { SmsSenderServiceStack } from '../lib/sms-sender-stack/sms-sender-service-stack';

const app = new cdk.App();

const envSgp = { region: 'ap-southeast-1' }
// new LegacyDbStack(app, 'LegacyInfraStackDB', { env: envSgp });
new MainStack(app, 'LegacyInfraStackDB', { env: envSgp });
new LegacySecretsManagerStack(app, 'LegacyInfraStackSecretsHashKey', { env: envSgp });
new CognitoStack(app, 'LegacyInfraStackCognito', { env: envSgp });
new DynamoDBStack(app, 'LegacyInfraStackDynamoDB', { env: envSgp });
new SmsSenderServiceStack(app, 'LegacyInfraStackSmsSender', { env: envSgp });
