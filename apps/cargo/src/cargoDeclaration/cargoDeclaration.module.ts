import { Module } from "@nestjs/common";
import { CargoDeclarationModuleBase } from "./base/cargoDeclaration.module.base";
import { CargoDeclarationService } from "./cargoDeclaration.service";
import { CargoDeclarationController } from "./cargoDeclaration.controller";
import { CargoDeclarationGrpcController } from "./cargoDeclaration.grpc.controller";
import { CargoDeclarationResolver } from "./cargoDeclaration.resolver";

@Module({
  imports: [CargoDeclarationModuleBase],
  controllers: [CargoDeclarationController, CargoDeclarationGrpcController],
  providers: [CargoDeclarationService, CargoDeclarationResolver],
  exports: [CargoDeclarationService],
})
export class CargoDeclarationModule {}
