import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureLootTemplateService } from "./creatureLootTemplate.service";
import { CreatureLootTemplateGrpcControllerBase } from "./base/creatureLootTemplate.grpc.controller.base";

@swagger.ApiTags("creatureLootTemplates")
@common.Controller("creatureLootTemplates")
export class CreatureLootTemplateGrpcController extends CreatureLootTemplateGrpcControllerBase {
  constructor(protected readonly service: CreatureLootTemplateService) {
    super(service);
  }
}
