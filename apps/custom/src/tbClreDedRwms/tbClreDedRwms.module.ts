import { Module } from "@nestjs/common";
import { TbClreDedRwmsModuleBase } from "./base/tbClreDedRwms.module.base";
import { TbClreDedRwmsService } from "./tbClreDedRwms.service";
import { TbClreDedRwmsController } from "./tbClreDedRwms.controller";
import { TbClreDedRwmsGrpcController } from "./tbClreDedRwms.grpc.controller";
import { TbClreDedRwmsResolver } from "./tbClreDedRwms.resolver";

@Module({
  imports: [TbClreDedRwmsModuleBase],
  controllers: [TbClreDedRwmsController, TbClreDedRwmsGrpcController],
  providers: [TbClreDedRwmsService, TbClreDedRwmsResolver],
  exports: [TbClreDedRwmsService],
})
export class TbClreDedRwmsModule {}
