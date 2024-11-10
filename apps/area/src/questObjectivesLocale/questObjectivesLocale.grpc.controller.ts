import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestObjectivesLocaleService } from "./questObjectivesLocale.service";
import { QuestObjectivesLocaleGrpcControllerBase } from "./base/questObjectivesLocale.grpc.controller.base";

@swagger.ApiTags("questObjectivesLocales")
@common.Controller("questObjectivesLocales")
export class QuestObjectivesLocaleGrpcController extends QuestObjectivesLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestObjectivesLocaleService) {
    super(service);
  }
}
