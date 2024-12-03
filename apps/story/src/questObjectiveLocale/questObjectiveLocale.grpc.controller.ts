import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestObjectiveLocaleService } from "./questObjectiveLocale.service";
import { QuestObjectiveLocaleGrpcControllerBase } from "./base/questObjectiveLocale.grpc.controller.base";

@swagger.ApiTags("questObjectiveLocales")
@common.Controller("questObjectiveLocales")
export class QuestObjectiveLocaleGrpcController extends QuestObjectiveLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestObjectiveLocaleService) {
    super(service);
  }
}
