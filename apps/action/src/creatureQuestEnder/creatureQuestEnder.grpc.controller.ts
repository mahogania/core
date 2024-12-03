import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureQuestEnderService } from "./creatureQuestEnder.service";
import { CreatureQuestEnderGrpcControllerBase } from "./base/creatureQuestEnder.grpc.controller.base";

@swagger.ApiTags("creatureQuestEnders")
@common.Controller("creatureQuestEnders")
export class CreatureQuestEnderGrpcController extends CreatureQuestEnderGrpcControllerBase {
  constructor(protected readonly service: CreatureQuestEnderService) {
    super(service);
  }
}
