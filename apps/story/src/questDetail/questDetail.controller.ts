import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestDetailService } from "./questDetail.service";
import { QuestDetailControllerBase } from "./base/questDetail.controller.base";

@swagger.ApiTags("questDetails")
@common.Controller("questDetails")
export class QuestDetailController extends QuestDetailControllerBase {
  constructor(
    protected readonly service: QuestDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
