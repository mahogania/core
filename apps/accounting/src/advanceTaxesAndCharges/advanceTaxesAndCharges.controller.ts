import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdvanceTaxesAndChargesService } from "./advanceTaxesAndCharges.service";
import { AdvanceTaxesAndChargesControllerBase } from "./base/advanceTaxesAndCharges.controller.base";

@swagger.ApiTags("advanceTaxesAndCharges")
@common.Controller("advanceTaxesAndCharges")
export class AdvanceTaxesAndChargesController extends AdvanceTaxesAndChargesControllerBase {
  constructor(protected readonly service: AdvanceTaxesAndChargesService) {
    super(service);
  }
}
