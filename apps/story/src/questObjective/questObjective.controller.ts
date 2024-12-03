import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestObjectiveService } from "./questObjective.service";
import { QuestObjectiveControllerBase } from "./base/questObjective.controller.base";

@swagger.ApiTags("questObjectives")
@common.Controller("questObjectives")
export class QuestObjectiveController extends QuestObjectiveControllerBase {
  constructor(
    protected readonly service: QuestObjectiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
