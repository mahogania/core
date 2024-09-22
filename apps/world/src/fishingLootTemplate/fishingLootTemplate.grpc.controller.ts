import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FishingLootTemplateService } from "./fishingLootTemplate.service";
import { FishingLootTemplateGrpcControllerBase } from "./base/fishingLootTemplate.grpc.controller.base";

@swagger.ApiTags("fishingLootTemplates")
@common.Controller("fishingLootTemplates")
export class FishingLootTemplateGrpcController extends FishingLootTemplateGrpcControllerBase {
  constructor(protected readonly service: FishingLootTemplateService) {
    super(service);
  }
}
