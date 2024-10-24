import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PipelineService } from "./pipeline.service";
import { PipelineGrpcControllerBase } from "./base/pipeline.grpc.controller.base";

@swagger.ApiTags("pipelines")
@common.Controller("pipelines")
export class PipelineGrpcController extends PipelineGrpcControllerBase {
  constructor(protected readonly service: PipelineService) {
    super(service);
  }
}
