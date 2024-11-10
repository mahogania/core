import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRewardItemModuleBase } from "./base/questRewardItem.module.base";
import { QuestRewardItemService } from "./questRewardItem.service";
import { QuestRewardItemController } from "./questRewardItem.controller";
import { QuestRewardItemGrpcController } from "./questRewardItem.grpc.controller";
import { QuestRewardItemResolver } from "./questRewardItem.resolver";

@Module({
  imports: [QuestRewardItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestRewardItemController, QuestRewardItemGrpcController],
  providers: [QuestRewardItemService, QuestRewardItemResolver],
  exports: [QuestRewardItemService],
})
export class QuestRewardItemModule {}
