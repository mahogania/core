import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanItemReferenceService } from "./productionPlanItemReference.service";
import { ProductionPlanItemReferenceControllerBase } from "./base/productionPlanItemReference.controller.base";

@swagger.ApiTags("productionPlanItemReferences")
@common.Controller("productionPlanItemReferences")
export class ProductionPlanItemReferenceController extends ProductionPlanItemReferenceControllerBase {
  constructor(protected readonly service: ProductionPlanItemReferenceService) {
    super(service);
  }
}
