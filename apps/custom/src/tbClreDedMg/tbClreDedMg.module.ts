import { Module } from "@nestjs/common";
import { TbClreDedMgModuleBase } from "./base/tbClreDedMg.module.base";
import { TbClreDedMgService } from "./tbClreDedMg.service";
import { TbClreDedMgController } from "./tbClreDedMg.controller";
import { TbClreDedMgGrpcController } from "./tbClreDedMg.grpc.controller";
import { TbClreDedMgResolver } from "./tbClreDedMg.resolver";

@Module({
  imports: [TbClreDedMgModuleBase],
  controllers: [TbClreDedMgController, TbClreDedMgGrpcController],
  providers: [TbClreDedMgService, TbClreDedMgResolver],
  exports: [TbClreDedMgService],
})
export class TbClreDedMgModule {}
