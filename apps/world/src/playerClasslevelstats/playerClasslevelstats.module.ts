import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerClasslevelstatsModuleBase } from "./base/playerClasslevelstats.module.base";
import { PlayerClasslevelstatsService } from "./playerClasslevelstats.service";
import { PlayerClasslevelstatsController } from "./playerClasslevelstats.controller";
import { PlayerClasslevelstatsGrpcController } from "./playerClasslevelstats.grpc.controller";
import { PlayerClasslevelstatsResolver } from "./playerClasslevelstats.resolver";

@Module({
  imports: [PlayerClasslevelstatsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerClasslevelstatsController,
    PlayerClasslevelstatsGrpcController,
  ],
  providers: [PlayerClasslevelstatsService, PlayerClasslevelstatsResolver],
  exports: [PlayerClasslevelstatsService],
})
export class PlayerClasslevelstatsModule {}
