import { Module } from "@nestjs/common";
import { BankStatementImportModuleBase } from "./base/bankStatementImport.module.base";
import { BankStatementImportService } from "./bankStatementImport.service";
import { BankStatementImportController } from "./bankStatementImport.controller";
import { BankStatementImportResolver } from "./bankStatementImport.resolver";

@Module({
  imports: [BankStatementImportModuleBase],
  controllers: [BankStatementImportController],
  providers: [BankStatementImportService, BankStatementImportResolver],
  exports: [BankStatementImportService],
})
export class BankStatementImportModule {}
