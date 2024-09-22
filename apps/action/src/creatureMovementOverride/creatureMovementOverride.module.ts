import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureMovementOverrideModuleBase } from "./base/creatureMovementOverride.module.base";
import { CreatureMovementOverrideService } from "./creatureMovementOverride.service";
import { CreatureMovementOverrideController } from "./creatureMovementOverride.controller";
import { CreatureMovementOverrideGrpcController } from "./creatureMovementOverride.grpc.controller";
import { CreatureMovementOverrideResolver } from "./creatureMovementOverride.resolver";

@Module({
  imports: [CreatureMovementOverrideModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureMovementOverrideController,
    CreatureMovementOverrideGrpcController,
  ],
  providers: [
    CreatureMovementOverrideService,
    CreatureMovementOverrideResolver,
  ],
  exports: [CreatureMovementOverrideService],
})
export class CreatureMovementOverrideModule {}
