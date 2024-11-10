import { Module } from "@nestjs/common";
import { JobCardItemModuleBase } from "./base/jobCardItem.module.base";
import { JobCardItemService } from "./jobCardItem.service";
import { JobCardItemController } from "./jobCardItem.controller";
import { JobCardItemGrpcController } from "./jobCardItem.grpc.controller";
import { JobCardItemResolver } from "./jobCardItem.resolver";

@Module({
  imports: [JobCardItemModuleBase],
  controllers: [JobCardItemController, JobCardItemGrpcController],
  providers: [JobCardItemService, JobCardItemResolver],
  exports: [JobCardItemService],
})
export class JobCardItemModule {}
