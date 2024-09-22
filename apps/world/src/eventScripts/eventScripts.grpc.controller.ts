import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventScriptsService } from "./eventScripts.service";
import { EventScriptsGrpcControllerBase } from "./base/eventScripts.grpc.controller.base";

@swagger.ApiTags("eventScripts")
@common.Controller("eventScripts")
export class EventScriptsGrpcController extends EventScriptsGrpcControllerBase {
  constructor(protected readonly service: EventScriptsService) {
    super(service);
  }
}
