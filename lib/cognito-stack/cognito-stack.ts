import * as cognito from "@aws-cdk/aws-cognito";
import * as cdk from '@aws-cdk/core';
// import * as secretsManager from "@aws-cdk/aws-secretsmanager";
export class CognitoStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // cognito
        const userPool = new cognito.UserPool(this, 'CglUserAuthenticationPool', {
            userPoolName: 'CGL-User-Authentication',
            selfSignUpEnabled: true,
            signInCaseSensitive: true,
            signInAliases: {
                email: true,
                phone: true,
            },
            autoVerify: {
                email: false,
                phone: false
            },
            mfa: cognito.Mfa.OFF,
            smsRole: undefined,
            customAttributes: {
                userId: new cognito.StringAttribute({ minLen: 8, maxLen: 12, mutable: true })
            },
            accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
            passwordPolicy: {
                minLength: 8,
            },
        });

        const clientWriteAttributes = (new cognito.ClientAttributes())
            .withStandardAttributes({
                fullname: true,
                email: true,
                phoneNumber: true,
            })
            .withCustomAttributes('userId');

        const clientReadAttributes = clientWriteAttributes

        const client = userPool.addClient('CglUserAppClient', {
            userPoolClientName: 'CglUserAutheAppClient',
            accessTokenValidity: cdk.Duration.minutes(60),
            idTokenValidity: cdk.Duration.minutes(60),
            refreshTokenValidity: cdk.Duration.days(30),
            authFlows: {
                custom: true,
                userSrp: true,
            },
            preventUserExistenceErrors: true,
            writeAttributes: clientWriteAttributes,
            readAttributes: clientReadAttributes,
        });

        new cdk.CfnOutput(this, "UserPoolId", {
            value: userPool.userPoolId,
            exportName: "CognitoStack:UserPoolId"
        });

        new cdk.CfnOutput(this, "UserPoolClientId", {
            value: client.userPoolClientId,
            exportName: "CognitoStack:UserPoolClientId"
        });
    }
}
