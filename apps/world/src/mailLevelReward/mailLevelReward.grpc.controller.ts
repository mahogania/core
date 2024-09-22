import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MailLevelRewardService } from "./mailLevelReward.service";
import { MailLevelRewardGrpcControllerBase } from "./base/mailLevelReward.grpc.controller.base";

@swagger.ApiTags("mailLevelRewards")
@common.Controller("mailLevelRewards")
export class MailLevelRewardGrpcController extends MailLevelRewardGrpcControllerBase {
  constructor(protected readonly service: MailLevelRewardService) {
    super(service);
  }
}
