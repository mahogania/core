import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpawnGroupTemplateService } from "./spawnGroupTemplate.service";
import { SpawnGroupTemplateGrpcControllerBase } from "./base/spawnGroupTemplate.grpc.controller.base";

@swagger.ApiTags("spawnGroupTemplates")
@common.Controller("spawnGroupTemplates")
export class SpawnGroupTemplateGrpcController extends SpawnGroupTemplateGrpcControllerBase {
  constructor(protected readonly service: SpawnGroupTemplateService) {
    super(service);
  }
}
