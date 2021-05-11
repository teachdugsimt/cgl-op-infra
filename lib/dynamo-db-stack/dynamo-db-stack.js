"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDBStack = void 0;
const cdk = require("@aws-cdk/core");
const dynamodb = require("@aws-cdk/aws-dynamodb");
class DynamoDBStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // dynamo db
        new dynamodb.Table(this, 'CGLUserAuthorize', {
            partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
        });
    }
}
exports.DynamoDBStack = DynamoDBStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1vLWRiLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHluYW1vLWRiLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxrREFBa0Q7QUFFbEQsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFeEMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixZQUFZO1FBQ1osSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN6QyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtTQUMxRSxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQ0o7QUFWRCxzQ0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGR5bmFtb2RiIGZyb20gJ0Bhd3MtY2RrL2F3cy1keW5hbW9kYic7XG5cbmV4cG9ydCBjbGFzcyBEeW5hbW9EQlN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgICAgICAvLyBkeW5hbW8gZGJcbiAgICAgICAgbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsICdDR0xVc2VyQXV0aG9yaXplJywge1xuICAgICAgICAgICAgcGFydGl0aW9uS2V5OiB7IG5hbWU6ICd1c2VybmFtZScsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19