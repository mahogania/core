import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingReceiptService } from "./subcontractingReceipt.service";
import { SubcontractingReceiptControllerBase } from "./base/subcontractingReceipt.controller.base";

@swagger.ApiTags("subcontractingReceipts")
@common.Controller("subcontractingReceipts")
export class SubcontractingReceiptController extends SubcontractingReceiptControllerBase {
  constructor(protected readonly service: SubcontractingReceiptService) {
    super(service);
  }
}
