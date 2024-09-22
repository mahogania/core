import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionchangeTitlesModuleBase } from "./base/playerFactionchangeTitles.module.base";
import { PlayerFactionchangeTitlesService } from "./playerFactionchangeTitles.service";
import { PlayerFactionchangeTitlesController } from "./playerFactionchangeTitles.controller";
import { PlayerFactionchangeTitlesGrpcController } from "./playerFactionchangeTitles.grpc.controller";
import { PlayerFactionchangeTitlesResolver } from "./playerFactionchangeTitles.resolver";

@Module({
  imports: [PlayerFactionchangeTitlesModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerFactionchangeTitlesController,
    PlayerFactionchangeTitlesGrpcController,
  ],
  providers: [
    PlayerFactionchangeTitlesService,
    PlayerFactionchangeTitlesResolver,
  ],
  exports: [PlayerFactionchangeTitlesService],
})
export class PlayerFactionchangeTitlesModule {}
