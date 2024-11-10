import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectLootTemplateModuleBase } from "./base/gameObjectLootTemplate.module.base";
import { GameObjectLootTemplateService } from "./gameObjectLootTemplate.service";
import { GameObjectLootTemplateController } from "./gameObjectLootTemplate.controller";
import { GameObjectLootTemplateGrpcController } from "./gameObjectLootTemplate.grpc.controller";
import { GameObjectLootTemplateResolver } from "./gameObjectLootTemplate.resolver";

@Module({
  imports: [GameObjectLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectLootTemplateController,
    GameObjectLootTemplateGrpcController,
  ],
  providers: [GameObjectLootTemplateService, GameObjectLootTemplateResolver],
  exports: [GameObjectLootTemplateService],
})
export class GameObjectLootTemplateModule {}
