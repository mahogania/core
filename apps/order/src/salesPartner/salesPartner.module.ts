import { Module } from "@nestjs/common";
import { SalesPartnerModuleBase } from "./base/salesPartner.module.base";
import { SalesPartnerService } from "./salesPartner.service";
import { SalesPartnerController } from "./salesPartner.controller";
import { SalesPartnerResolver } from "./salesPartner.resolver";

@Module({
  imports: [SalesPartnerModuleBase],
  controllers: [SalesPartnerController],
  providers: [SalesPartnerService, SalesPartnerResolver],
  exports: [SalesPartnerService],
})
export class SalesPartnerModule {}
