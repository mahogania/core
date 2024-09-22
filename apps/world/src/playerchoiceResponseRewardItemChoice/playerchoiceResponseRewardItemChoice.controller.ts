import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseRewardItemChoiceService } from "./playerchoiceResponseRewardItemChoice.service";
import { PlayerchoiceResponseRewardItemChoiceControllerBase } from "./base/playerchoiceResponseRewardItemChoice.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardItemChoices")
@common.Controller("playerchoiceResponseRewardItemChoices")
export class PlayerchoiceResponseRewardItemChoiceController extends PlayerchoiceResponseRewardItemChoiceControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardItemChoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
