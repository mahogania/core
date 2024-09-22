import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionchangeQuestsModuleBase } from "./base/playerFactionchangeQuests.module.base";
import { PlayerFactionchangeQuestsService } from "./playerFactionchangeQuests.service";
import { PlayerFactionchangeQuestsController } from "./playerFactionchangeQuests.controller";
import { PlayerFactionchangeQuestsGrpcController } from "./playerFactionchangeQuests.grpc.controller";
import { PlayerFactionchangeQuestsResolver } from "./playerFactionchangeQuests.resolver";

@Module({
  imports: [PlayerFactionchangeQuestsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerFactionchangeQuestsController,
    PlayerFactionchangeQuestsGrpcController,
  ],
  providers: [
    PlayerFactionchangeQuestsService,
    PlayerFactionchangeQuestsResolver,
  ],
  exports: [PlayerFactionchangeQuestsService],
})
export class PlayerFactionchangeQuestsModule {}
