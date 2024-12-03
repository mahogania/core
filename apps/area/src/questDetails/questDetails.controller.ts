import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestDetailsService } from "./questDetails.service";
import { QuestDetailsControllerBase } from "./base/questDetails.controller.base";

@swagger.ApiTags("questDetails")
@common.Controller("questDetails")
export class QuestDetailsController extends QuestDetailsControllerBase {
  constructor(
    protected readonly service: QuestDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
