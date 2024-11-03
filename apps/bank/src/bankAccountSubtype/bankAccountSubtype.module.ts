import { Module } from "@nestjs/common";
import { BankAccountSubtypeModuleBase } from "./base/bankAccountSubtype.module.base";
import { BankAccountSubtypeService } from "./bankAccountSubtype.service";
import { BankAccountSubtypeController } from "./bankAccountSubtype.controller";
import { BankAccountSubtypeResolver } from "./bankAccountSubtype.resolver";

@Module({
  imports: [BankAccountSubtypeModuleBase],
  controllers: [BankAccountSubtypeController],
  providers: [BankAccountSubtypeService, BankAccountSubtypeResolver],
  exports: [BankAccountSubtypeService],
})
export class BankAccountSubtypeModule {}
