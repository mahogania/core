import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestObjectivesService } from "./questObjectives.service";
import { QuestObjectivesControllerBase } from "./base/questObjectives.controller.base";

@swagger.ApiTags("questObjectives")
@common.Controller("questObjectives")
export class QuestObjectivesController extends QuestObjectivesControllerBase {
  constructor(
    protected readonly service: QuestObjectivesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
