import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesTaxesAndChargesService } from "./salesTaxesAndCharges.service";
import { SalesTaxesAndChargesControllerBase } from "./base/salesTaxesAndCharges.controller.base";

@swagger.ApiTags("salesTaxesAndCharges")
@common.Controller("salesTaxesAndCharges")
export class SalesTaxesAndChargesController extends SalesTaxesAndChargesControllerBase {
  constructor(protected readonly service: SalesTaxesAndChargesService) {
    super(service);
  }
}
