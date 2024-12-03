import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureImmunityService } from "./creatureImmunity.service";
import { CreatureImmunityGrpcControllerBase } from "./base/creatureImmunity.grpc.controller.base";

@swagger.ApiTags("creatureImmunities")
@common.Controller("creatureImmunities")
export class CreatureImmunityGrpcController extends CreatureImmunityGrpcControllerBase {
  constructor(protected readonly service: CreatureImmunityService) {
    super(service);
  }
}
