import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureQuestCurrencyService } from "./creatureQuestCurrency.service";
import { CreatureQuestCurrencyControllerBase } from "./base/creatureQuestCurrency.controller.base";

@swagger.ApiTags("creatureQuestCurrencies")
@common.Controller("creatureQuestCurrencies")
export class CreatureQuestCurrencyController extends CreatureQuestCurrencyControllerBase {
  constructor(
    protected readonly service: CreatureQuestCurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
