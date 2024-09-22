import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoolMembersService } from "./poolMembers.service";
import { PoolMembersControllerBase } from "./base/poolMembers.controller.base";

@swagger.ApiTags("poolMembers")
@common.Controller("poolMembers")
export class PoolMembersController extends PoolMembersControllerBase {
  constructor(
    protected readonly service: PoolMembersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
