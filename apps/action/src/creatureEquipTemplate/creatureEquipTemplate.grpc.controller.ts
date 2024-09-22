import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureEquipTemplateService } from "./creatureEquipTemplate.service";
import { CreatureEquipTemplateGrpcControllerBase } from "./base/creatureEquipTemplate.grpc.controller.base";

@swagger.ApiTags("creatureEquipTemplates")
@common.Controller("creatureEquipTemplates")
export class CreatureEquipTemplateGrpcController extends CreatureEquipTemplateGrpcControllerBase {
  constructor(protected readonly service: CreatureEquipTemplateService) {
    super(service);
  }
}
