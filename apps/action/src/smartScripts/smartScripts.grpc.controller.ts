import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SmartScriptsService } from "./smartScripts.service";
import { SmartScriptsGrpcControllerBase } from "./base/smartScripts.grpc.controller.base";

@swagger.ApiTags("smartScripts")
@common.Controller("smartScripts")
export class SmartScriptsGrpcController extends SmartScriptsGrpcControllerBase {
  constructor(protected readonly service: SmartScriptsService) {
    super(service);
  }
}
