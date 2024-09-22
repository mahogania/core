import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestPoolMembersService } from "./questPoolMembers.service";
import { QuestPoolMembersControllerBase } from "./base/questPoolMembers.controller.base";

@swagger.ApiTags("questPoolMembers")
@common.Controller("questPoolMembers")
export class QuestPoolMembersController extends QuestPoolMembersControllerBase {
  constructor(
    protected readonly service: QuestPoolMembersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
