import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseMawPowerService } from "./playerchoiceResponseMawPower.service";
import { PlayerchoiceResponseMawPowerControllerBase } from "./base/playerchoiceResponseMawPower.controller.base";

@swagger.ApiTags("playerchoiceResponseMawPowers")
@common.Controller("playerchoiceResponseMawPowers")
export class PlayerchoiceResponseMawPowerController extends PlayerchoiceResponseMawPowerControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseMawPowerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
