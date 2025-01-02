import { Module } from "@nestjs/common";
import { CariCagDcshBlCntrModuleBase } from "./base/cariCagDcshBlCntr.module.base";
import { CariCagDcshBlCntrService } from "./cariCagDcshBlCntr.service";
import { CariCagDcshBlCntrController } from "./cariCagDcshBlCntr.controller";
import { CariCagDcshBlCntrGrpcController } from "./cariCagDcshBlCntr.grpc.controller";
import { CariCagDcshBlCntrResolver } from "./cariCagDcshBlCntr.resolver";

@Module({
  imports: [CariCagDcshBlCntrModuleBase],
  controllers: [CariCagDcshBlCntrController, CariCagDcshBlCntrGrpcController],
  providers: [CariCagDcshBlCntrService, CariCagDcshBlCntrResolver],
  exports: [CariCagDcshBlCntrService],
})
export class CariCagDcshBlCntrModule {}
