import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureClassLevelStatsModuleBase } from "./base/creatureClassLevelStats.module.base";
import { CreatureClassLevelStatsService } from "./creatureClassLevelStats.service";
import { CreatureClassLevelStatsController } from "./creatureClassLevelStats.controller";
import { CreatureClassLevelStatsGrpcController } from "./creatureClassLevelStats.grpc.controller";
import { CreatureClassLevelStatsResolver } from "./creatureClassLevelStats.resolver";

@Module({
  imports: [CreatureClassLevelStatsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureClassLevelStatsController,
    CreatureClassLevelStatsGrpcController,
  ],
  providers: [CreatureClassLevelStatsService, CreatureClassLevelStatsResolver],
  exports: [CreatureClassLevelStatsService],
})
export class CreatureClassLevelStatsModule {}
