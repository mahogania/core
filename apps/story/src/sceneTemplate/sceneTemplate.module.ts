import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SceneTemplateModuleBase } from "./base/sceneTemplate.module.base";
import { SceneTemplateService } from "./sceneTemplate.service";
import { SceneTemplateController } from "./sceneTemplate.controller";
import { SceneTemplateGrpcController } from "./sceneTemplate.grpc.controller";
import { SceneTemplateResolver } from "./sceneTemplate.resolver";

@Module({
  imports: [SceneTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [SceneTemplateController, SceneTemplateGrpcController],
  providers: [SceneTemplateService, SceneTemplateResolver],
  exports: [SceneTemplateService],
})
export class SceneTemplateModule {}
