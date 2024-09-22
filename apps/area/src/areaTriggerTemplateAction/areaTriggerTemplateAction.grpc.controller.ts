import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerTemplateActionService } from "./areaTriggerTemplateAction.service";
import { AreaTriggerTemplateActionGrpcControllerBase } from "./base/areaTriggerTemplateAction.grpc.controller.base";

@swagger.ApiTags("areaTriggerTemplateActions")
@common.Controller("areaTriggerTemplateActions")
export class AreaTriggerTemplateActionGrpcController extends AreaTriggerTemplateActionGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerTemplateActionService) {
    super(service);
  }
}
