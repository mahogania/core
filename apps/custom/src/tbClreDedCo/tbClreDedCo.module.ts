import { Module } from "@nestjs/common";
import { TbClreDedCoModuleBase } from "./base/tbClreDedCo.module.base";
import { TbClreDedCoService } from "./tbClreDedCo.service";
import { TbClreDedCoController } from "./tbClreDedCo.controller";
import { TbClreDedCoGrpcController } from "./tbClreDedCo.grpc.controller";
import { TbClreDedCoResolver } from "./tbClreDedCo.resolver";

@Module({
  imports: [TbClreDedCoModuleBase],
  controllers: [TbClreDedCoController, TbClreDedCoGrpcController],
  providers: [TbClreDedCoService, TbClreDedCoResolver],
  exports: [TbClreDedCoService],
})
export class TbClreDedCoModule {}
