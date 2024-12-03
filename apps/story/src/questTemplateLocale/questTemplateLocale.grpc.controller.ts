import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestTemplateLocaleService } from "./questTemplateLocale.service";
import { QuestTemplateLocaleGrpcControllerBase } from "./base/questTemplateLocale.grpc.controller.base";

@swagger.ApiTags("questTemplateLocales")
@common.Controller("questTemplateLocales")
export class QuestTemplateLocaleGrpcController extends QuestTemplateLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestTemplateLocaleService) {
    super(service);
  }
}
