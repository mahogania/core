import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRewardChoiceItemsModuleBase } from "./base/questRewardChoiceItems.module.base";
import { QuestRewardChoiceItemsService } from "./questRewardChoiceItems.service";
import { QuestRewardChoiceItemsController } from "./questRewardChoiceItems.controller";
import { QuestRewardChoiceItemsGrpcController } from "./questRewardChoiceItems.grpc.controller";
import { QuestRewardChoiceItemsResolver } from "./questRewardChoiceItems.resolver";

@Module({
  imports: [QuestRewardChoiceItemsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestRewardChoiceItemsController,
    QuestRewardChoiceItemsGrpcController,
  ],
  providers: [QuestRewardChoiceItemsService, QuestRewardChoiceItemsResolver],
  exports: [QuestRewardChoiceItemsService],
})
export class QuestRewardChoiceItemsModule {}
