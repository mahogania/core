import { Module } from "@nestjs/common";
import { PriceModuleBase } from "./base/price.module.base";
import { PriceService } from "./price.service";
import { PriceController } from "./price.controller";
import { PriceGrpcController } from "./price.grpc.controller";
import { PriceResolver } from "./price.resolver";

@Module({
  imports: [PriceModuleBase],
  controllers: [PriceController, PriceGrpcController],
  providers: [PriceService, PriceResolver],
  exports: [PriceService],
})
export class PriceModule {}
