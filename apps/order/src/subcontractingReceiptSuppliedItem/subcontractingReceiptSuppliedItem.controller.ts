import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingReceiptSuppliedItemService } from "./subcontractingReceiptSuppliedItem.service";
import { SubcontractingReceiptSuppliedItemControllerBase } from "./base/subcontractingReceiptSuppliedItem.controller.base";

@swagger.ApiTags("subcontractingReceiptSuppliedItems")
@common.Controller("subcontractingReceiptSuppliedItems")
export class SubcontractingReceiptSuppliedItemController extends SubcontractingReceiptSuppliedItemControllerBase {
  constructor(
    protected readonly service: SubcontractingReceiptSuppliedItemService
  ) {
    super(service);
  }
}
