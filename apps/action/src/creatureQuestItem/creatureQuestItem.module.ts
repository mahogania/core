import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureQuestItemModuleBase } from "./base/creatureQuestItem.module.base";
import { CreatureQuestItemService } from "./creatureQuestItem.service";
import { CreatureQuestItemController } from "./creatureQuestItem.controller";
import { CreatureQuestItemGrpcController } from "./creatureQuestItem.grpc.controller";
import { CreatureQuestItemResolver } from "./creatureQuestItem.resolver";

@Module({
  imports: [CreatureQuestItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureQuestItemController, CreatureQuestItemGrpcController],
  providers: [CreatureQuestItemService, CreatureQuestItemResolver],
  exports: [CreatureQuestItemService],
})
export class CreatureQuestItemModule {}
