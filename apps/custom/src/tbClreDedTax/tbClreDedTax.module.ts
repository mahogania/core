import { Module } from "@nestjs/common";
import { TbClreDedTaxModuleBase } from "./base/tbClreDedTax.module.base";
import { TbClreDedTaxService } from "./tbClreDedTax.service";
import { TbClreDedTaxController } from "./tbClreDedTax.controller";
import { TbClreDedTaxGrpcController } from "./tbClreDedTax.grpc.controller";
import { TbClreDedTaxResolver } from "./tbClreDedTax.resolver";

@Module({
  imports: [TbClreDedTaxModuleBase],
  controllers: [TbClreDedTaxController, TbClreDedTaxGrpcController],
  providers: [TbClreDedTaxService, TbClreDedTaxResolver],
  exports: [TbClreDedTaxService],
})
export class TbClreDedTaxModule {}
