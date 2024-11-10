import * as graphql from "@nestjs/graphql";
import { ConsoleLogResolverBase } from "./base/consoleLog.resolver.base";
import { ConsoleLog } from "./base/ConsoleLog";
import { ConsoleLogService } from "./consoleLog.service";

@graphql.Resolver(() => ConsoleLog)
export class ConsoleLogResolver extends ConsoleLogResolverBase {
  constructor(protected readonly service: ConsoleLogService) {
    super(service);
  }
}
