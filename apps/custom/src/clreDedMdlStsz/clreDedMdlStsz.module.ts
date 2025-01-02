import { Module } from "@nestjs/common";
import { ClreDedMdlStszModuleBase } from "./base/clreDedMdlStsz.module.base";
import { ClreDedMdlStszService } from "./clreDedMdlStsz.service";
import { ClreDedMdlStszController } from "./clreDedMdlStsz.controller";
import { ClreDedMdlStszGrpcController } from "./clreDedMdlStsz.grpc.controller";
import { ClreDedMdlStszResolver } from "./clreDedMdlStsz.resolver";

@Module({
  imports: [ClreDedMdlStszModuleBase],
  controllers: [ClreDedMdlStszController, ClreDedMdlStszGrpcController],
  providers: [ClreDedMdlStszService, ClreDedMdlStszResolver],
  exports: [ClreDedMdlStszService],
})
export class ClreDedMdlStszModule {}
