"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoStack = void 0;
const cognito = require("@aws-cdk/aws-cognito");
const cdk = require("@aws-cdk/core");
// import * as secretsManager from "@aws-cdk/aws-secretsmanager";
class CognitoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // cognito
        const userPool = new cognito.UserPool(this, 'CglUserAuthenticationPool', {
            userPoolName: 'CGLUserAuthentication',
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
        const clientReadAttributes = clientWriteAttributes;
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
exports.CognitoStack = CognitoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZ25pdG8tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQWdEO0FBQ2hELHFDQUFxQztBQUNyQyxpRUFBaUU7QUFDakUsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFdkMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixVQUFVO1FBQ1YsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBRTtZQUNyRSxZQUFZLEVBQUUsdUJBQXVCO1lBQ3JDLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixhQUFhLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsS0FBSzthQUNmO1lBQ0QsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRztZQUNwQixPQUFPLEVBQUUsU0FBUztZQUNsQixnQkFBZ0IsRUFBRTtnQkFDZCxNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNoRjtZQUNELGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVU7WUFDbkQsY0FBYyxFQUFFO2dCQUNaLFNBQVMsRUFBRSxDQUFDO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLHFCQUFxQixHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6RCxzQkFBc0IsQ0FBQztZQUNwQixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQzthQUNELG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sb0JBQW9CLEdBQUcscUJBQXFCLENBQUE7UUFFbEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNsRCxrQkFBa0IsRUFBRSx1QkFBdUI7WUFDM0MsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzdDLGVBQWUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzNDLFNBQVMsRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNoQjtZQUNELDBCQUEwQixFQUFFLElBQUk7WUFDaEMsZUFBZSxFQUFFLHFCQUFxQjtZQUN0QyxjQUFjLEVBQUUsb0JBQW9CO1NBQ3ZDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVTtZQUMxQixVQUFVLEVBQUUseUJBQXlCO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDeEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDOUIsVUFBVSxFQUFFLCtCQUErQjtTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUEvREQsb0NBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29nbml0byBmcm9tIFwiQGF3cy1jZGsvYXdzLWNvZ25pdG9cIjtcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIHNlY3JldHNNYW5hZ2VyIGZyb20gXCJAYXdzLWNkay9hd3Mtc2VjcmV0c21hbmFnZXJcIjtcbmV4cG9ydCBjbGFzcyBDb2duaXRvU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAgICAgLy8gY29nbml0b1xuICAgICAgICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjb2duaXRvLlVzZXJQb29sKHRoaXMsICdDZ2xVc2VyQXV0aGVudGljYXRpb25Qb29sJywge1xuICAgICAgICAgICAgdXNlclBvb2xOYW1lOiAnQ0dMVXNlckF1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICAgIHNlbGZTaWduVXBFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgc2lnbkluQ2FzZVNlbnNpdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNpZ25JbkFsaWFzZXM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwaG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvVmVyaWZ5OiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBob25lOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1mYTogY29nbml0by5NZmEuT0ZGLFxuICAgICAgICAgICAgc21zUm9sZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY3VzdG9tQXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogbmV3IGNvZ25pdG8uU3RyaW5nQXR0cmlidXRlKHsgbWluTGVuOiA4LCBtYXhMZW46IDEyLCBtdXRhYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjb3VudFJlY292ZXJ5OiBjb2duaXRvLkFjY291bnRSZWNvdmVyeS5FTUFJTF9PTkxZLFxuICAgICAgICAgICAgcGFzc3dvcmRQb2xpY3k6IHtcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbGllbnRXcml0ZUF0dHJpYnV0ZXMgPSAobmV3IGNvZ25pdG8uQ2xpZW50QXR0cmlidXRlcygpKVxuICAgICAgICAgICAgLndpdGhTdGFuZGFyZEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgIGZ1bGxuYW1lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC53aXRoQ3VzdG9tQXR0cmlidXRlcygndXNlcklkJyk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50UmVhZEF0dHJpYnV0ZXMgPSBjbGllbnRXcml0ZUF0dHJpYnV0ZXNcblxuICAgICAgICBjb25zdCBjbGllbnQgPSB1c2VyUG9vbC5hZGRDbGllbnQoJ0NnbFVzZXJBcHBDbGllbnQnLCB7XG4gICAgICAgICAgICB1c2VyUG9vbENsaWVudE5hbWU6ICdDZ2xVc2VyQXV0aGVBcHBDbGllbnQnLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW5WYWxpZGl0eTogY2RrLkR1cmF0aW9uLm1pbnV0ZXMoNjApLFxuICAgICAgICAgICAgaWRUb2tlblZhbGlkaXR5OiBjZGsuRHVyYXRpb24ubWludXRlcyg2MCksXG4gICAgICAgICAgICByZWZyZXNoVG9rZW5WYWxpZGl0eTogY2RrLkR1cmF0aW9uLmRheXMoMzApLFxuICAgICAgICAgICAgYXV0aEZsb3dzOiB7XG4gICAgICAgICAgICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZXJTcnA6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnM6IHRydWUsXG4gICAgICAgICAgICB3cml0ZUF0dHJpYnV0ZXM6IGNsaWVudFdyaXRlQXR0cmlidXRlcyxcbiAgICAgICAgICAgIHJlYWRBdHRyaWJ1dGVzOiBjbGllbnRSZWFkQXR0cmlidXRlcyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJVc2VyUG9vbElkXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiB1c2VyUG9vbC51c2VyUG9vbElkLFxuICAgICAgICAgICAgZXhwb3J0TmFtZTogXCJDb2duaXRvU3RhY2s6VXNlclBvb2xJZFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiVXNlclBvb2xDbGllbnRJZFwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogY2xpZW50LnVzZXJQb29sQ2xpZW50SWQsXG4gICAgICAgICAgICBleHBvcnROYW1lOiBcIkNvZ25pdG9TdGFjazpVc2VyUG9vbENsaWVudElkXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19