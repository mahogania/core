import { Module } from "@nestjs/common";
import { ClreDedPrcDclrPdlModuleBase } from "./base/clreDedPrcDclrPdl.module.base";
import { ClreDedPrcDclrPdlService } from "./clreDedPrcDclrPdl.service";
import { ClreDedPrcDclrPdlController } from "./clreDedPrcDclrPdl.controller";
import { ClreDedPrcDclrPdlGrpcController } from "./clreDedPrcDclrPdl.grpc.controller";
import { ClreDedPrcDclrPdlResolver } from "./clreDedPrcDclrPdl.resolver";

@Module({
  imports: [ClreDedPrcDclrPdlModuleBase],
  controllers: [ClreDedPrcDclrPdlController, ClreDedPrcDclrPdlGrpcController],
  providers: [ClreDedPrcDclrPdlService, ClreDedPrcDclrPdlResolver],
  exports: [ClreDedPrcDclrPdlService],
})
export class ClreDedPrcDclrPdlModule {}
