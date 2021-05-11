#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const legacy_db_stack_1 = require("../lib/db-stack/legacy-db-stack");
const secrets_manager_stack_1 = require("../lib/secrets-manager-stack/secrets-manager-stack");
const cognito_stack_1 = require("../lib/cognito-stack/cognito-stack");
const dynamo_db_stack_1 = require("../lib/dynamo-db-stack/dynamo-db-stack");
const app = new cdk.App();
const envSgp = { region: 'ap-southeast-1' };
new legacy_db_stack_1.LegacyDbStack(app, 'LegacyInfraStackDB', { env: envSgp });
new secrets_manager_stack_1.LegacySecretsManagerStack(app, 'LegacyInfraStackSecretsHashKey', { env: envSgp });
new cognito_stack_1.CognitoStack(app, 'LegacyInfraStackCognito', { env: envSgp });
new dynamo_db_stack_1.DynamoDBStack(app, 'LegacyInfraStackDynamoDB', { env: envSgp });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxxRUFBZ0U7QUFDaEUsOEZBQStGO0FBQy9GLHNFQUFrRTtBQUNsRSw0RUFBdUU7QUFFdkUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsTUFBTSxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQTtBQUMzQyxJQUFJLCtCQUFhLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDOUQsSUFBSSxpREFBeUIsQ0FBQyxHQUFHLEVBQUUsZ0NBQWdDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0RixJQUFJLDRCQUFZLENBQUMsR0FBRyxFQUFFLHlCQUF5QixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbEUsSUFBSSwrQkFBYSxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgTGVnYWN5RGJTdGFjayB9IGZyb20gJy4uL2xpYi9kYi1zdGFjay9sZWdhY3ktZGItc3RhY2snO1xuaW1wb3J0IHsgTGVnYWN5U2VjcmV0c01hbmFnZXJTdGFjayB9IGZyb20gJy4uL2xpYi9zZWNyZXRzLW1hbmFnZXItc3RhY2svc2VjcmV0cy1tYW5hZ2VyLXN0YWNrJztcbmltcG9ydCB7IENvZ25pdG9TdGFjayB9IGZyb20gJy4uL2xpYi9jb2duaXRvLXN0YWNrL2NvZ25pdG8tc3RhY2snO1xuaW1wb3J0IHsgRHluYW1vREJTdGFjayB9IGZyb20gJy4uL2xpYi9keW5hbW8tZGItc3RhY2svZHluYW1vLWRiLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3QgZW52U2dwID0geyByZWdpb246ICdhcC1zb3V0aGVhc3QtMScgfVxubmV3IExlZ2FjeURiU3RhY2soYXBwLCAnTGVnYWN5SW5mcmFTdGFja0RCJywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBMZWdhY3lTZWNyZXRzTWFuYWdlclN0YWNrKGFwcCwgJ0xlZ2FjeUluZnJhU3RhY2tTZWNyZXRzSGFzaEtleScsIHsgZW52OiBlbnZTZ3AgfSk7XG5uZXcgQ29nbml0b1N0YWNrKGFwcCwgJ0xlZ2FjeUluZnJhU3RhY2tDb2duaXRvJywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBEeW5hbW9EQlN0YWNrKGFwcCwgJ0xlZ2FjeUluZnJhU3RhY2tEeW5hbW9EQicsIHsgZW52OiBlbnZTZ3AgfSk7XG4iXX0=