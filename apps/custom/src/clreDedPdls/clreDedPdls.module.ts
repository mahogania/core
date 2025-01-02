import { Module } from "@nestjs/common";
import { ClreDedPdlsModuleBase } from "./base/clreDedPdls.module.base";
import { ClreDedPdlsService } from "./clreDedPdls.service";
import { ClreDedPdlsController } from "./clreDedPdls.controller";
import { ClreDedPdlsGrpcController } from "./clreDedPdls.grpc.controller";
import { ClreDedPdlsResolver } from "./clreDedPdls.resolver";

@Module({
  imports: [ClreDedPdlsModuleBase],
  controllers: [ClreDedPdlsController, ClreDedPdlsGrpcController],
  providers: [ClreDedPdlsService, ClreDedPdlsResolver],
  exports: [ClreDedPdlsService],
})
export class ClreDedPdlsModule {}
