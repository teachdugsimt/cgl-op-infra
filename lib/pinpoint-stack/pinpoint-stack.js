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
        const pinpointProjectEmail = new pinpoint.CfnEmailChannel(this, 'CglEmailService', {
            applicationId: pinpointProject.ref,
            fromAddress: 'info@infiltech.org',
            identity: `arn:aws:ses:ap-southeast-1:${process.env.AWS_ACCOUNT}:identity/infiltech.org`,
        });
        // const pinpointPushNotification = new pinpoint.CfnGCMChannel(this, 'CglPushNotificationService', {
        //   applicationId: pinpointProject.ref,
        //   apiKey: 'AIzaSyCh7_PuaAmLtesVnkdf92uVckToAE5w4S8',
        //   enabled: true,
        // })
        new cdk.CfnOutput(this, "CglPinpointProjectID", {
            value: pinpointProject.ref,
            exportName: "PinPointStack:CglPinpointProjectID"
        });
    }
}
exports.PinpointStack = PinpointStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlucG9pbnQtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaW5wb2ludC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsa0RBQWtEO0FBRWxELE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzFDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUN2RSxJQUFJLEVBQUUsdUJBQXVCO1NBQzlCLENBQUMsQ0FBQTtRQUVGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDM0UsYUFBYSxFQUFFLGVBQWUsQ0FBQyxHQUFHO1NBQ25DLENBQUMsQ0FBQTtRQUVGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNqRixhQUFhLEVBQUUsZUFBZSxDQUFDLEdBQUc7WUFDbEMsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxRQUFRLEVBQUUsOEJBQThCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyx5QkFBeUI7U0FDekYsQ0FBQyxDQUFDO1FBRUgsb0dBQW9HO1FBQ3BHLHdDQUF3QztRQUN4Qyx1REFBdUQ7UUFDdkQsbUJBQW1CO1FBQ25CLEtBQUs7UUFFTCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQzlDLEtBQUssRUFBRSxlQUFlLENBQUMsR0FBRztZQUMxQixVQUFVLEVBQUUsb0NBQW9DO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTdCRCxzQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBwaW5wb2ludCBmcm9tICdAYXdzLWNkay9hd3MtcGlucG9pbnQnO1xuXG5leHBvcnQgY2xhc3MgUGlucG9pbnRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBwaW5wb2ludFByb2plY3QgPSBuZXcgcGlucG9pbnQuQ2ZuQXBwKHRoaXMsICdDZ2xNZXNzYWdpbmdTZXJ2aWNlJywge1xuICAgICAgbmFtZTogJ2NnbC1tZXNzYWdpbmctc2VydmljZScsXG4gICAgfSlcblxuICAgIGNvbnN0IHBpbnBvaW50UHJvamVjdFNtcyA9IG5ldyBwaW5wb2ludC5DZm5TTVNDaGFubmVsKHRoaXMsICdDZ2xTbXNTZXJ2aWNlJywge1xuICAgICAgYXBwbGljYXRpb25JZDogcGlucG9pbnRQcm9qZWN0LnJlZlxuICAgIH0pXG5cbiAgICBjb25zdCBwaW5wb2ludFByb2plY3RFbWFpbCA9IG5ldyBwaW5wb2ludC5DZm5FbWFpbENoYW5uZWwodGhpcywgJ0NnbEVtYWlsU2VydmljZScsIHtcbiAgICAgIGFwcGxpY2F0aW9uSWQ6IHBpbnBvaW50UHJvamVjdC5yZWYsXG4gICAgICBmcm9tQWRkcmVzczogJ2luZm9AaW5maWx0ZWNoLm9yZycsXG4gICAgICBpZGVudGl0eTogYGFybjphd3M6c2VzOmFwLXNvdXRoZWFzdC0xOiR7cHJvY2Vzcy5lbnYuQVdTX0FDQ09VTlR9OmlkZW50aXR5L2luZmlsdGVjaC5vcmdgLFxuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgcGlucG9pbnRQdXNoTm90aWZpY2F0aW9uID0gbmV3IHBpbnBvaW50LkNmbkdDTUNoYW5uZWwodGhpcywgJ0NnbFB1c2hOb3RpZmljYXRpb25TZXJ2aWNlJywge1xuICAgIC8vICAgYXBwbGljYXRpb25JZDogcGlucG9pbnRQcm9qZWN0LnJlZixcbiAgICAvLyAgIGFwaUtleTogJ0FJemFTeUNoN19QdWFBbUx0ZXNWbmtkZjkydVZja1RvQUU1dzRTOCcsXG4gICAgLy8gICBlbmFibGVkOiB0cnVlLFxuICAgIC8vIH0pXG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkNnbFBpbnBvaW50UHJvamVjdElEXCIsIHtcbiAgICAgIHZhbHVlOiBwaW5wb2ludFByb2plY3QucmVmLFxuICAgICAgZXhwb3J0TmFtZTogXCJQaW5Qb2ludFN0YWNrOkNnbFBpbnBvaW50UHJvamVjdElEXCJcbiAgICB9KTtcbiAgfVxufVxuIl19