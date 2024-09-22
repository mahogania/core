import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseLocaleService } from "./playerchoiceResponseLocale.service";
import { PlayerchoiceResponseLocaleControllerBase } from "./base/playerchoiceResponseLocale.controller.base";

@swagger.ApiTags("playerchoiceResponseLocales")
@common.Controller("playerchoiceResponseLocales")
export class PlayerchoiceResponseLocaleController extends PlayerchoiceResponseLocaleControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
