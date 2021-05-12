import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as LegacyDb from '../lib/db-stack/nested-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LegacyDb.MainStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
