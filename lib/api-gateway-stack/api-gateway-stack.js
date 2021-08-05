"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayStack = void 0;
const cdk = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
class ApiGatewayStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        this.gwUrl = '';
        const apigw = new apigateway.RestApi(this, 'CglOpAPI', {
            defaultCorsPreflightOptions: {
                allowOrigins: apigateway.Cors.ALL_ORIGINS,
                allowMethods: apigateway.Cors.ALL_METHODS,
                // allowCredentials: true,
                allowHeaders: ["*"],
                // maxAge: cdk.Duration.seconds(0),
                disableCache: true
            },
            deploy: true,
            // binaryMediaTypes: ['*/*']
            binaryMediaTypes: ['application/pdf', 'multipart/form-data', 'image/png', 'image/jpeg', 'image/jpg', 'application/octet-stream']
        });
        this.gwUrl = apigw.url;
        new cdk.CfnOutput(this, "CglOpApiUrl", {
            value: apigw.url.replace(/\/$/, ""),
            exportName: "ApiGatewayStack:APIGwCglOpAPIUrl"
        });
        new cdk.CfnOutput(this, "CglOpApiId", {
            value: apigw.restApiId,
            exportName: "ApiGatewayStack:CglOpApiId"
        });
    }
}
exports.ApiGatewayStack = ApiGatewayStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGktZ2F0ZXdheS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsc0RBQXNEO0FBRXRELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUk1QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSG5CLFVBQUssR0FBRyxFQUFFLENBQUE7UUFLZixNQUFNLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUVyRCwyQkFBMkIsRUFBRTtnQkFDM0IsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDekMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDekMsMEJBQTBCO2dCQUMxQixZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ25CLG1DQUFtQztnQkFDbkMsWUFBWSxFQUFFLElBQUk7YUFDbkI7WUFDRCxNQUFNLEVBQUUsSUFBSTtZQUNaLDRCQUE0QjtZQUM1QixnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLDBCQUEwQixDQUFDO1NBQ2pJLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtRQUV0QixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxVQUFVLEVBQUUsa0NBQWtDO1NBQy9DLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3BDLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUztZQUN0QixVQUFVLEVBQUUsNEJBQTRCO1NBQ3pDLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRjtBQW5DRCwwQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcblxuZXhwb3J0IGNsYXNzIEFwaUdhdGV3YXlTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgcHVibGljIGd3VXJsID0gJydcblxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgYXBpZ3cgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsICdDZ2xPcEFQSScsIHtcblxuICAgICAgZGVmYXVsdENvcnNQcmVmbGlnaHRPcHRpb25zOiB7XG4gICAgICAgIGFsbG93T3JpZ2luczogYXBpZ2F0ZXdheS5Db3JzLkFMTF9PUklHSU5TLFxuICAgICAgICBhbGxvd01ldGhvZHM6IGFwaWdhdGV3YXkuQ29ycy5BTExfTUVUSE9EUyxcbiAgICAgICAgLy8gYWxsb3dDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgYWxsb3dIZWFkZXJzOiBbXCIqXCJdLFxuICAgICAgICAvLyBtYXhBZ2U6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDApLFxuICAgICAgICBkaXNhYmxlQ2FjaGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkZXBsb3k6IHRydWUsXG4gICAgICAvLyBiaW5hcnlNZWRpYVR5cGVzOiBbJyovKiddXG4gICAgICBiaW5hcnlNZWRpYVR5cGVzOiBbJ2FwcGxpY2F0aW9uL3BkZicsICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2pwZycsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXVxuICAgIH0pXG5cbiAgICB0aGlzLmd3VXJsID0gYXBpZ3cudXJsXG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkNnbE9wQXBpVXJsXCIsIHtcbiAgICAgIHZhbHVlOiBhcGlndy51cmwucmVwbGFjZSgvXFwvJC8sIFwiXCIpLFxuICAgICAgZXhwb3J0TmFtZTogXCJBcGlHYXRld2F5U3RhY2s6QVBJR3dDZ2xPcEFQSVVybFwiXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkNnbE9wQXBpSWRcIiwge1xuICAgICAgdmFsdWU6IGFwaWd3LnJlc3RBcGlJZCxcbiAgICAgIGV4cG9ydE5hbWU6IFwiQXBpR2F0ZXdheVN0YWNrOkNnbE9wQXBpSWRcIlxuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==