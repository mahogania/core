import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectTemplateLocaleModuleBase } from "./base/gameObjectTemplateLocale.module.base";
import { GameObjectTemplateLocaleService } from "./gameObjectTemplateLocale.service";
import { GameObjectTemplateLocaleController } from "./gameObjectTemplateLocale.controller";
import { GameObjectTemplateLocaleGrpcController } from "./gameObjectTemplateLocale.grpc.controller";
import { GameObjectTemplateLocaleResolver } from "./gameObjectTemplateLocale.resolver";

@Module({
  imports: [GameObjectTemplateLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectTemplateLocaleController,
    GameObjectTemplateLocaleGrpcController,
  ],
  providers: [
    GameObjectTemplateLocaleService,
    GameObjectTemplateLocaleResolver,
  ],
  exports: [GameObjectTemplateLocaleService],
})
export class GameObjectTemplateLocaleModule {}
