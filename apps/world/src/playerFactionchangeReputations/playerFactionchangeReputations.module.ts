import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionchangeReputationsModuleBase } from "./base/playerFactionchangeReputations.module.base";
import { PlayerFactionchangeReputationsService } from "./playerFactionchangeReputations.service";
import { PlayerFactionchangeReputationsController } from "./playerFactionchangeReputations.controller";
import { PlayerFactionchangeReputationsGrpcController } from "./playerFactionchangeReputations.grpc.controller";
import { PlayerFactionchangeReputationsResolver } from "./playerFactionchangeReputations.resolver";

@Module({
  imports: [
    PlayerFactionchangeReputationsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerFactionchangeReputationsController,
    PlayerFactionchangeReputationsGrpcController,
  ],
  providers: [
    PlayerFactionchangeReputationsService,
    PlayerFactionchangeReputationsResolver,
  ],
  exports: [PlayerFactionchangeReputationsService],
})
export class PlayerFactionchangeReputationsModule {}
