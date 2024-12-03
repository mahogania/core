import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosInvoiceItemService } from "./posInvoiceItem.service";
import { PosInvoiceItemControllerBase } from "./base/posInvoiceItem.controller.base";

@swagger.ApiTags("posInvoiceItems")
@common.Controller("posInvoiceItems")
export class PosInvoiceItemController extends PosInvoiceItemControllerBase {
  constructor(protected readonly service: PosInvoiceItemService) {
    super(service);
  }
}
