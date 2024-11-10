import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestPoolMemberService } from "./questPoolMember.service";
import { QuestPoolMemberControllerBase } from "./base/questPoolMember.controller.base";

@swagger.ApiTags("questPoolMembers")
@common.Controller("questPoolMembers")
export class QuestPoolMemberController extends QuestPoolMemberControllerBase {
  constructor(
    protected readonly service: QuestPoolMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
