import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateService } from "./creatureTemplate.service";
import { CreatureTemplateGrpcControllerBase } from "./base/creatureTemplate.grpc.controller.base";

@swagger.ApiTags("creatureTemplates")
@common.Controller("creatureTemplates")
export class CreatureTemplateGrpcController extends CreatureTemplateGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateService) {
    super(service);
  }
}
