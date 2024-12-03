import { Module } from "@nestjs/common";
import { TbClreDedVhclModuleBase } from "./base/tbClreDedVhcl.module.base";
import { TbClreDedVhclService } from "./tbClreDedVhcl.service";
import { TbClreDedVhclController } from "./tbClreDedVhcl.controller";
import { TbClreDedVhclGrpcController } from "./tbClreDedVhcl.grpc.controller";
import { TbClreDedVhclResolver } from "./tbClreDedVhcl.resolver";

@Module({
  imports: [TbClreDedVhclModuleBase],
  controllers: [TbClreDedVhclController, TbClreDedVhclGrpcController],
  providers: [TbClreDedVhclService, TbClreDedVhclResolver],
  exports: [TbClreDedVhclService],
})
export class TbClreDedVhclModule {}
