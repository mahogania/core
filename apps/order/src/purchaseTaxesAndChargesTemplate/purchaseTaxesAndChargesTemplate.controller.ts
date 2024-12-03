import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseTaxesAndChargesTemplateService } from "./purchaseTaxesAndChargesTemplate.service";
import { PurchaseTaxesAndChargesTemplateControllerBase } from "./base/purchaseTaxesAndChargesTemplate.controller.base";

@swagger.ApiTags("purchaseTaxesAndChargesTemplates")
@common.Controller("purchaseTaxesAndChargesTemplates")
export class PurchaseTaxesAndChargesTemplateController extends PurchaseTaxesAndChargesTemplateControllerBase {
  constructor(
    protected readonly service: PurchaseTaxesAndChargesTemplateService
  ) {
    super(service);
  }
}
