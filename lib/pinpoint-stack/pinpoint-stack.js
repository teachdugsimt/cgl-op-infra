"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinpointStack = void 0;
const cdk = require("@aws-cdk/core");
const pinpoint = require("@aws-cdk/aws-pinpoint");
class PinpointStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pinpointProject = new pinpoint.CfnApp(this, 'CglMessagingService', {
            name: 'cgl-messaging-service',
        });
        const pinpointProjectSms = new pinpoint.CfnSMSChannel(this, 'CglSmsService', {
            applicationId: pinpointProject.ref
        });
        // const pinpointProjectEmail = new pinpoint.CfnEmailChannel(this, 'CglEmailService', {
        //   applicationId: pinpointProject.ref,
        //   fromAddress: '',
        //   identity: '',
        // })
    }
}
exports.PinpointStack = PinpointStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlucG9pbnQtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaW5wb2ludC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsa0RBQWtEO0FBRWxELE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzFDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUN2RSxJQUFJLEVBQUUsdUJBQXVCO1NBQzlCLENBQUMsQ0FBQTtRQUVGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDM0UsYUFBYSxFQUFFLGVBQWUsQ0FBQyxHQUFHO1NBQ25DLENBQUMsQ0FBQTtRQUVGLHVGQUF1RjtRQUN2Rix3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixLQUFLO0lBRVAsQ0FBQztDQUNGO0FBbkJELHNDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIHBpbnBvaW50IGZyb20gJ0Bhd3MtY2RrL2F3cy1waW5wb2ludCc7XG5cbmV4cG9ydCBjbGFzcyBQaW5wb2ludFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHBpbnBvaW50UHJvamVjdCA9IG5ldyBwaW5wb2ludC5DZm5BcHAodGhpcywgJ0NnbE1lc3NhZ2luZ1NlcnZpY2UnLCB7XG4gICAgICBuYW1lOiAnY2dsLW1lc3NhZ2luZy1zZXJ2aWNlJyxcbiAgICB9KVxuXG4gICAgY29uc3QgcGlucG9pbnRQcm9qZWN0U21zID0gbmV3IHBpbnBvaW50LkNmblNNU0NoYW5uZWwodGhpcywgJ0NnbFNtc1NlcnZpY2UnLCB7XG4gICAgICBhcHBsaWNhdGlvbklkOiBwaW5wb2ludFByb2plY3QucmVmXG4gICAgfSlcblxuICAgIC8vIGNvbnN0IHBpbnBvaW50UHJvamVjdEVtYWlsID0gbmV3IHBpbnBvaW50LkNmbkVtYWlsQ2hhbm5lbCh0aGlzLCAnQ2dsRW1haWxTZXJ2aWNlJywge1xuICAgIC8vICAgYXBwbGljYXRpb25JZDogcGlucG9pbnRQcm9qZWN0LnJlZixcbiAgICAvLyAgIGZyb21BZGRyZXNzOiAnJyxcbiAgICAvLyAgIGlkZW50aXR5OiAnJyxcbiAgICAvLyB9KVxuXG4gIH1cbn1cbiJdfQ==