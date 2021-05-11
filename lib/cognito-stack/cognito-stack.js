"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoStack = void 0;
const cognito = require("@aws-cdk/aws-cognito");
const cdk = require("@aws-cdk/core");
class CognitoStack extends cdk.Stack {
    constructor(scope, id, props) {
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
            },
        });
        const client = userPool.addClient('CglAppClient', {
            accessTokenValidity: cdk.Duration.minutes(60),
            idTokenValidity: cdk.Duration.minutes(60),
            refreshTokenValidity: cdk.Duration.days(30),
        });
        client.userPoolClientId;
    }
}
exports.CognitoStack = CognitoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZ25pdG8tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQWdEO0FBQ2hELHFDQUFxQztBQUNyQyxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUV2QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLFVBQVU7UUFDVixNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN2RCxZQUFZLEVBQUUsMEJBQTBCO1lBQ3hDLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsZ0JBQWdCLEVBQUU7Z0JBQ2QsWUFBWSxFQUFFLHlDQUF5QztnQkFDdkQsU0FBUyxFQUFFLDZFQUE2RTtnQkFDeEYsVUFBVSxFQUFFLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJO2dCQUMvQyxVQUFVLEVBQUUsNkVBQTZFO2FBQzVGO1lBQ0QsYUFBYSxFQUFFO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDbkQsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtZQUN6QixlQUFlLEVBQUU7Z0JBQ2IsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsR0FBRyxFQUFFLElBQUk7YUFDWjtZQUNELGNBQWMsRUFBRTtnQkFDWixTQUFTLEVBQUUsRUFBRTtnQkFDYixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsY0FBYyxFQUFFLElBQUk7YUFFdkI7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM5QyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDN0MsZUFBZSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDOUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFBO0lBRTNCLENBQUM7Q0FDSjtBQTlDRCxvQ0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2duaXRvIGZyb20gXCJAYXdzLWNkay9hd3MtY29nbml0b1wiO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuZXhwb3J0IGNsYXNzIENvZ25pdG9TdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICAgICAgLy8gY29nbml0b1xuICAgICAgICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjb2duaXRvLlVzZXJQb29sKHRoaXMsICdDZ2xVc2VyUG9vbCcsIHtcbiAgICAgICAgICAgIHVzZXJQb29sTmFtZTogJ0NnbFVzZXJBdXRob3JpemF0aW9uUG9vbCcsXG4gICAgICAgICAgICBzZWxmU2lnblVwRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXJWZXJpZmljYXRpb246IHtcbiAgICAgICAgICAgICAgICBlbWFpbFN1YmplY3Q6ICdWZXJpZnkgeW91ciBlbWFpbCBmb3Igb3VyIGF3ZXNvbWUgYXBwISEnLFxuICAgICAgICAgICAgICAgIGVtYWlsQm9keTogJ1RoYW5rcyBmb3Igc2lnbmluZyB1cCB0byBvdXIgYXdlc29tZSBhcHAhISBZb3VyIHZlcmlmaWNhdGlvbiBjb2RlIGlzIHsjIyMjfScsXG4gICAgICAgICAgICAgICAgZW1haWxTdHlsZTogY29nbml0by5WZXJpZmljYXRpb25FbWFpbFN0eWxlLkNPREUsXG4gICAgICAgICAgICAgICAgc21zTWVzc2FnZTogJ1RoYW5rcyBmb3Igc2lnbmluZyB1cCB0byBvdXIgYXdlc29tZSBhcHAhISBZb3VyIHZlcmlmaWNhdGlvbiBjb2RlIGlzIHsjIyMjfScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2lnbkluQWxpYXNlczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBob25lOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9WZXJpZnk6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwaG9uZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY291bnRSZWNvdmVyeTogY29nbml0by5BY2NvdW50UmVjb3ZlcnkuRU1BSUxfT05MWSxcbiAgICAgICAgICAgIG1mYTogY29nbml0by5NZmEuUkVRVUlSRUQsXG4gICAgICAgICAgICBtZmFTZWNvbmRGYWN0b3I6IHtcbiAgICAgICAgICAgICAgICBzbXM6IHRydWUsXG4gICAgICAgICAgICAgICAgb3RwOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkUG9saWN5OiB7XG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxMixcbiAgICAgICAgICAgICAgICByZXF1aXJlTG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVVcHBlcmNhc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVxdWlyZURpZ2l0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXF1aXJlU3ltYm9sczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyB0ZW1wUGFzc3dvcmRWYWxpZGl0eTogY2RrLkR1cmF0aW9uLmRheXMoMyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHVzZXJQb29sLmFkZENsaWVudCgnQ2dsQXBwQ2xpZW50Jywge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5WYWxpZGl0eTogY2RrLkR1cmF0aW9uLm1pbnV0ZXMoNjApLFxuICAgICAgICAgICAgaWRUb2tlblZhbGlkaXR5OiBjZGsuRHVyYXRpb24ubWludXRlcyg2MCksXG4gICAgICAgICAgICByZWZyZXNoVG9rZW5WYWxpZGl0eTogY2RrLkR1cmF0aW9uLmRheXMoMzApLFxuICAgICAgICB9KVxuICAgICAgICBjbGllbnQudXNlclBvb2xDbGllbnRJZFxuXG4gICAgfVxufVxuIl19