import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedTaxService } from "./tbClreDedTax.service";
import { TbClreDedTaxControllerBase } from "./base/tbClreDedTax.controller.base";

@swagger.ApiTags("tbClreDedTaxes")
@common.Controller("tbClreDedTaxes")
export class TbClreDedTaxController extends TbClreDedTaxControllerBase {
  constructor(protected readonly service: TbClreDedTaxService) {
    super(service);
  }
}
