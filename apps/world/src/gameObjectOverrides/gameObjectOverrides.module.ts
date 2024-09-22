import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectOverridesModuleBase } from "./base/gameObjectOverrides.module.base";
import { GameObjectOverridesService } from "./gameObjectOverrides.service";
import { GameObjectOverridesController } from "./gameObjectOverrides.controller";
import { GameObjectOverridesGrpcController } from "./gameObjectOverrides.grpc.controller";
import { GameObjectOverridesResolver } from "./gameObjectOverrides.resolver";

@Module({
  imports: [GameObjectOverridesModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectOverridesController,
    GameObjectOverridesGrpcController,
  ],
  providers: [GameObjectOverridesService, GameObjectOverridesResolver],
  exports: [GameObjectOverridesService],
})
export class GameObjectOverridesModule {}
