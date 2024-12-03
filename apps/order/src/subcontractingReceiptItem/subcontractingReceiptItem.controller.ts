import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingReceiptItemService } from "./subcontractingReceiptItem.service";
import { SubcontractingReceiptItemControllerBase } from "./base/subcontractingReceiptItem.controller.base";

@swagger.ApiTags("subcontractingReceiptItems")
@common.Controller("subcontractingReceiptItems")
export class SubcontractingReceiptItemController extends SubcontractingReceiptItemControllerBase {
  constructor(protected readonly service: SubcontractingReceiptItemService) {
    super(service);
  }
}
