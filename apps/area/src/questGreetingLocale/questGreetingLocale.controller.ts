import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestGreetingLocaleService } from "./questGreetingLocale.service";
import { QuestGreetingLocaleControllerBase } from "./base/questGreetingLocale.controller.base";

@swagger.ApiTags("questGreetingLocales")
@common.Controller("questGreetingLocales")
export class QuestGreetingLocaleController extends QuestGreetingLocaleControllerBase {
  constructor(
    protected readonly service: QuestGreetingLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
