import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestPoolService } from "./questPool.service";
import { QuestPoolControllerBase } from "./base/questPool.controller.base";

@swagger.ApiTags("questPools")
@common.Controller("questPools")
export class QuestPoolController extends QuestPoolControllerBase {
  constructor(
    protected readonly service: QuestPoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
