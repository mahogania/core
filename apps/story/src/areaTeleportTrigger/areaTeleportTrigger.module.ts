import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTeleportTriggerModuleBase } from "./base/areaTeleportTrigger.module.base";
import { AreaTeleportTriggerService } from "./areaTeleportTrigger.service";
import { AreaTeleportTriggerController } from "./areaTeleportTrigger.controller";
import { AreaTeleportTriggerGrpcController } from "./areaTeleportTrigger.grpc.controller";
import { AreaTeleportTriggerResolver } from "./areaTeleportTrigger.resolver";

@Module({
  imports: [AreaTeleportTriggerModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AreaTeleportTriggerController,
    AreaTeleportTriggerGrpcController,
  ],
  providers: [AreaTeleportTriggerService, AreaTeleportTriggerResolver],
  exports: [AreaTeleportTriggerService],
})
export class AreaTeleportTriggerModule {}
