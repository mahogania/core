import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectTemplateAddonModuleBase } from "./base/gameObjectTemplateAddon.module.base";
import { GameObjectTemplateAddonService } from "./gameObjectTemplateAddon.service";
import { GameObjectTemplateAddonController } from "./gameObjectTemplateAddon.controller";
import { GameObjectTemplateAddonGrpcController } from "./gameObjectTemplateAddon.grpc.controller";
import { GameObjectTemplateAddonResolver } from "./gameObjectTemplateAddon.resolver";

@Module({
  imports: [GameObjectTemplateAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectTemplateAddonController,
    GameObjectTemplateAddonGrpcController,
  ],
  providers: [GameObjectTemplateAddonService, GameObjectTemplateAddonResolver],
  exports: [GameObjectTemplateAddonService],
})
export class GameObjectTemplateAddonModule {}
