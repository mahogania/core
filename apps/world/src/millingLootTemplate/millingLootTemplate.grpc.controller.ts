import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MillingLootTemplateService } from "./millingLootTemplate.service";
import { MillingLootTemplateGrpcControllerBase } from "./base/millingLootTemplate.grpc.controller.base";

@swagger.ApiTags("millingLootTemplates")
@common.Controller("millingLootTemplates")
export class MillingLootTemplateGrpcController extends MillingLootTemplateGrpcControllerBase {
  constructor(protected readonly service: MillingLootTemplateService) {
    super(service);
  }
}
