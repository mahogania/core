import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestOfferRewardModuleBase } from "./base/questOfferReward.module.base";
import { QuestOfferRewardService } from "./questOfferReward.service";
import { QuestOfferRewardController } from "./questOfferReward.controller";
import { QuestOfferRewardGrpcController } from "./questOfferReward.grpc.controller";
import { QuestOfferRewardResolver } from "./questOfferReward.resolver";

@Module({
  imports: [QuestOfferRewardModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestOfferRewardController, QuestOfferRewardGrpcController],
  providers: [QuestOfferRewardService, QuestOfferRewardResolver],
  exports: [QuestOfferRewardService],
})
export class QuestOfferRewardModule {}
