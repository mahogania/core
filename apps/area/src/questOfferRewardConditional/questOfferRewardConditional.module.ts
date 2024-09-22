import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestOfferRewardConditionalModuleBase } from "./base/questOfferRewardConditional.module.base";
import { QuestOfferRewardConditionalService } from "./questOfferRewardConditional.service";
import { QuestOfferRewardConditionalController } from "./questOfferRewardConditional.controller";
import { QuestOfferRewardConditionalGrpcController } from "./questOfferRewardConditional.grpc.controller";
import { QuestOfferRewardConditionalResolver } from "./questOfferRewardConditional.resolver";

@Module({
  imports: [
    QuestOfferRewardConditionalModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestOfferRewardConditionalController,
    QuestOfferRewardConditionalGrpcController,
  ],
  providers: [
    QuestOfferRewardConditionalService,
    QuestOfferRewardConditionalResolver,
  ],
  exports: [QuestOfferRewardConditionalService],
})
export class QuestOfferRewardConditionalModule {}
