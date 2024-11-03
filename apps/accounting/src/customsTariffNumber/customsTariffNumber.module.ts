import { Module } from "@nestjs/common";
import { CustomsTariffNumberModuleBase } from "./base/customsTariffNumber.module.base";
import { CustomsTariffNumberService } from "./customsTariffNumber.service";
import { CustomsTariffNumberController } from "./customsTariffNumber.controller";
import { CustomsTariffNumberResolver } from "./customsTariffNumber.resolver";

@Module({
  imports: [CustomsTariffNumberModuleBase],
  controllers: [CustomsTariffNumberController],
  providers: [CustomsTariffNumberService, CustomsTariffNumberResolver],
  exports: [CustomsTariffNumberService],
})
export class CustomsTariffNumberModule {}
