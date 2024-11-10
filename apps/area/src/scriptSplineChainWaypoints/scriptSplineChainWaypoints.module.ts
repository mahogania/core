import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScriptSplineChainWaypointsModuleBase } from "./base/scriptSplineChainWaypoints.module.base";
import { ScriptSplineChainWaypointsService } from "./scriptSplineChainWaypoints.service";
import { ScriptSplineChainWaypointsController } from "./scriptSplineChainWaypoints.controller";
import { ScriptSplineChainWaypointsGrpcController } from "./scriptSplineChainWaypoints.grpc.controller";
import { ScriptSplineChainWaypointsResolver } from "./scriptSplineChainWaypoints.resolver";

@Module({
  imports: [ScriptSplineChainWaypointsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ScriptSplineChainWaypointsController,
    ScriptSplineChainWaypointsGrpcController,
  ],
  providers: [
    ScriptSplineChainWaypointsService,
    ScriptSplineChainWaypointsResolver,
  ],
  exports: [ScriptSplineChainWaypointsService],
})
export class ScriptSplineChainWaypointsModule {}
