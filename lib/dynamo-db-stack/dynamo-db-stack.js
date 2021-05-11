"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDBStack = void 0;
const cdk = require("@aws-cdk/core");
const dynamodb = require("@aws-cdk/aws-dynamodb");
class DynamoDBStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // dynamo db
        new dynamodb.Table(this, 'CglUserAuth', {
            partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
        });
    }
}
exports.DynamoDBStack = DynamoDBStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1vLWRiLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHluYW1vLWRiLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxrREFBa0Q7QUFFbEQsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFeEMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixZQUFZO1FBQ1osSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDcEMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7U0FDMUUsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUNKO0FBVkQsc0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tICdAYXdzLWNkay9hd3MtZHluYW1vZGInO1xuXG5leHBvcnQgY2xhc3MgRHluYW1vREJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICAgICAgLy8gZHluYW1vIGRiXG4gICAgICAgIG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCAnQ2dsVXNlckF1dGgnLCB7XG4gICAgICAgICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ3VzZXJuYW1lJywgdHlwZTogZHluYW1vZGIuQXR0cmlidXRlVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG4iXX0=