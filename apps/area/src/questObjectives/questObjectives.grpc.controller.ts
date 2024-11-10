import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestObjectivesService } from "./questObjectives.service";
import { QuestObjectivesGrpcControllerBase } from "./base/questObjectives.grpc.controller.base";

@swagger.ApiTags("questObjectives")
@common.Controller("questObjectives")
export class QuestObjectivesGrpcController extends QuestObjectivesGrpcControllerBase {
  constructor(protected readonly service: QuestObjectivesService) {
    super(service);
  }
}
