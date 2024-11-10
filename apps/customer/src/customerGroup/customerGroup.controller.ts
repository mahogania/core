import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerGroupService } from "./customerGroup.service";
import { CustomerGroupControllerBase } from "./base/customerGroup.controller.base";

@swagger.ApiTags("customerGroups")
@common.Controller("customerGroups")
export class CustomerGroupController extends CustomerGroupControllerBase {
  constructor(protected readonly service: CustomerGroupService) {
    super(service);
  }
}
