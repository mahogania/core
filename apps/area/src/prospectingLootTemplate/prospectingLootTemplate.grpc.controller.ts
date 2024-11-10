import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProspectingLootTemplateService } from "./prospectingLootTemplate.service";
import { ProspectingLootTemplateGrpcControllerBase } from "./base/prospectingLootTemplate.grpc.controller.base";

@swagger.ApiTags("prospectingLootTemplates")
@common.Controller("prospectingLootTemplates")
export class ProspectingLootTemplateGrpcController extends ProspectingLootTemplateGrpcControllerBase {
  constructor(protected readonly service: ProspectingLootTemplateService) {
    super(service);
  }
}
