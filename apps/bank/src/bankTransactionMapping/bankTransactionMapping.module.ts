import { Module } from "@nestjs/common";
import { BankTransactionMappingModuleBase } from "./base/bankTransactionMapping.module.base";
import { BankTransactionMappingService } from "./bankTransactionMapping.service";
import { BankTransactionMappingController } from "./bankTransactionMapping.controller";
import { BankTransactionMappingResolver } from "./bankTransactionMapping.resolver";

@Module({
  imports: [BankTransactionMappingModuleBase],
  controllers: [BankTransactionMappingController],
  providers: [BankTransactionMappingService, BankTransactionMappingResolver],
  exports: [BankTransactionMappingService],
})
export class BankTransactionMappingModule {}
