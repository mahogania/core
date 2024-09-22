import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerRacestatsModuleBase } from "./base/playerRacestats.module.base";
import { PlayerRacestatsService } from "./playerRacestats.service";
import { PlayerRacestatsController } from "./playerRacestats.controller";
import { PlayerRacestatsGrpcController } from "./playerRacestats.grpc.controller";
import { PlayerRacestatsResolver } from "./playerRacestats.resolver";

@Module({
  imports: [PlayerRacestatsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerRacestatsController, PlayerRacestatsGrpcController],
  providers: [PlayerRacestatsService, PlayerRacestatsResolver],
  exports: [PlayerRacestatsService],
})
export class PlayerRacestatsModule {}
