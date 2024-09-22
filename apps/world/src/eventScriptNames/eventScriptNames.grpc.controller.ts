import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventScriptNamesService } from "./eventScriptNames.service";
import { EventScriptNamesGrpcControllerBase } from "./base/eventScriptNames.grpc.controller.base";

@swagger.ApiTags("eventScriptNames")
@common.Controller("eventScriptNames")
export class EventScriptNamesGrpcController extends EventScriptNamesGrpcControllerBase {
  constructor(protected readonly service: EventScriptNamesService) {
    super(service);
  }
}
