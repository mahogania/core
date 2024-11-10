import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestObjectiveLocaleService } from "./questObjectiveLocale.service";
import { QuestObjectiveLocaleControllerBase } from "./base/questObjectiveLocale.controller.base";

@swagger.ApiTags("questObjectiveLocales")
@common.Controller("questObjectiveLocales")
export class QuestObjectiveLocaleController extends QuestObjectiveLocaleControllerBase {
  constructor(
    protected readonly service: QuestObjectiveLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
