import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdvanceTaxService } from "./advanceTax.service";
import { AdvanceTaxControllerBase } from "./base/advanceTax.controller.base";

@swagger.ApiTags("advanceTaxes")
@common.Controller("advanceTaxes")
export class AdvanceTaxController extends AdvanceTaxControllerBase {
  constructor(protected readonly service: AdvanceTaxService) {
    super(service);
  }
}
