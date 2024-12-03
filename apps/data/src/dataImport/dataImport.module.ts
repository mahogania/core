import { Module } from "@nestjs/common";
import { DataImportModuleBase } from "./base/dataImport.module.base";
import { DataImportService } from "./dataImport.service";
import { DataImportController } from "./dataImport.controller";
import { DataImportResolver } from "./dataImport.resolver";

@Module({
  imports: [DataImportModuleBase],
  controllers: [DataImportController],
  providers: [DataImportService, DataImportResolver],
  exports: [DataImportService],
})
export class DataImportModule {}
