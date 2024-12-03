import { Module } from "@nestjs/common";
import { JobCardModuleBase } from "./base/jobCard.module.base";
import { JobCardService } from "./jobCard.service";
import { JobCardController } from "./jobCard.controller";
import { JobCardGrpcController } from "./jobCard.grpc.controller";
import { JobCardResolver } from "./jobCard.resolver";

@Module({
  imports: [JobCardModuleBase],
  controllers: [JobCardController, JobCardGrpcController],
  providers: [JobCardService, JobCardResolver],
  exports: [JobCardService],
})
export class JobCardModule {}
