import { Module } from "@nestjs/common";
import { TbClreDedPdlsModuleBase } from "./base/tbClreDedPdls.module.base";
import { TbClreDedPdlsService } from "./tbClreDedPdls.service";
import { TbClreDedPdlsController } from "./tbClreDedPdls.controller";
import { TbClreDedPdlsGrpcController } from "./tbClreDedPdls.grpc.controller";
import { TbClreDedPdlsResolver } from "./tbClreDedPdls.resolver";

@Module({
  imports: [TbClreDedPdlsModuleBase],
  controllers: [TbClreDedPdlsController, TbClreDedPdlsGrpcController],
  providers: [TbClreDedPdlsService, TbClreDedPdlsResolver],
  exports: [TbClreDedPdlsService],
})
export class TbClreDedPdlsModule {}
