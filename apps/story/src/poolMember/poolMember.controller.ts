import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoolMemberService } from "./poolMember.service";
import { PoolMemberControllerBase } from "./base/poolMember.controller.base";

@swagger.ApiTags("poolMembers")
@common.Controller("poolMembers")
export class PoolMemberController extends PoolMemberControllerBase {
  constructor(
    protected readonly service: PoolMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
