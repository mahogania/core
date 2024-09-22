import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventCreatureModuleBase } from "./base/gameEventCreature.module.base";
import { GameEventCreatureService } from "./gameEventCreature.service";
import { GameEventCreatureController } from "./gameEventCreature.controller";
import { GameEventCreatureGrpcController } from "./gameEventCreature.grpc.controller";
import { GameEventCreatureResolver } from "./gameEventCreature.resolver";

@Module({
  imports: [GameEventCreatureModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventCreatureController, GameEventCreatureGrpcController],
  providers: [GameEventCreatureService, GameEventCreatureResolver],
  exports: [GameEventCreatureService],
})
export class GameEventCreatureModule {}
