import { Module } from "@nestjs/common";
import { ClreDedRimexPrngPdlModuleBase } from "./base/clreDedRimexPrngPdl.module.base";
import { ClreDedRimexPrngPdlService } from "./clreDedRimexPrngPdl.service";
import { ClreDedRimexPrngPdlController } from "./clreDedRimexPrngPdl.controller";
import { ClreDedRimexPrngPdlGrpcController } from "./clreDedRimexPrngPdl.grpc.controller";
import { ClreDedRimexPrngPdlResolver } from "./clreDedRimexPrngPdl.resolver";

@Module({
  imports: [ClreDedRimexPrngPdlModuleBase],
  controllers: [
    ClreDedRimexPrngPdlController,
    ClreDedRimexPrngPdlGrpcController,
  ],
  providers: [ClreDedRimexPrngPdlService, ClreDedRimexPrngPdlResolver],
  exports: [ClreDedRimexPrngPdlService],
})
export class ClreDedRimexPrngPdlModule {}
