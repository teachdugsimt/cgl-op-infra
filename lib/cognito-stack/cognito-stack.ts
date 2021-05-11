import * as cognito from "@aws-cdk/aws-cognito";
import * as cdk from '@aws-cdk/core';
export class CognitoStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // cognito
        const userPool = new cognito.UserPool(this, 'CglUserPool', {
            userPoolName: 'CglUserAuthorizationPool',
            selfSignUpEnabled: true,
            userVerification: {
                emailSubject: 'Verify your email for our awesome app!!',
                emailBody: 'Thanks for signing up to our awesome app!! Your verification code is {####}',
                emailStyle: cognito.VerificationEmailStyle.CODE,
                smsMessage: 'Thanks for signing up to our awesome app!! Your verification code is {####}',
            },
            signInAliases: {
                email: true,
                phone: true,
            },
            autoVerify: {
                email: true,
                phone: true
            },
            accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
            mfa: cognito.Mfa.REQUIRED,
            mfaSecondFactor: {
                sms: true,
                otp: true,
            },
            passwordPolicy: {
                minLength: 12,
                requireLowercase: true,
                requireUppercase: true,
                requireDigits: true,
                requireSymbols: true,
                // tempPasswordValidity: cdk.Duration.days(3),
            },
        });
        
        const client = userPool.addClient('CglAppClient', {
            accessTokenValidity: cdk.Duration.minutes(60),
            idTokenValidity: cdk.Duration.minutes(60),
            refreshTokenValidity: cdk.Duration.days(30),
        })
        client.userPoolClientId

    }
}
