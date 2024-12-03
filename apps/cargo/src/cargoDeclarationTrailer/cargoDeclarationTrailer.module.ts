import { Module } from "@nestjs/common";
import { CargoDeclarationTrailerModuleBase } from "./base/cargoDeclarationTrailer.module.base";
import { CargoDeclarationTrailerService } from "./cargoDeclarationTrailer.service";
import { CargoDeclarationTrailerController } from "./cargoDeclarationTrailer.controller";
import { CargoDeclarationTrailerGrpcController } from "./cargoDeclarationTrailer.grpc.controller";
import { CargoDeclarationTrailerResolver } from "./cargoDeclarationTrailer.resolver";

@Module({
  imports: [CargoDeclarationTrailerModuleBase],
  controllers: [
    CargoDeclarationTrailerController,
    CargoDeclarationTrailerGrpcController,
  ],
  providers: [CargoDeclarationTrailerService, CargoDeclarationTrailerResolver],
  exports: [CargoDeclarationTrailerService],
})
export class CargoDeclarationTrailerModule {}
