import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BulkTransactionLogDetailService } from "./bulkTransactionLogDetail.service";
import { BulkTransactionLogDetailControllerBase } from "./base/bulkTransactionLogDetail.controller.base";

@swagger.ApiTags("bulkTransactionLogDetails")
@common.Controller("bulkTransactionLogDetails")
export class BulkTransactionLogDetailController extends BulkTransactionLogDetailControllerBase {
  constructor(protected readonly service: BulkTransactionLogDetailService) {
    super(service);
  }
}
