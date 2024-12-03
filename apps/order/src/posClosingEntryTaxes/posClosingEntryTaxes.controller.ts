import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosClosingEntryTaxesService } from "./posClosingEntryTaxes.service";
import { PosClosingEntryTaxesControllerBase } from "./base/posClosingEntryTaxes.controller.base";

@swagger.ApiTags("posClosingEntryTaxes")
@common.Controller("posClosingEntryTaxes")
export class PosClosingEntryTaxesController extends PosClosingEntryTaxesControllerBase {
  constructor(protected readonly service: PosClosingEntryTaxesService) {
    super(service);
  }
}
