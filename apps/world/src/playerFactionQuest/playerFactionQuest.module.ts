import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionQuestModuleBase } from "./base/playerFactionQuest.module.base";
import { PlayerFactionQuestService } from "./playerFactionQuest.service";
import { PlayerFactionQuestController } from "./playerFactionQuest.controller";
import { PlayerFactionQuestGrpcController } from "./playerFactionQuest.grpc.controller";
import { PlayerFactionQuestResolver } from "./playerFactionQuest.resolver";

@Module({
  imports: [PlayerFactionQuestModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerFactionQuestController, PlayerFactionQuestGrpcController],
  providers: [PlayerFactionQuestService, PlayerFactionQuestResolver],
  exports: [PlayerFactionQuestService],
})
export class PlayerFactionQuestModule {}
