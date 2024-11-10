import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomRoleService } from "./customRole.service";
import { CustomRoleControllerBase } from "./base/customRole.controller.base";

@swagger.ApiTags("customRoles")
@common.Controller("customRoles")
export class CustomRoleController extends CustomRoleControllerBase {
  constructor(protected readonly service: CustomRoleService) {
    super(service);
  }
}
