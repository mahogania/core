import { Module } from "@nestjs/common";
import { BankAccountTypeModuleBase } from "./base/bankAccountType.module.base";
import { BankAccountTypeService } from "./bankAccountType.service";
import { BankAccountTypeController } from "./bankAccountType.controller";
import { BankAccountTypeResolver } from "./bankAccountType.resolver";

@Module({
  imports: [BankAccountTypeModuleBase],
  controllers: [BankAccountTypeController],
  providers: [BankAccountTypeService, BankAccountTypeResolver],
  exports: [BankAccountTypeService],
})
export class BankAccountTypeModule {}
