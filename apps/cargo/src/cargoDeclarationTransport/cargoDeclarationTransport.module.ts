import { Module } from "@nestjs/common";
import { CargoDeclarationTransportModuleBase } from "./base/cargoDeclarationTransport.module.base";
import { CargoDeclarationTransportService } from "./cargoDeclarationTransport.service";
import { CargoDeclarationTransportController } from "./cargoDeclarationTransport.controller";
import { CargoDeclarationTransportGrpcController } from "./cargoDeclarationTransport.grpc.controller";
import { CargoDeclarationTransportResolver } from "./cargoDeclarationTransport.resolver";

@Module({
  imports: [CargoDeclarationTransportModuleBase],
  controllers: [
    CargoDeclarationTransportController,
    CargoDeclarationTransportGrpcController,
  ],
  providers: [
    CargoDeclarationTransportService,
    CargoDeclarationTransportResolver,
  ],
  exports: [CargoDeclarationTransportService],
})
export class CargoDeclarationTransportModule {}
