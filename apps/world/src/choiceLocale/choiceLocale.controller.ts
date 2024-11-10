import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChoiceLocaleService } from "./choiceLocale.service";
import { ChoiceLocaleControllerBase } from "./base/choiceLocale.controller.base";

@swagger.ApiTags("choiceLocales")
@common.Controller("choiceLocales")
export class ChoiceLocaleController extends ChoiceLocaleControllerBase {
  constructor(
    protected readonly service: ChoiceLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
