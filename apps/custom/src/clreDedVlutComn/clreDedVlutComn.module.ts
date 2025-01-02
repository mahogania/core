import { Module } from "@nestjs/common";
import { ClreDedVlutComnModuleBase } from "./base/clreDedVlutComn.module.base";
import { ClreDedVlutComnService } from "./clreDedVlutComn.service";
import { ClreDedVlutComnController } from "./clreDedVlutComn.controller";
import { ClreDedVlutComnGrpcController } from "./clreDedVlutComn.grpc.controller";
import { ClreDedVlutComnResolver } from "./clreDedVlutComn.resolver";

@Module({
  imports: [ClreDedVlutComnModuleBase],
  controllers: [ClreDedVlutComnController, ClreDedVlutComnGrpcController],
  providers: [ClreDedVlutComnService, ClreDedVlutComnResolver],
  exports: [ClreDedVlutComnService],
})
export class ClreDedVlutComnModule {}
