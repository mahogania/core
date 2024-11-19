import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosInvoiceReferenceService } from "./posInvoiceReference.service";
import { PosInvoiceReferenceControllerBase } from "./base/posInvoiceReference.controller.base";

@swagger.ApiTags("posInvoiceReferences")
@common.Controller("posInvoiceReferences")
export class PosInvoiceReferenceController extends PosInvoiceReferenceControllerBase {
  constructor(protected readonly service: PosInvoiceReferenceService) {
    super(service);
  }
}
