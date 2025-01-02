import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedTaxService } from "./clreDedTax.service";
import { ClreDedTaxControllerBase } from "./base/clreDedTax.controller.base";

@swagger.ApiTags("clreDedTaxes")
@common.Controller("clreDedTaxes")
export class ClreDedTaxController extends ClreDedTaxControllerBase {
  constructor(protected readonly service: ClreDedTaxService) {
    super(service);
  }
}
