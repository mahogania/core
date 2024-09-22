import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectTemplateModuleBase } from "./base/gameObjectTemplate.module.base";
import { GameObjectTemplateService } from "./gameObjectTemplate.service";
import { GameObjectTemplateController } from "./gameObjectTemplate.controller";
import { GameObjectTemplateGrpcController } from "./gameObjectTemplate.grpc.controller";
import { GameObjectTemplateResolver } from "./gameObjectTemplate.resolver";

@Module({
  imports: [GameObjectTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameObjectTemplateController, GameObjectTemplateGrpcController],
  providers: [GameObjectTemplateService, GameObjectTemplateResolver],
  exports: [GameObjectTemplateService],
})
export class GameObjectTemplateModule {}
