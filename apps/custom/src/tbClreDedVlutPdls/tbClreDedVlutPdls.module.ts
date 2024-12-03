import { Module } from "@nestjs/common";
import { TbClreDedVlutPdlsModuleBase } from "./base/tbClreDedVlutPdls.module.base";
import { TbClreDedVlutPdlsService } from "./tbClreDedVlutPdls.service";
import { TbClreDedVlutPdlsController } from "./tbClreDedVlutPdls.controller";
import { TbClreDedVlutPdlsGrpcController } from "./tbClreDedVlutPdls.grpc.controller";
import { TbClreDedVlutPdlsResolver } from "./tbClreDedVlutPdls.resolver";

@Module({
  imports: [TbClreDedVlutPdlsModuleBase],
  controllers: [TbClreDedVlutPdlsController, TbClreDedVlutPdlsGrpcController],
  providers: [TbClreDedVlutPdlsService, TbClreDedVlutPdlsResolver],
  exports: [TbClreDedVlutPdlsService],
})
export class TbClreDedVlutPdlsModule {}
