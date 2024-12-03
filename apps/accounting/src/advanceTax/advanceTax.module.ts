import { Module } from "@nestjs/common";
import { AdvanceTaxModuleBase } from "./base/advanceTax.module.base";
import { AdvanceTaxService } from "./advanceTax.service";
import { AdvanceTaxController } from "./advanceTax.controller";
import { AdvanceTaxResolver } from "./advanceTax.resolver";

@Module({
  imports: [AdvanceTaxModuleBase],
  controllers: [AdvanceTaxController],
  providers: [AdvanceTaxService, AdvanceTaxResolver],
  exports: [AdvanceTaxService],
})
export class AdvanceTaxModule {}
