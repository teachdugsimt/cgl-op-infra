"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSenderServiceStack = void 0;
const cdk = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const iam = require("@aws-cdk/aws-iam");
class SmsSenderServiceStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const snsPolicy = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            resources: ["*"],
            actions: ['sns:SetSMSAttributes', 'sns:Publish'],
        });
        const lambdaFn = new lambda.Function(this, "SmsSenderHandler", {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset("resources/sms-handler"),
            handler: "handler.main"
        });
        lambdaFn.addToRolePolicy(snsPolicy);
        const api = new apigateway.RestApi(this, "sms-api", {
            restApiName: "Sms Service",
            description: "This service for sms action."
        });
        const sendSMS = new apigateway.LambdaIntegration(lambdaFn, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' }
        });
        api.root.addMethod("POST", sendSMS); // GET /
    }
}
exports.SmsSenderServiceStack = SmsSenderServiceStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLXNlbmRlci1zZXJ2aWNlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic21zLXNlbmRlci1zZXJ2aWNlLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxzREFBc0Q7QUFDdEQsOENBQThDO0FBQzlDLHdDQUF1QztBQUV2QyxNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ2xELFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO1lBQ3hDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQztTQUNqRCxDQUFDLENBQUE7UUFFRixNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQzdELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDO1lBQ3BELE9BQU8sRUFBRSxjQUFjO1NBQ3hCLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFbkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDbEQsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtTQUM1QyxDQUFDLENBQUM7UUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7WUFDekQsZ0JBQWdCLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRTtTQUNwRSxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO0lBQy9DLENBQUM7Q0FDRjtBQTdCRCxzREE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheVwiO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJAYXdzLWNkay9hd3MtbGFtYmRhXCI7XG5pbXBvcnQgKiBhcyBpYW0gZnJvbSBcIkBhd3MtY2RrL2F3cy1pYW1cIlxuXG5leHBvcnQgY2xhc3MgU21zU2VuZGVyU2VydmljZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHNuc1BvbGljeSA9IG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcbiAgICAgIGVmZmVjdDogaWFtLkVmZmVjdC5BTExPVyxcbiAgICAgIHJlc291cmNlczogW1wiKlwiXSxcbiAgICAgIGFjdGlvbnM6IFsnc25zOlNldFNNU0F0dHJpYnV0ZXMnLCAnc25zOlB1Ymxpc2gnXSxcbiAgICB9KVxuXG4gICAgY29uc3QgbGFtYmRhRm4gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiU21zU2VuZGVySGFuZGxlclwiLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCwgLy8gU28gd2UgY2FuIHVzZSBhc3luYyBpbiB3aWRnZXQuanNcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChcInJlc291cmNlcy9zbXMtaGFuZGxlclwiKSxcbiAgICAgIGhhbmRsZXI6IFwiaGFuZGxlci5tYWluXCJcbiAgICB9KTtcblxuICAgIGxhbWJkYUZuLmFkZFRvUm9sZVBvbGljeShzbnNQb2xpY3kpXG5cbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsIFwic21zLWFwaVwiLCB7XG4gICAgICByZXN0QXBpTmFtZTogXCJTbXMgU2VydmljZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBzZXJ2aWNlIGZvciBzbXMgYWN0aW9uLlwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZW5kU01TID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24obGFtYmRhRm4sIHtcbiAgICAgIHJlcXVlc3RUZW1wbGF0ZXM6IHsgXCJhcHBsaWNhdGlvbi9qc29uXCI6ICd7IFwic3RhdHVzQ29kZVwiOiBcIjIwMFwiIH0nIH1cbiAgICB9KTtcblxuICAgIGFwaS5yb290LmFkZE1ldGhvZChcIlBPU1RcIiwgc2VuZFNNUyk7IC8vIEdFVCAvXG4gIH1cbn1cbiJdfQ==