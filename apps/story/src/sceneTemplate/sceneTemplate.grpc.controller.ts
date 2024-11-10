import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SceneTemplateService } from "./sceneTemplate.service";
import { SceneTemplateGrpcControllerBase } from "./base/sceneTemplate.grpc.controller.base";

@swagger.ApiTags("sceneTemplates")
@common.Controller("sceneTemplates")
export class SceneTemplateGrpcController extends SceneTemplateGrpcControllerBase {
  constructor(protected readonly service: SceneTemplateService) {
    super(service);
  }
}
