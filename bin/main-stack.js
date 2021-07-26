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
const pinpoint_stack_1 = require("../lib/pinpoint-stack/pinpoint-stack");
const kms_stack_1 = require("../lib/kms-stack/kms-stack");
const cloudfront_stack_1 = require("../lib/cloudfront-stack/cloudfront-stack");
const app = new cdk.App();
const envSgp = { region: 'ap-southeast-1' };
new nested_stack_1.MainStack(app, process.env.RDS_STACK_NAME || 'InfraStackDB', { env: envSgp });
new secrets_manager_stack_1.LegacySecretsManagerStack(app, process.env.SECRET_MANAGER_STACK_NAME || 'InfraStackSecretsHashKey', { env: envSgp });
new cognito_stack_1.CognitoStack(app, process.env.COGNITO_STACK_NAME || 'InfraStackCognito', { env: envSgp });
new dynamo_db_stack_1.DynamoDBStack(app, process.env.DYNAMO_STACK_NAME || 'InfraStackDynamoDB', { env: envSgp });
new cargolink_document_stack_1.CargolinkDocumentStack(app, process.env.S3_STACK_NAME || 'InfraStackS3CargolinkDocument', { env: envSgp });
new pinpoint_stack_1.PinpointStack(app, process.env.PINPOINT_STACK_NAME || 'InfraStackPinPoint', { env: envSgp });
new kms_stack_1.KmsStack(app, process.env.KMS_STACK_NAME || 'InfraStackKms', { env: envSgp });
new cloudfront_stack_1.CloudFrontStack(app, process.env.CLOUDFRONT_STACK_NAME || "InfraCloudFrontTest", { env: envSgp });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQywrREFBeUQ7QUFDekQsOEZBQStGO0FBQy9GLHNFQUFrRTtBQUNsRSw0RUFBdUU7QUFDdkUsMEdBQXFHO0FBQ3JHLHlFQUFxRTtBQUNyRSwwREFBc0Q7QUFDdEQsK0VBQTBFO0FBRTFFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLENBQUE7QUFDM0MsSUFBSSx3QkFBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNsRixJQUFJLGlEQUF5QixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixJQUFJLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDekgsSUFBSSw0QkFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLG1CQUFtQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDOUYsSUFBSSwrQkFBYSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLG9CQUFvQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDL0YsSUFBSSxpREFBc0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksK0JBQStCLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMvRyxJQUFJLDhCQUFhLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLElBQUksb0JBQW9CLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqRyxJQUFJLG9CQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxJQUFJLGVBQWUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLElBQUksa0NBQWUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgTWFpblN0YWNrIH0gZnJvbSAnLi4vbGliL2RiLXN0YWNrL25lc3RlZC1zdGFjayc7XG5pbXBvcnQgeyBMZWdhY3lTZWNyZXRzTWFuYWdlclN0YWNrIH0gZnJvbSAnLi4vbGliL3NlY3JldHMtbWFuYWdlci1zdGFjay9zZWNyZXRzLW1hbmFnZXItc3RhY2snO1xuaW1wb3J0IHsgQ29nbml0b1N0YWNrIH0gZnJvbSAnLi4vbGliL2NvZ25pdG8tc3RhY2svY29nbml0by1zdGFjayc7XG5pbXBvcnQgeyBEeW5hbW9EQlN0YWNrIH0gZnJvbSAnLi4vbGliL2R5bmFtby1kYi1zdGFjay9keW5hbW8tZGItc3RhY2snO1xuaW1wb3J0IHsgQ2FyZ29saW5rRG9jdW1lbnRTdGFjayB9IGZyb20gJy4uL2xpYi9zMy1jYXJnb2xpbmstZG9jdW1lbnQtc3RhY2svY2FyZ29saW5rLWRvY3VtZW50LXN0YWNrJztcbmltcG9ydCB7IFBpbnBvaW50U3RhY2sgfSBmcm9tIFwiLi4vbGliL3BpbnBvaW50LXN0YWNrL3BpbnBvaW50LXN0YWNrXCI7XG5pbXBvcnQgeyBLbXNTdGFjayB9IGZyb20gXCIuLi9saWIva21zLXN0YWNrL2ttcy1zdGFja1wiO1xuaW1wb3J0IHsgQ2xvdWRGcm9udFN0YWNrIH0gZnJvbSAnLi4vbGliL2Nsb3VkZnJvbnQtc3RhY2svY2xvdWRmcm9udC1zdGFjaydcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3QgZW52U2dwID0geyByZWdpb246ICdhcC1zb3V0aGVhc3QtMScgfVxubmV3IE1haW5TdGFjayhhcHAsIHByb2Nlc3MuZW52LlJEU19TVEFDS19OQU1FIHx8ICdJbmZyYVN0YWNrREInLCB7IGVudjogZW52U2dwIH0pO1xubmV3IExlZ2FjeVNlY3JldHNNYW5hZ2VyU3RhY2soYXBwLCBwcm9jZXNzLmVudi5TRUNSRVRfTUFOQUdFUl9TVEFDS19OQU1FIHx8ICdJbmZyYVN0YWNrU2VjcmV0c0hhc2hLZXknLCB7IGVudjogZW52U2dwIH0pO1xubmV3IENvZ25pdG9TdGFjayhhcHAsIHByb2Nlc3MuZW52LkNPR05JVE9fU1RBQ0tfTkFNRSB8fCAnSW5mcmFTdGFja0NvZ25pdG8nLCB7IGVudjogZW52U2dwIH0pO1xubmV3IER5bmFtb0RCU3RhY2soYXBwLCBwcm9jZXNzLmVudi5EWU5BTU9fU1RBQ0tfTkFNRSB8fCAnSW5mcmFTdGFja0R5bmFtb0RCJywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBDYXJnb2xpbmtEb2N1bWVudFN0YWNrKGFwcCwgcHJvY2Vzcy5lbnYuUzNfU1RBQ0tfTkFNRSB8fCAnSW5mcmFTdGFja1MzQ2FyZ29saW5rRG9jdW1lbnQnLCB7IGVudjogZW52U2dwIH0pO1xubmV3IFBpbnBvaW50U3RhY2soYXBwLCBwcm9jZXNzLmVudi5QSU5QT0lOVF9TVEFDS19OQU1FIHx8ICdJbmZyYVN0YWNrUGluUG9pbnQnLCB7IGVudjogZW52U2dwIH0pO1xubmV3IEttc1N0YWNrKGFwcCwgcHJvY2Vzcy5lbnYuS01TX1NUQUNLX05BTUUgfHwgJ0luZnJhU3RhY2tLbXMnLCB7IGVudjogZW52U2dwIH0pO1xubmV3IENsb3VkRnJvbnRTdGFjayhhcHAsIHByb2Nlc3MuZW52LkNMT1VERlJPTlRfU1RBQ0tfTkFNRSB8fCBcIkluZnJhQ2xvdWRGcm9udFRlc3RcIiwgeyBlbnY6IGVudlNncCB9KTsiXX0=