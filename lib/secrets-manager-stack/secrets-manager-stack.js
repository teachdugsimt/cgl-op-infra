"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacySecretsManagerStack = void 0;
const cdk = require("@aws-cdk/core");
const secretsmanager = require("@aws-cdk/aws-secretsmanager");
class LegacySecretsManagerStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const secrets_name_hash_key = "CGLDevHashKey";
        const secrets_id_hash_key = "LegacyDBSecret";
        new secretsmanager.Secret(this, secrets_id_hash_key, {
            description: "Hashing key",
            secretName: secrets_name_hash_key,
        });
    }
}
exports.LegacySecretsManagerStack = LegacySecretsManagerStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjcmV0cy1tYW5hZ2VyLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VjcmV0cy1tYW5hZ2VyLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4REFBOEQ7QUFFOUQsTUFBYSx5QkFBMEIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUV0RCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0scUJBQXFCLEdBQVcsZUFBZSxDQUFBO1FBQ3JELE1BQU0sbUJBQW1CLEdBQVcsZ0JBQWdCLENBQUE7UUFFcEQsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUUscUJBQXFCO1NBS2xDLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRjtBQWxCRCw4REFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBzZWNyZXRzbWFuYWdlciBmcm9tICdAYXdzLWNkay9hd3Mtc2VjcmV0c21hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgTGVnYWN5U2VjcmV0c01hbmFnZXJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHNlY3JldHNfbmFtZV9oYXNoX2tleTogc3RyaW5nID0gXCJDR0xEZXZIYXNoS2V5XCJcbiAgICBjb25zdCBzZWNyZXRzX2lkX2hhc2hfa2V5OiBzdHJpbmcgPSBcIkxlZ2FjeURCU2VjcmV0XCJcblxuICAgIG5ldyBzZWNyZXRzbWFuYWdlci5TZWNyZXQodGhpcywgc2VjcmV0c19pZF9oYXNoX2tleSwge1xuICAgICAgZGVzY3JpcHRpb246IFwiSGFzaGluZyBrZXlcIixcbiAgICAgIHNlY3JldE5hbWU6IHNlY3JldHNfbmFtZV9oYXNoX2tleSxcbiAgICAgIC8vIGdlbmVyYXRlU2VjcmV0U3RyaW5nOiB7ICAvLyAqKiBJbml0IGtleSB2YWx1ZSAqKlxuICAgICAgLy8gICBzZWNyZXRTdHJpbmdUZW1wbGF0ZTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgLy8gICBnZW5lcmF0ZVN0cmluZ0tleTogJ2hhc2hpbmcta2V5J1xuICAgICAgLy8gfVxuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==