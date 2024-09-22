import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestPoolTemplateService } from "./questPoolTemplate.service";
import { QuestPoolTemplateGrpcControllerBase } from "./base/questPoolTemplate.grpc.controller.base";

@swagger.ApiTags("questPoolTemplates")
@common.Controller("questPoolTemplates")
export class QuestPoolTemplateGrpcController extends QuestPoolTemplateGrpcControllerBase {
  constructor(protected readonly service: QuestPoolTemplateService) {
    super(service);
  }
}
