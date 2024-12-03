import { Module } from "@nestjs/common";
import { JobCardOperationModuleBase } from "./base/jobCardOperation.module.base";
import { JobCardOperationService } from "./jobCardOperation.service";
import { JobCardOperationController } from "./jobCardOperation.controller";
import { JobCardOperationGrpcController } from "./jobCardOperation.grpc.controller";
import { JobCardOperationResolver } from "./jobCardOperation.resolver";

@Module({
  imports: [JobCardOperationModuleBase],
  controllers: [JobCardOperationController, JobCardOperationGrpcController],
  providers: [JobCardOperationService, JobCardOperationResolver],
  exports: [JobCardOperationService],
})
export class JobCardOperationModule {}
