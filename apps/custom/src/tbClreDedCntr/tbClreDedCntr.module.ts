import { Module } from "@nestjs/common";
import { TbClreDedCntrModuleBase } from "./base/tbClreDedCntr.module.base";
import { TbClreDedCntrService } from "./tbClreDedCntr.service";
import { TbClreDedCntrController } from "./tbClreDedCntr.controller";
import { TbClreDedCntrGrpcController } from "./tbClreDedCntr.grpc.controller";
import { TbClreDedCntrResolver } from "./tbClreDedCntr.resolver";

@Module({
  imports: [TbClreDedCntrModuleBase],
  controllers: [TbClreDedCntrController, TbClreDedCntrGrpcController],
  providers: [TbClreDedCntrService, TbClreDedCntrResolver],
  exports: [TbClreDedCntrService],
})
export class TbClreDedCntrModule {}
