import { Module } from "@nestjs/common";
import { CargoDeclarationVehicleModuleBase } from "./base/cargoDeclarationVehicle.module.base";
import { CargoDeclarationVehicleService } from "./cargoDeclarationVehicle.service";
import { CargoDeclarationVehicleController } from "./cargoDeclarationVehicle.controller";
import { CargoDeclarationVehicleGrpcController } from "./cargoDeclarationVehicle.grpc.controller";
import { CargoDeclarationVehicleResolver } from "./cargoDeclarationVehicle.resolver";

@Module({
  imports: [CargoDeclarationVehicleModuleBase],
  controllers: [
    CargoDeclarationVehicleController,
    CargoDeclarationVehicleGrpcController,
  ],
  providers: [CargoDeclarationVehicleService, CargoDeclarationVehicleResolver],
  exports: [CargoDeclarationVehicleService],
})
export class CargoDeclarationVehicleModule {}
