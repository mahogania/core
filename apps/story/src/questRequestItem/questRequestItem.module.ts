import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRequestItemModuleBase } from "./base/questRequestItem.module.base";
import { QuestRequestItemService } from "./questRequestItem.service";
import { QuestRequestItemController } from "./questRequestItem.controller";
import { QuestRequestItemGrpcController } from "./questRequestItem.grpc.controller";
import { QuestRequestItemResolver } from "./questRequestItem.resolver";

@Module({
  imports: [QuestRequestItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestRequestItemController, QuestRequestItemGrpcController],
  providers: [QuestRequestItemService, QuestRequestItemResolver],
  exports: [QuestRequestItemService],
})
export class QuestRequestItemModule {}
