import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventArenaSeasonsModuleBase } from "./base/gameEventArenaSeasons.module.base";
import { GameEventArenaSeasonsService } from "./gameEventArenaSeasons.service";
import { GameEventArenaSeasonsController } from "./gameEventArenaSeasons.controller";
import { GameEventArenaSeasonsGrpcController } from "./gameEventArenaSeasons.grpc.controller";
import { GameEventArenaSeasonsResolver } from "./gameEventArenaSeasons.resolver";

@Module({
  imports: [GameEventArenaSeasonsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventArenaSeasonsController,
    GameEventArenaSeasonsGrpcController,
  ],
  providers: [GameEventArenaSeasonsService, GameEventArenaSeasonsResolver],
  exports: [GameEventArenaSeasonsService],
})
export class GameEventArenaSeasonsModule {}
