import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostCenterAllocationPercentageService } from "./costCenterAllocationPercentage.service";
import { CostCenterAllocationPercentageControllerBase } from "./base/costCenterAllocationPercentage.controller.base";

@swagger.ApiTags("costCenterAllocationPercentages")
@common.Controller("costCenterAllocationPercentages")
export class CostCenterAllocationPercentageController extends CostCenterAllocationPercentageControllerBase {
  constructor(
    protected readonly service: CostCenterAllocationPercentageService
  ) {
    super(service);
  }
}
