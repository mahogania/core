import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateResistanceService } from "./creatureTemplateResistance.service";
import { CreatureTemplateResistanceGrpcControllerBase } from "./base/creatureTemplateResistance.grpc.controller.base";

@swagger.ApiTags("creatureTemplateResistances")
@common.Controller("creatureTemplateResistances")
export class CreatureTemplateResistanceGrpcController extends CreatureTemplateResistanceGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateResistanceService) {
    super(service);
  }
}
