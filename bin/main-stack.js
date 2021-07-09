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
const nested_stack_2 = require("../lib/cloudfront-stack/nested-stack");
const app = new cdk.App();
const envSgp = { region: 'ap-southeast-1' };
new nested_stack_1.MainStack(app, 'InfraStackDB', { env: envSgp });
new secrets_manager_stack_1.LegacySecretsManagerStack(app, 'InfraStackSecretsHashKey', { env: envSgp });
new cognito_stack_1.CognitoStack(app, 'InfraStackCognito', { env: envSgp });
new dynamo_db_stack_1.DynamoDBStack(app, 'InfraStackDynamoDB', { env: envSgp });
new cargolink_document_stack_1.CargolinkDocumentStack(app, 'InfraStackS3CargolinkDocument', { env: envSgp });
new pinpoint_stack_1.PinpointStack(app, 'InfraStackPinPoint', { env: envSgp });
new kms_stack_1.KmsStack(app, 'InfraStackKms', { env: envSgp });
new nested_stack_2.CloudFrontStack(app, process.env.CLOUDFRONT_STACK_NAME || "InfraCloudFrontTest", { env: envSgp });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQywrREFBeUQ7QUFDekQsOEZBQStGO0FBQy9GLHNFQUFrRTtBQUNsRSw0RUFBdUU7QUFDdkUsMEdBQXFHO0FBQ3JHLHlFQUFxRTtBQUNyRSwwREFBc0Q7QUFDdEQsdUVBQXNFO0FBRXRFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLENBQUE7QUFDM0MsSUFBSSx3QkFBUyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwRCxJQUFJLGlEQUF5QixDQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2hGLElBQUksNEJBQVksQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM1RCxJQUFJLCtCQUFhLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDOUQsSUFBSSxpREFBc0IsQ0FBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNsRixJQUFJLDhCQUFhLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDOUQsSUFBSSxvQkFBUSxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwRCxJQUFJLDhCQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUkscUJBQXFCLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IE1haW5TdGFjayB9IGZyb20gJy4uL2xpYi9kYi1zdGFjay9uZXN0ZWQtc3RhY2snO1xuaW1wb3J0IHsgTGVnYWN5U2VjcmV0c01hbmFnZXJTdGFjayB9IGZyb20gJy4uL2xpYi9zZWNyZXRzLW1hbmFnZXItc3RhY2svc2VjcmV0cy1tYW5hZ2VyLXN0YWNrJztcbmltcG9ydCB7IENvZ25pdG9TdGFjayB9IGZyb20gJy4uL2xpYi9jb2duaXRvLXN0YWNrL2NvZ25pdG8tc3RhY2snO1xuaW1wb3J0IHsgRHluYW1vREJTdGFjayB9IGZyb20gJy4uL2xpYi9keW5hbW8tZGItc3RhY2svZHluYW1vLWRiLXN0YWNrJztcbmltcG9ydCB7IENhcmdvbGlua0RvY3VtZW50U3RhY2sgfSBmcm9tICcuLi9saWIvczMtY2FyZ29saW5rLWRvY3VtZW50LXN0YWNrL2NhcmdvbGluay1kb2N1bWVudC1zdGFjayc7XG5pbXBvcnQgeyBQaW5wb2ludFN0YWNrIH0gZnJvbSBcIi4uL2xpYi9waW5wb2ludC1zdGFjay9waW5wb2ludC1zdGFja1wiO1xuaW1wb3J0IHsgS21zU3RhY2sgfSBmcm9tIFwiLi4vbGliL2ttcy1zdGFjay9rbXMtc3RhY2tcIjtcbmltcG9ydCB7IENsb3VkRnJvbnRTdGFjayB9IGZyb20gJy4uL2xpYi9jbG91ZGZyb250LXN0YWNrL25lc3RlZC1zdGFjaydcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3QgZW52U2dwID0geyByZWdpb246ICdhcC1zb3V0aGVhc3QtMScgfVxubmV3IE1haW5TdGFjayhhcHAsICdJbmZyYVN0YWNrREInLCB7IGVudjogZW52U2dwIH0pO1xubmV3IExlZ2FjeVNlY3JldHNNYW5hZ2VyU3RhY2soYXBwLCAnSW5mcmFTdGFja1NlY3JldHNIYXNoS2V5JywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBDb2duaXRvU3RhY2soYXBwLCAnSW5mcmFTdGFja0NvZ25pdG8nLCB7IGVudjogZW52U2dwIH0pO1xubmV3IER5bmFtb0RCU3RhY2soYXBwLCAnSW5mcmFTdGFja0R5bmFtb0RCJywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBDYXJnb2xpbmtEb2N1bWVudFN0YWNrKGFwcCwgJ0luZnJhU3RhY2tTM0NhcmdvbGlua0RvY3VtZW50JywgeyBlbnY6IGVudlNncCB9KTtcbm5ldyBQaW5wb2ludFN0YWNrKGFwcCwgJ0luZnJhU3RhY2tQaW5Qb2ludCcsIHsgZW52OiBlbnZTZ3AgfSk7XG5uZXcgS21zU3RhY2soYXBwLCAnSW5mcmFTdGFja0ttcycsIHsgZW52OiBlbnZTZ3AgfSk7XG5uZXcgQ2xvdWRGcm9udFN0YWNrKGFwcCwgcHJvY2Vzcy5lbnYuQ0xPVURGUk9OVF9TVEFDS19OQU1FIHx8IFwiSW5mcmFDbG91ZEZyb250VGVzdFwiLCB7IGVudjogZW52U2dwIH0pOyJdfQ==