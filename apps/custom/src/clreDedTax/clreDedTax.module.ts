import { Module } from "@nestjs/common";
import { ClreDedTaxModuleBase } from "./base/clreDedTax.module.base";
import { ClreDedTaxService } from "./clreDedTax.service";
import { ClreDedTaxController } from "./clreDedTax.controller";
import { ClreDedTaxGrpcController } from "./clreDedTax.grpc.controller";
import { ClreDedTaxResolver } from "./clreDedTax.resolver";

@Module({
  imports: [ClreDedTaxModuleBase],
  controllers: [ClreDedTaxController, ClreDedTaxGrpcController],
  providers: [ClreDedTaxService, ClreDedTaxResolver],
  exports: [ClreDedTaxService],
})
export class ClreDedTaxModule {}
