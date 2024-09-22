import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkinningLootTemplateService } from "./skinningLootTemplate.service";
import { SkinningLootTemplateGrpcControllerBase } from "./base/skinningLootTemplate.grpc.controller.base";

@swagger.ApiTags("skinningLootTemplates")
@common.Controller("skinningLootTemplates")
export class SkinningLootTemplateGrpcController extends SkinningLootTemplateGrpcControllerBase {
  constructor(protected readonly service: SkinningLootTemplateService) {
    super(service);
  }
}
