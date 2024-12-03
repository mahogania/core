import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseTaxesAndChargesService } from "./purchaseTaxesAndCharges.service";
import { PurchaseTaxesAndChargesControllerBase } from "./base/purchaseTaxesAndCharges.controller.base";

@swagger.ApiTags("purchaseTaxesAndCharges")
@common.Controller("purchaseTaxesAndCharges")
export class PurchaseTaxesAndChargesController extends PurchaseTaxesAndChargesControllerBase {
  constructor(protected readonly service: PurchaseTaxesAndChargesService) {
    super(service);
  }
}
