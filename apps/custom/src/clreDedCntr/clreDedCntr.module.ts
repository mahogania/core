import { Module } from "@nestjs/common";
import { ClreDedCntrModuleBase } from "./base/clreDedCntr.module.base";
import { ClreDedCntrService } from "./clreDedCntr.service";
import { ClreDedCntrController } from "./clreDedCntr.controller";
import { ClreDedCntrGrpcController } from "./clreDedCntr.grpc.controller";
import { ClreDedCntrResolver } from "./clreDedCntr.resolver";

@Module({
  imports: [ClreDedCntrModuleBase],
  controllers: [ClreDedCntrController, ClreDedCntrGrpcController],
  providers: [ClreDedCntrService, ClreDedCntrResolver],
  exports: [ClreDedCntrService],
})
export class ClreDedCntrModule {}
