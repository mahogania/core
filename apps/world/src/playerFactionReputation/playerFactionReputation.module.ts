import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionReputationModuleBase } from "./base/playerFactionReputation.module.base";
import { PlayerFactionReputationService } from "./playerFactionReputation.service";
import { PlayerFactionReputationController } from "./playerFactionReputation.controller";
import { PlayerFactionReputationGrpcController } from "./playerFactionReputation.grpc.controller";
import { PlayerFactionReputationResolver } from "./playerFactionReputation.resolver";

@Module({
  imports: [PlayerFactionReputationModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerFactionReputationController,
    PlayerFactionReputationGrpcController,
  ],
  providers: [PlayerFactionReputationService, PlayerFactionReputationResolver],
  exports: [PlayerFactionReputationService],
})
export class PlayerFactionReputationModule {}
