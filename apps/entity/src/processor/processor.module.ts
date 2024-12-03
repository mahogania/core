import { Module } from "@nestjs/common";
import { ProcessorModuleBase } from "./base/processor.module.base";
import { ProcessorService } from "./processor.service";
import { ProcessorController } from "./processor.controller";
import { ProcessorGrpcController } from "./processor.grpc.controller";
import { ProcessorResolver } from "./processor.resolver";

@Module({
  imports: [ProcessorModuleBase],
  controllers: [ProcessorController, ProcessorGrpcController],
  providers: [ProcessorService, ProcessorResolver],
  exports: [ProcessorService],
})
export class ProcessorModule {}
