import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosInvoiceMergeLogService } from "./posInvoiceMergeLog.service";
import { PosInvoiceMergeLogControllerBase } from "./base/posInvoiceMergeLog.controller.base";

@swagger.ApiTags("posInvoiceMergeLogs")
@common.Controller("posInvoiceMergeLogs")
export class PosInvoiceMergeLogController extends PosInvoiceMergeLogControllerBase {
  constructor(protected readonly service: PosInvoiceMergeLogService) {
    super(service);
  }
}
