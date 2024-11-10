import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerTemplateService } from "./areaTriggerTemplate.service";
import { AreaTriggerTemplateGrpcControllerBase } from "./base/areaTriggerTemplate.grpc.controller.base";

@swagger.ApiTags("areaTriggerTemplates")
@common.Controller("areaTriggerTemplates")
export class AreaTriggerTemplateGrpcController extends AreaTriggerTemplateGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerTemplateService) {
    super(service);
  }
}
