import { Module } from "@nestjs/common";
import { ClreDedCoModuleBase } from "./base/clreDedCo.module.base";
import { ClreDedCoService } from "./clreDedCo.service";
import { ClreDedCoController } from "./clreDedCo.controller";
import { ClreDedCoGrpcController } from "./clreDedCo.grpc.controller";
import { ClreDedCoResolver } from "./clreDedCo.resolver";

@Module({
  imports: [ClreDedCoModuleBase],
  controllers: [ClreDedCoController, ClreDedCoGrpcController],
  providers: [ClreDedCoService, ClreDedCoResolver],
  exports: [ClreDedCoService],
})
export class ClreDedCoModule {}
