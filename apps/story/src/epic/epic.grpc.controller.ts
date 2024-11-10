import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EpicService } from "./epic.service";
import { EpicGrpcControllerBase } from "./base/epic.grpc.controller.base";

@swagger.ApiTags("epics")
@common.Controller("epics")
export class EpicGrpcController extends EpicGrpcControllerBase {
  constructor(protected readonly service: EpicService) {
    super(service);
  }
}
