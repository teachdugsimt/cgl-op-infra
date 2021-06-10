"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargolinkDocumentStack = void 0;
const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
class CargolinkDocumentStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new s3.Bucket(this, id, {
            bucketName: "cargolink-documents",
            accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
        });
    }
}
exports.CargolinkDocumentStack = CargolinkDocumentStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZ29saW5rLWRvY3VtZW50LXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZ29saW5rLWRvY3VtZW50LXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxzQ0FBcUM7QUFFckMsTUFBYSxzQkFBdUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNqRCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3BCLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUI7U0FDbEUsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBUkQsd0RBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdAYXdzLWNkay9hd3MtczMnXG5cbmV4cG9ydCBjbGFzcyBDYXJnb2xpbmtEb2N1bWVudFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICAgICAgbmV3IHMzLkJ1Y2tldCh0aGlzLCBpZCwge1xuICAgICAgICAgICAgYnVja2V0TmFtZTogXCJjYXJnb2xpbmstZG9jdW1lbnRzXCIsXG4gICAgICAgICAgICBhY2Nlc3NDb250cm9sOiBzMy5CdWNrZXRBY2Nlc3NDb250cm9sLkJVQ0tFVF9PV05FUl9GVUxMX0NPTlRST0xcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=