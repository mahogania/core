import { Module } from "@nestjs/common";
import { TbClreDedVlutComnModuleBase } from "./base/tbClreDedVlutComn.module.base";
import { TbClreDedVlutComnService } from "./tbClreDedVlutComn.service";
import { TbClreDedVlutComnController } from "./tbClreDedVlutComn.controller";
import { TbClreDedVlutComnGrpcController } from "./tbClreDedVlutComn.grpc.controller";
import { TbClreDedVlutComnResolver } from "./tbClreDedVlutComn.resolver";

@Module({
  imports: [TbClreDedVlutComnModuleBase],
  controllers: [TbClreDedVlutComnController, TbClreDedVlutComnGrpcController],
  providers: [TbClreDedVlutComnService, TbClreDedVlutComnResolver],
  exports: [TbClreDedVlutComnService],
})
export class TbClreDedVlutComnModule {}
