import { Module } from "@nestjs/common";
import { BankGuaranteeModuleBase } from "./base/bankGuarantee.module.base";
import { BankGuaranteeService } from "./bankGuarantee.service";
import { BankGuaranteeController } from "./bankGuarantee.controller";
import { BankGuaranteeResolver } from "./bankGuarantee.resolver";

@Module({
  imports: [BankGuaranteeModuleBase],
  controllers: [BankGuaranteeController],
  providers: [BankGuaranteeService, BankGuaranteeResolver],
  exports: [BankGuaranteeService],
})
export class BankGuaranteeModule {}
