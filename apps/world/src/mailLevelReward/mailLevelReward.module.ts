import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MailLevelRewardModuleBase } from "./base/mailLevelReward.module.base";
import { MailLevelRewardService } from "./mailLevelReward.service";
import { MailLevelRewardController } from "./mailLevelReward.controller";
import { MailLevelRewardGrpcController } from "./mailLevelReward.grpc.controller";
import { MailLevelRewardResolver } from "./mailLevelReward.resolver";

@Module({
  imports: [MailLevelRewardModuleBase, forwardRef(() => AuthModule)],
  controllers: [MailLevelRewardController, MailLevelRewardGrpcController],
  providers: [MailLevelRewardService, MailLevelRewardResolver],
  exports: [MailLevelRewardService],
})
export class MailLevelRewardModule {}
