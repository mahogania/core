import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerTavernService } from "./areaTriggerTavern.service";
import { AreaTriggerTavernGrpcControllerBase } from "./base/areaTriggerTavern.grpc.controller.base";

@swagger.ApiTags("areaTriggerTaverns")
@common.Controller("areaTriggerTaverns")
export class AreaTriggerTavernGrpcController extends AreaTriggerTavernGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerTavernService) {
    super(service);
  }
}
