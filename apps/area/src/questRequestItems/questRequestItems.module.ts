import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRequestItemsModuleBase } from "./base/questRequestItems.module.base";
import { QuestRequestItemsService } from "./questRequestItems.service";
import { QuestRequestItemsController } from "./questRequestItems.controller";
import { QuestRequestItemsGrpcController } from "./questRequestItems.grpc.controller";
import { QuestRequestItemsResolver } from "./questRequestItems.resolver";

@Module({
  imports: [QuestRequestItemsModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestRequestItemsController, QuestRequestItemsGrpcController],
  providers: [QuestRequestItemsService, QuestRequestItemsResolver],
  exports: [QuestRequestItemsService],
})
export class QuestRequestItemsModule {}
