import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DisenchantLootTemplateService } from "./disenchantLootTemplate.service";
import { DisenchantLootTemplateGrpcControllerBase } from "./base/disenchantLootTemplate.grpc.controller.base";

@swagger.ApiTags("disenchantLootTemplates")
@common.Controller("disenchantLootTemplates")
export class DisenchantLootTemplateGrpcController extends DisenchantLootTemplateGrpcControllerBase {
  constructor(protected readonly service: DisenchantLootTemplateService) {
    super(service);
  }
}
