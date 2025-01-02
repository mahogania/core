import { Module } from "@nestjs/common";
import { ClreDedVlutPdlModuleBase } from "./base/clreDedVlutPdl.module.base";
import { ClreDedVlutPdlService } from "./clreDedVlutPdl.service";
import { ClreDedVlutPdlController } from "./clreDedVlutPdl.controller";
import { ClreDedVlutPdlGrpcController } from "./clreDedVlutPdl.grpc.controller";
import { ClreDedVlutPdlResolver } from "./clreDedVlutPdl.resolver";

@Module({
  imports: [ClreDedVlutPdlModuleBase],
  controllers: [ClreDedVlutPdlController, ClreDedVlutPdlGrpcController],
  providers: [ClreDedVlutPdlService, ClreDedVlutPdlResolver],
  exports: [ClreDedVlutPdlService],
})
export class ClreDedVlutPdlModule {}
