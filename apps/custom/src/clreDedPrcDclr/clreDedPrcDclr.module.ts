import { Module } from "@nestjs/common";
import { ClreDedPrcDclrModuleBase } from "./base/clreDedPrcDclr.module.base";
import { ClreDedPrcDclrService } from "./clreDedPrcDclr.service";
import { ClreDedPrcDclrController } from "./clreDedPrcDclr.controller";
import { ClreDedPrcDclrGrpcController } from "./clreDedPrcDclr.grpc.controller";
import { ClreDedPrcDclrResolver } from "./clreDedPrcDclr.resolver";

@Module({
  imports: [ClreDedPrcDclrModuleBase],
  controllers: [ClreDedPrcDclrController, ClreDedPrcDclrGrpcController],
  providers: [ClreDedPrcDclrService, ClreDedPrcDclrResolver],
  exports: [ClreDedPrcDclrService],
})
export class ClreDedPrcDclrModule {}
