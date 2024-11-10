import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostCenterAllocationService } from "./costCenterAllocation.service";
import { CostCenterAllocationControllerBase } from "./base/costCenterAllocation.controller.base";

@swagger.ApiTags("costCenterAllocations")
@common.Controller("costCenterAllocations")
export class CostCenterAllocationController extends CostCenterAllocationControllerBase {
  constructor(protected readonly service: CostCenterAllocationService) {
    super(service);
  }
}
