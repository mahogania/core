import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CurrencyModuleBase } from "./base/currency.module.base";
import { CurrencyService } from "./currency.service";
import { CurrencyController } from "./currency.controller";
import { CurrencyGrpcController } from "./currency.grpc.controller";
import { CurrencyResolver } from "./currency.resolver";

@Module({
  imports: [CurrencyModuleBase, forwardRef(() => AuthModule)],
  controllers: [CurrencyController, CurrencyGrpcController],
  providers: [CurrencyService, CurrencyResolver],
  exports: [CurrencyService],
})
export class CurrencyModule {}
