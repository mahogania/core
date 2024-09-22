import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectAddonModuleBase } from "./base/gameObjectAddon.module.base";
import { GameObjectAddonService } from "./gameObjectAddon.service";
import { GameObjectAddonController } from "./gameObjectAddon.controller";
import { GameObjectAddonGrpcController } from "./gameObjectAddon.grpc.controller";
import { GameObjectAddonResolver } from "./gameObjectAddon.resolver";

@Module({
  imports: [GameObjectAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameObjectAddonController, GameObjectAddonGrpcController],
  providers: [GameObjectAddonService, GameObjectAddonResolver],
  exports: [GameObjectAddonService],
})
export class GameObjectAddonModule {}
