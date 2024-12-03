import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestObjectivesLocaleService } from "./questObjectivesLocale.service";
import { QuestObjectivesLocaleControllerBase } from "./base/questObjectivesLocale.controller.base";

@swagger.ApiTags("questObjectivesLocales")
@common.Controller("questObjectivesLocales")
export class QuestObjectivesLocaleController extends QuestObjectivesLocaleControllerBase {
  constructor(
    protected readonly service: QuestObjectivesLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
