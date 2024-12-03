import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureOnKillReputationModuleBase } from "./base/creatureOnKillReputation.module.base";
import { CreatureOnKillReputationService } from "./creatureOnKillReputation.service";
import { CreatureOnKillReputationController } from "./creatureOnKillReputation.controller";
import { CreatureOnKillReputationGrpcController } from "./creatureOnKillReputation.grpc.controller";
import { CreatureOnKillReputationResolver } from "./creatureOnKillReputation.resolver";

@Module({
  imports: [CreatureOnKillReputationModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureOnKillReputationController,
    CreatureOnKillReputationGrpcController,
  ],
  providers: [
    CreatureOnKillReputationService,
    CreatureOnKillReputationResolver,
  ],
  exports: [CreatureOnKillReputationService],
})
export class CreatureOnKillReputationModule {}
