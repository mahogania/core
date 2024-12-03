import { Module } from "@nestjs/common";
import { CargoDeclarationContainerModuleBase } from "./base/cargoDeclarationContainer.module.base";
import { CargoDeclarationContainerService } from "./cargoDeclarationContainer.service";
import { CargoDeclarationContainerController } from "./cargoDeclarationContainer.controller";
import { CargoDeclarationContainerGrpcController } from "./cargoDeclarationContainer.grpc.controller";
import { CargoDeclarationContainerResolver } from "./cargoDeclarationContainer.resolver";

@Module({
  imports: [CargoDeclarationContainerModuleBase],
  controllers: [
    CargoDeclarationContainerController,
    CargoDeclarationContainerGrpcController,
  ],
  providers: [
    CargoDeclarationContainerService,
    CargoDeclarationContainerResolver,
  ],
  exports: [CargoDeclarationContainerService],
})
export class CargoDeclarationContainerModule {}
