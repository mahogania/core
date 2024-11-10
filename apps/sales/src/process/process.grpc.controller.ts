import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessService } from "./process.service";
import { ProcessGrpcControllerBase } from "./base/process.grpc.controller.base";

@swagger.ApiTags("processes")
@common.Controller("processes")
export class ProcessGrpcController extends ProcessGrpcControllerBase {
  constructor(protected readonly service: ProcessService) {
    super(service);
  }
}
