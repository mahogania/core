import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureMovementInfoModuleBase } from "./base/creatureMovementInfo.module.base";
import { CreatureMovementInfoService } from "./creatureMovementInfo.service";
import { CreatureMovementInfoController } from "./creatureMovementInfo.controller";
import { CreatureMovementInfoGrpcController } from "./creatureMovementInfo.grpc.controller";
import { CreatureMovementInfoResolver } from "./creatureMovementInfo.resolver";

@Module({
  imports: [CreatureMovementInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureMovementInfoController,
    CreatureMovementInfoGrpcController,
  ],
  providers: [CreatureMovementInfoService, CreatureMovementInfoResolver],
  exports: [CreatureMovementInfoService],
})
export class CreatureMovementInfoModule {}
