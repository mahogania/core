import { Module } from "@nestjs/common";
import { TbClreDedMdlStszModuleBase } from "./base/tbClreDedMdlStsz.module.base";
import { TbClreDedMdlStszService } from "./tbClreDedMdlStsz.service";
import { TbClreDedMdlStszController } from "./tbClreDedMdlStsz.controller";
import { TbClreDedMdlStszGrpcController } from "./tbClreDedMdlStsz.grpc.controller";
import { TbClreDedMdlStszResolver } from "./tbClreDedMdlStsz.resolver";

@Module({
  imports: [TbClreDedMdlStszModuleBase],
  controllers: [TbClreDedMdlStszController, TbClreDedMdlStszGrpcController],
  providers: [TbClreDedMdlStszService, TbClreDedMdlStszResolver],
  exports: [TbClreDedMdlStszService],
})
export class TbClreDedMdlStszModule {}
