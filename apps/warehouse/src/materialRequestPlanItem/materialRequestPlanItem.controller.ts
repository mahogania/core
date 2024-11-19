import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaterialRequestPlanItemService } from "./materialRequestPlanItem.service";
import { MaterialRequestPlanItemControllerBase } from "./base/materialRequestPlanItem.controller.base";

@swagger.ApiTags("materialRequestPlanItems")
@common.Controller("materialRequestPlanItems")
export class MaterialRequestPlanItemController extends MaterialRequestPlanItemControllerBase {
  constructor(protected readonly service: MaterialRequestPlanItemService) {
    super(service);
  }
}
