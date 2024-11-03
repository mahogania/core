import { Module } from "@nestjs/common";
import { CustomerCreditLimitModuleBase } from "./base/customerCreditLimit.module.base";
import { CustomerCreditLimitService } from "./customerCreditLimit.service";
import { CustomerCreditLimitController } from "./customerCreditLimit.controller";
import { CustomerCreditLimitResolver } from "./customerCreditLimit.resolver";

@Module({
  imports: [CustomerCreditLimitModuleBase],
  controllers: [CustomerCreditLimitController],
  providers: [CustomerCreditLimitService, CustomerCreditLimitResolver],
  exports: [CustomerCreditLimitService],
})
export class CustomerCreditLimitModule {}
