import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerTeleportModuleBase } from "./base/areaTriggerTeleport.module.base";
import { AreaTriggerTeleportService } from "./areaTriggerTeleport.service";
import { AreaTriggerTeleportController } from "./areaTriggerTeleport.controller";
import { AreaTriggerTeleportGrpcController } from "./areaTriggerTeleport.grpc.controller";
import { AreaTriggerTeleportResolver } from "./areaTriggerTeleport.resolver";

@Module({
  imports: [AreaTriggerTeleportModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AreaTriggerTeleportController,
    AreaTriggerTeleportGrpcController,
  ],
  providers: [AreaTriggerTeleportService, AreaTriggerTeleportResolver],
  exports: [AreaTriggerTeleportService],
})
export class AreaTriggerTeleportModule {}
