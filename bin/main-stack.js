#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const nested_stack_1 = require("../lib/db-stack/nested-stack");
const secrets_manager_stack_1 = require("../lib/secrets-manager-stack/secrets-manager-stack");
const cognito_stack_1 = require("../lib/cognito-stack/cognito-stack");
const dynamo_db_stack_1 = require("../lib/dynamo-db-stack/dynamo-db-stack");
const cargolink_document_stack_1 = require("../lib/s3-cargolink-document-stack/cargolink-document-stack");
const app = new cdk.App();
const envSgp = { region: 'ap-southeast-1' };
new nested_stack_1.MainStack(app, 'InfraStackDB', { env: envSgp });
new secrets_manager_stack_1.LegacySecretsManagerStack(app, 'InfraStackSecretsHashKey', { env: envSgp });
new cognito_stack_1.CognitoStack(app, 'InfraStackCognito', { env: envSgp });
new dynamo_db_stack_1.DynamoDBStack(app, 'InfraStackDynamoDB', { env: envSgp });
new cargolink_document_stack_1.CargolinkDocumentStack(app, 'InfraStackS3CargolinkDocument', { env: envSgp });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQywrREFBeUQ7QUFDekQsOEZBQStGO0FBQy9GLHNFQUFrRTtBQUNsRSw0RUFBdUU7QUFDdkUsMEdBQXFHO0FBRXJHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLENBQUE7QUFDM0MsSUFBSSx3QkFBUyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwRCxJQUFJLGlEQUF5QixDQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2hGLElBQUksNEJBQVksQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM1RCxJQUFJLCtCQUFhLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDOUQsSUFBSSxpREFBc0IsQ0FBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IE1haW5TdGFjayB9IGZyb20gJy4uL2xpYi9kYi1zdGFjay9uZXN0ZWQtc3RhY2snO1xuaW1wb3J0IHsgTGVnYWN5U2VjcmV0c01hbmFnZXJTdGFjayB9IGZyb20gJy4uL2xpYi9zZWNyZXRzLW1hbmFnZXItc3RhY2svc2VjcmV0cy1tYW5hZ2VyLXN0YWNrJztcbmltcG9ydCB7IENvZ25pdG9TdGFjayB9IGZyb20gJy4uL2xpYi9jb2duaXRvLXN0YWNrL2NvZ25pdG8tc3RhY2snO1xuaW1wb3J0IHsgRHluYW1vREJTdGFjayB9IGZyb20gJy4uL2xpYi9keW5hbW8tZGItc3RhY2svZHluYW1vLWRiLXN0YWNrJztcbmltcG9ydCB7IENhcmdvbGlua0RvY3VtZW50U3RhY2sgfSBmcm9tICcuLi9saWIvczMtY2FyZ29saW5rLWRvY3VtZW50LXN0YWNrL2NhcmdvbGluay1kb2N1bWVudC1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbmNvbnN0IGVudlNncCA9IHsgcmVnaW9uOiAnYXAtc291dGhlYXN0LTEnIH1cbm5ldyBNYWluU3RhY2soYXBwLCAnSW5mcmFTdGFja0RCJywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBMZWdhY3lTZWNyZXRzTWFuYWdlclN0YWNrKGFwcCwgJ0luZnJhU3RhY2tTZWNyZXRzSGFzaEtleScsIHsgZW52OiBlbnZTZ3AgfSk7XG5uZXcgQ29nbml0b1N0YWNrKGFwcCwgJ0luZnJhU3RhY2tDb2duaXRvJywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBEeW5hbW9EQlN0YWNrKGFwcCwgJ0luZnJhU3RhY2tEeW5hbW9EQicsIHsgZW52OiBlbnZTZ3AgfSk7XG5uZXcgQ2FyZ29saW5rRG9jdW1lbnRTdGFjayhhcHAsICdJbmZyYVN0YWNrUzNDYXJnb2xpbmtEb2N1bWVudCcsIHsgZW52OiBlbnZTZ3AgfSk7XG4iXX0=