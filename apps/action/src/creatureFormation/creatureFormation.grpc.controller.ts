import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureFormationService } from "./creatureFormation.service";
import { CreatureFormationGrpcControllerBase } from "./base/creatureFormation.grpc.controller.base";

@swagger.ApiTags("creatureFormations")
@common.Controller("creatureFormations")
export class CreatureFormationGrpcController extends CreatureFormationGrpcControllerBase {
  constructor(protected readonly service: CreatureFormationService) {
    super(service);
  }
}
