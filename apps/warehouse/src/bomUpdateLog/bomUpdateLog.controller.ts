import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomUpdateLogService } from "./bomUpdateLog.service";
import { BomUpdateLogControllerBase } from "./base/bomUpdateLog.controller.base";

@swagger.ApiTags("bomUpdateLogs")
@common.Controller("bomUpdateLogs")
export class BomUpdateLogController extends BomUpdateLogControllerBase {
  constructor(protected readonly service: BomUpdateLogService) {
    super(service);
  }
}
