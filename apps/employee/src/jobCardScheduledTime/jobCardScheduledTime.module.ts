import { Module } from "@nestjs/common";
import { JobCardScheduledTimeModuleBase } from "./base/jobCardScheduledTime.module.base";
import { JobCardScheduledTimeService } from "./jobCardScheduledTime.service";
import { JobCardScheduledTimeController } from "./jobCardScheduledTime.controller";
import { JobCardScheduledTimeGrpcController } from "./jobCardScheduledTime.grpc.controller";
import { JobCardScheduledTimeResolver } from "./jobCardScheduledTime.resolver";

@Module({
  imports: [JobCardScheduledTimeModuleBase],
  controllers: [
    JobCardScheduledTimeController,
    JobCardScheduledTimeGrpcController,
  ],
  providers: [JobCardScheduledTimeService, JobCardScheduledTimeResolver],
  exports: [JobCardScheduledTimeService],
})
export class JobCardScheduledTimeModule {}
