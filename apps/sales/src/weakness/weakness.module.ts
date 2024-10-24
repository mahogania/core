import { Module } from "@nestjs/common";
import { WeaknessModuleBase } from "./base/weakness.module.base";
import { WeaknessService } from "./weakness.service";
import { WeaknessController } from "./weakness.controller";
import { WeaknessGrpcController } from "./weakness.grpc.controller";
import { WeaknessResolver } from "./weakness.resolver";

@Module({
  imports: [WeaknessModuleBase],
  controllers: [WeaknessController, WeaknessGrpcController],
  providers: [WeaknessService, WeaknessResolver],
  exports: [WeaknessService],
})
export class WeaknessModule {}
