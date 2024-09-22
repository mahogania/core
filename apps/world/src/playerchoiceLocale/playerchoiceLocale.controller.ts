import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceLocaleService } from "./playerchoiceLocale.service";
import { PlayerchoiceLocaleControllerBase } from "./base/playerchoiceLocale.controller.base";

@swagger.ApiTags("playerchoiceLocales")
@common.Controller("playerchoiceLocales")
export class PlayerchoiceLocaleController extends PlayerchoiceLocaleControllerBase {
  constructor(
    protected readonly service: PlayerchoiceLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
