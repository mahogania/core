import { Module } from "@nestjs/common";
import { DataImportLogModuleBase } from "./base/dataImportLog.module.base";
import { DataImportLogService } from "./dataImportLog.service";
import { DataImportLogController } from "./dataImportLog.controller";
import { DataImportLogResolver } from "./dataImportLog.resolver";

@Module({
  imports: [DataImportLogModuleBase],
  controllers: [DataImportLogController],
  providers: [DataImportLogService, DataImportLogResolver],
  exports: [DataImportLogService],
})
export class DataImportLogModule {}
