import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandedCostTaxesAndChargesService } from "./landedCostTaxesAndCharges.service";
import { LandedCostTaxesAndChargesControllerBase } from "./base/landedCostTaxesAndCharges.controller.base";

@swagger.ApiTags("landedCostTaxesAndCharges")
@common.Controller("landedCostTaxesAndCharges")
export class LandedCostTaxesAndChargesController extends LandedCostTaxesAndChargesControllerBase {
  constructor(protected readonly service: LandedCostTaxesAndChargesService) {
    super(service);
  }
}
