import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestTemplateService } from "./questTemplate.service";
import { QuestTemplateGrpcControllerBase } from "./base/questTemplate.grpc.controller.base";

@swagger.ApiTags("questTemplates")
@common.Controller("questTemplates")
export class QuestTemplateGrpcController extends QuestTemplateGrpcControllerBase {
  constructor(protected readonly service: QuestTemplateService) {
    super(service);
  }
}
