import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceService } from "./playerchoice.service";
import { PlayerchoiceControllerBase } from "./base/playerchoice.controller.base";

@swagger.ApiTags("playerchoices")
@common.Controller("playerchoices")
export class PlayerchoiceController extends PlayerchoiceControllerBase {
  constructor(
    protected readonly service: PlayerchoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
