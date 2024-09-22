import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestOfferRewardLocaleModuleBase } from "./base/questOfferRewardLocale.module.base";
import { QuestOfferRewardLocaleService } from "./questOfferRewardLocale.service";
import { QuestOfferRewardLocaleController } from "./questOfferRewardLocale.controller";
import { QuestOfferRewardLocaleGrpcController } from "./questOfferRewardLocale.grpc.controller";
import { QuestOfferRewardLocaleResolver } from "./questOfferRewardLocale.resolver";

@Module({
  imports: [QuestOfferRewardLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestOfferRewardLocaleController,
    QuestOfferRewardLocaleGrpcController,
  ],
  providers: [QuestOfferRewardLocaleService, QuestOfferRewardLocaleResolver],
  exports: [QuestOfferRewardLocaleService],
})
export class QuestOfferRewardLocaleModule {}
