#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LegacyDbStack } from '../lib/legacy-db-stack';

const app = new cdk.App();

const envSgp = { region: 'ap-southeast-1' }
new LegacyDbStack(app, 'LegacyDbStack', { env: envSgp });
