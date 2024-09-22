import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerScriptService } from "./areaTriggerScript.service";
import { AreaTriggerScriptGrpcControllerBase } from "./base/areaTriggerScript.grpc.controller.base";

@swagger.ApiTags("areaTriggerScripts")
@common.Controller("areaTriggerScripts")
export class AreaTriggerScriptGrpcController extends AreaTriggerScriptGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerScriptService) {
    super(service);
  }
}
