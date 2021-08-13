"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KmsStack = void 0;
const cdk = require("@aws-cdk/core");
const kms = require("@aws-cdk/aws-kms");
class KmsStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const key = new kms.Key(this, 'CglUserKey', {
            alias: 'cgl_user_key',
            pendingWindow: cdk.Duration.days(30)
        });
        new cdk.CfnOutput(this, "CglUserKeyARN", {
            value: key.keyArn,
            exportName: "KmsStack:CglUserKeyARN"
        });
    }
}
exports.KmsStack = KmsStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21zLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia21zLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBd0M7QUFFeEMsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDckMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUMxQyxLQUFLLEVBQUUsY0FBYztZQUNyQixhQUFhLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNqQixVQUFVLEVBQUUsd0JBQXdCO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWRELDRCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMga21zIGZyb20gJ0Bhd3MtY2RrL2F3cy1rbXMnO1xuXG5leHBvcnQgY2xhc3MgS21zU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3Qga2V5ID0gbmV3IGttcy5LZXkodGhpcywgJ0NnbFVzZXJLZXknLCB7XG4gICAgICBhbGlhczogJ2NnbF91c2VyX2tleScsXG4gICAgICBwZW5kaW5nV2luZG93OiBjZGsuRHVyYXRpb24uZGF5cygzMClcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiQ2dsVXNlcktleUFSTlwiLCB7XG4gICAgICB2YWx1ZToga2V5LmtleUFybixcbiAgICAgIGV4cG9ydE5hbWU6IFwiS21zU3RhY2s6Q2dsVXNlcktleUFSTlwiXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==