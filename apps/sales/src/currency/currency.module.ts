import { Module } from "@nestjs/common";
import { CurrencyModuleBase } from "./base/currency.module.base";
import { CurrencyService } from "./currency.service";
import { CurrencyController } from "./currency.controller";
import { CurrencyGrpcController } from "./currency.grpc.controller";
import { CurrencyResolver } from "./currency.resolver";

@Module({
  imports: [CurrencyModuleBase],
  controllers: [CurrencyController, CurrencyGrpcController],
  providers: [CurrencyService, CurrencyResolver],
  exports: [CurrencyService],
})
export class CurrencyModule {}
