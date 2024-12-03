import { Module } from "@nestjs/common";
import { TbClreDedRimexPrngPdlsModuleBase } from "./base/tbClreDedRimexPrngPdls.module.base";
import { TbClreDedRimexPrngPdlsService } from "./tbClreDedRimexPrngPdls.service";
import { TbClreDedRimexPrngPdlsController } from "./tbClreDedRimexPrngPdls.controller";
import { TbClreDedRimexPrngPdlsGrpcController } from "./tbClreDedRimexPrngPdls.grpc.controller";
import { TbClreDedRimexPrngPdlsResolver } from "./tbClreDedRimexPrngPdls.resolver";

@Module({
  imports: [TbClreDedRimexPrngPdlsModuleBase],
  controllers: [
    TbClreDedRimexPrngPdlsController,
    TbClreDedRimexPrngPdlsGrpcController,
  ],
  providers: [TbClreDedRimexPrngPdlsService, TbClreDedRimexPrngPdlsResolver],
  exports: [TbClreDedRimexPrngPdlsService],
})
export class TbClreDedRimexPrngPdlsModule {}
