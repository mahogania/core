import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandedCostItemService } from "./landedCostItem.service";
import { LandedCostItemControllerBase } from "./base/landedCostItem.controller.base";

@swagger.ApiTags("landedCostItems")
@common.Controller("landedCostItems")
export class LandedCostItemController extends LandedCostItemControllerBase {
  constructor(protected readonly service: LandedCostItemService) {
    super(service);
  }
}
