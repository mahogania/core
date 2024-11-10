import { Module } from "@nestjs/common";
import { PipelineModuleBase } from "./base/pipeline.module.base";
import { PipelineService } from "./pipeline.service";
import { PipelineController } from "./pipeline.controller";
import { PipelineGrpcController } from "./pipeline.grpc.controller";
import { PipelineResolver } from "./pipeline.resolver";

@Module({
  imports: [PipelineModuleBase],
  controllers: [PipelineController, PipelineGrpcController],
  providers: [PipelineService, PipelineResolver],
  exports: [PipelineService],
})
export class PipelineModule {}
