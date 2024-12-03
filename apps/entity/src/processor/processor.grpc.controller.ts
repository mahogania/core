import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessorService } from "./processor.service";
import { ProcessorGrpcControllerBase } from "./base/processor.grpc.controller.base";

@swagger.ApiTags("processors")
@common.Controller("processors")
export class ProcessorGrpcController extends ProcessorGrpcControllerBase {
  constructor(protected readonly service: ProcessorService) {
    super(service);
  }
}
