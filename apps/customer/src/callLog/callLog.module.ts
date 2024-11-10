import { Module } from "@nestjs/common";
import { CallLogModuleBase } from "./base/callLog.module.base";
import { CallLogService } from "./callLog.service";
import { CallLogController } from "./callLog.controller";
import { CallLogResolver } from "./callLog.resolver";

@Module({
  imports: [CallLogModuleBase],
  controllers: [CallLogController],
  providers: [CallLogService, CallLogResolver],
  exports: [CallLogService],
})
export class CallLogModule {}
