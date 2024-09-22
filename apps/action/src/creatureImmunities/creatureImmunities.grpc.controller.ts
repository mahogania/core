import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureImmunitiesService } from "./creatureImmunities.service";
import { CreatureImmunitiesGrpcControllerBase } from "./base/creatureImmunities.grpc.controller.base";

@swagger.ApiTags("creatureImmunities")
@common.Controller("creatureImmunities")
export class CreatureImmunitiesGrpcController extends CreatureImmunitiesGrpcControllerBase {
  constructor(protected readonly service: CreatureImmunitiesService) {
    super(service);
  }
}
