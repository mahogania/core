import { Module } from "@nestjs/common";
import { BomUpdateLogModuleBase } from "./base/bomUpdateLog.module.base";
import { BomUpdateLogService } from "./bomUpdateLog.service";
import { BomUpdateLogController } from "./bomUpdateLog.controller";
import { BomUpdateLogResolver } from "./bomUpdateLog.resolver";

@Module({
  imports: [BomUpdateLogModuleBase],
  controllers: [BomUpdateLogController],
  providers: [BomUpdateLogService, BomUpdateLogResolver],
  exports: [BomUpdateLogService],
})
export class BomUpdateLogModule {}
