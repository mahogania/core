import { Module } from "@nestjs/common";
import { ClreDedComnModuleBase } from "./base/clreDedComn.module.base";
import { ClreDedComnService } from "./clreDedComn.service";
import { ClreDedComnController } from "./clreDedComn.controller";
import { ClreDedComnGrpcController } from "./clreDedComn.grpc.controller";
import { ClreDedComnResolver } from "./clreDedComn.resolver";

@Module({
  imports: [ClreDedComnModuleBase],
  controllers: [ClreDedComnController, ClreDedComnGrpcController],
  providers: [ClreDedComnService, ClreDedComnResolver],
  exports: [ClreDedComnService],
})
export class ClreDedComnModule {}
