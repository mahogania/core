import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureQuestStarterService } from "./creatureQuestStarter.service";
import { CreatureQuestStarterGrpcControllerBase } from "./base/creatureQuestStarter.grpc.controller.base";

@swagger.ApiTags("creatureQuestStarters")
@common.Controller("creatureQuestStarters")
export class CreatureQuestStarterGrpcController extends CreatureQuestStarterGrpcControllerBase {
  constructor(protected readonly service: CreatureQuestStarterService) {
    super(service);
  }
}
