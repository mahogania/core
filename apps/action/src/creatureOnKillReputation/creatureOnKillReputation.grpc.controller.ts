import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureOnKillReputationService } from "./creatureOnKillReputation.service";
import { CreatureOnKillReputationGrpcControllerBase } from "./base/creatureOnKillReputation.grpc.controller.base";

@swagger.ApiTags("creatureOnKillReputations")
@common.Controller("creatureOnKillReputations")
export class CreatureOnKillReputationGrpcController extends CreatureOnKillReputationGrpcControllerBase {
  constructor(protected readonly service: CreatureOnKillReputationService) {
    super(service);
  }
}
