import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LootTemplateService } from "./lootTemplate.service";
import { LootTemplateGrpcControllerBase } from "./base/lootTemplate.grpc.controller.base";

@swagger.ApiTags("lootTemplates")
@common.Controller("lootTemplates")
export class LootTemplateGrpcController extends LootTemplateGrpcControllerBase {
  constructor(protected readonly service: LootTemplateService) {
    super(service);
  }
}
