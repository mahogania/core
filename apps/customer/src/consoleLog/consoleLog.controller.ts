import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsoleLogService } from "./consoleLog.service";
import { ConsoleLogControllerBase } from "./base/consoleLog.controller.base";

@swagger.ApiTags("consoleLogs")
@common.Controller("consoleLogs")
export class ConsoleLogController extends ConsoleLogControllerBase {
  constructor(protected readonly service: ConsoleLogService) {
    super(service);
  }
}
