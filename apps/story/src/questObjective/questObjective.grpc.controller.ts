import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestObjectiveService } from "./questObjective.service";
import { QuestObjectiveGrpcControllerBase } from "./base/questObjective.grpc.controller.base";

@swagger.ApiTags("questObjectives")
@common.Controller("questObjectives")
export class QuestObjectiveGrpcController extends QuestObjectiveGrpcControllerBase {
  constructor(protected readonly service: QuestObjectiveService) {
    super(service);
  }
}
