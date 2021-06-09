#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MainStack } from '../lib/db-stack/nested-stack';
import { LegacySecretsManagerStack } from '../lib/secrets-manager-stack/secrets-manager-stack';
import { CognitoStack } from '../lib/cognito-stack/cognito-stack';
import { DynamoDBStack } from '../lib/dynamo-db-stack/dynamo-db-stack';
import { CargolinkDocumentStack } from '../lib/s3-cargolink-document-stack/cargolink-document-stack';

const app = new cdk.App();

const envSgp = { region: 'ap-southeast-1' }
new MainStack(app, 'InfraStackDB', { env: envSgp });
new LegacySecretsManagerStack(app, 'InfraStackSecretsHashKey', { env: envSgp });
new CognitoStack(app, 'InfraStackCognito', { env: envSgp });
new DynamoDBStack(app, 'InfraStackDynamoDB', { env: envSgp });
new CargolinkDocumentStack(app, 'InfraStackS3CargolinkDocument', { env: envSgp });
