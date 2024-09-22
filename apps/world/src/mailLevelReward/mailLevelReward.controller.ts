import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MailLevelRewardService } from "./mailLevelReward.service";
import { MailLevelRewardControllerBase } from "./base/mailLevelReward.controller.base";

@swagger.ApiTags("mailLevelRewards")
@common.Controller("mailLevelRewards")
export class MailLevelRewardController extends MailLevelRewardControllerBase {
  constructor(
    protected readonly service: MailLevelRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
