import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosInvoiceService } from "./posInvoice.service";
import { PosInvoiceControllerBase } from "./base/posInvoice.controller.base";

@swagger.ApiTags("posInvoices")
@common.Controller("posInvoices")
export class PosInvoiceController extends PosInvoiceControllerBase {
  constructor(protected readonly service: PosInvoiceService) {
    super(service);
  }
}
