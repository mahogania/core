import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosCustomerGroupService } from "./posCustomerGroup.service";
import { PosCustomerGroupControllerBase } from "./base/posCustomerGroup.controller.base";

@swagger.ApiTags("posCustomerGroups")
@common.Controller("posCustomerGroups")
export class PosCustomerGroupController extends PosCustomerGroupControllerBase {
  constructor(protected readonly service: PosCustomerGroupService) {
    super(service);
  }
}
