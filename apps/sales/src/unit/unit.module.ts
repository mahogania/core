import { Module } from "@nestjs/common";
import { UnitModuleBase } from "./base/unit.module.base";
import { UnitService } from "./unit.service";
import { UnitController } from "./unit.controller";
import { UnitGrpcController } from "./unit.grpc.controller";
import { UnitResolver } from "./unit.resolver";

@Module({
  imports: [UnitModuleBase],
  controllers: [UnitController, UnitGrpcController],
  providers: [UnitService, UnitResolver],
  exports: [UnitService],
})
export class UnitModule {}
