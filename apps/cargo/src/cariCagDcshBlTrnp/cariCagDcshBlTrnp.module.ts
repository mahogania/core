import { Module } from "@nestjs/common";
import { CariCagDcshBlTrnpModuleBase } from "./base/cariCagDcshBlTrnp.module.base";
import { CariCagDcshBlTrnpService } from "./cariCagDcshBlTrnp.service";
import { CariCagDcshBlTrnpController } from "./cariCagDcshBlTrnp.controller";
import { CariCagDcshBlTrnpGrpcController } from "./cariCagDcshBlTrnp.grpc.controller";
import { CariCagDcshBlTrnpResolver } from "./cariCagDcshBlTrnp.resolver";

@Module({
  imports: [CariCagDcshBlTrnpModuleBase],
  controllers: [CariCagDcshBlTrnpController, CariCagDcshBlTrnpGrpcController],
  providers: [CariCagDcshBlTrnpService, CariCagDcshBlTrnpResolver],
  exports: [CariCagDcshBlTrnpService],
})
export class CariCagDcshBlTrnpModule {}
