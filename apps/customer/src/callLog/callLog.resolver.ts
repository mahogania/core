import * as graphql from "@nestjs/graphql";
import { CallLogResolverBase } from "./base/callLog.resolver.base";
import { CallLog } from "./base/CallLog";
import { CallLogService } from "./callLog.service";

@graphql.Resolver(() => CallLog)
export class CallLogResolver extends CallLogResolverBase {
  constructor(protected readonly service: CallLogService) {
    super(service);
  }
}
