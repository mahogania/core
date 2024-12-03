import { Module } from "@nestjs/common";
import { TbClreDedPrcDclrPdlsModuleBase } from "./base/tbClreDedPrcDclrPdls.module.base";
import { TbClreDedPrcDclrPdlsService } from "./tbClreDedPrcDclrPdls.service";
import { TbClreDedPrcDclrPdlsController } from "./tbClreDedPrcDclrPdls.controller";
import { TbClreDedPrcDclrPdlsGrpcController } from "./tbClreDedPrcDclrPdls.grpc.controller";
import { TbClreDedPrcDclrPdlsResolver } from "./tbClreDedPrcDclrPdls.resolver";

@Module({
  imports: [TbClreDedPrcDclrPdlsModuleBase],
  controllers: [
    TbClreDedPrcDclrPdlsController,
    TbClreDedPrcDclrPdlsGrpcController,
  ],
  providers: [TbClreDedPrcDclrPdlsService, TbClreDedPrcDclrPdlsResolver],
  exports: [TbClreDedPrcDclrPdlsService],
})
export class TbClreDedPrcDclrPdlsModule {}
