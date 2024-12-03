import { Module } from "@nestjs/common";
import { TbClreDedPrcDclrModuleBase } from "./base/tbClreDedPrcDclr.module.base";
import { TbClreDedPrcDclrService } from "./tbClreDedPrcDclr.service";
import { TbClreDedPrcDclrController } from "./tbClreDedPrcDclr.controller";
import { TbClreDedPrcDclrGrpcController } from "./tbClreDedPrcDclr.grpc.controller";
import { TbClreDedPrcDclrResolver } from "./tbClreDedPrcDclr.resolver";

@Module({
  imports: [TbClreDedPrcDclrModuleBase],
  controllers: [TbClreDedPrcDclrController, TbClreDedPrcDclrGrpcController],
  providers: [TbClreDedPrcDclrService, TbClreDedPrcDclrResolver],
  exports: [TbClreDedPrcDclrService],
})
export class TbClreDedPrcDclrModule {}
