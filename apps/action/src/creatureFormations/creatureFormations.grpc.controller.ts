import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureFormationsService } from "./creatureFormations.service";
import { CreatureFormationsGrpcControllerBase } from "./base/creatureFormations.grpc.controller.base";

@swagger.ApiTags("creatureFormations")
@common.Controller("creatureFormations")
export class CreatureFormationsGrpcController extends CreatureFormationsGrpcControllerBase {
  constructor(protected readonly service: CreatureFormationsService) {
    super(service);
  }
}
