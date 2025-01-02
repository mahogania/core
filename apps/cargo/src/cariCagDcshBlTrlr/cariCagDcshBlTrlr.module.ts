import { Module } from "@nestjs/common";
import { CariCagDcshBlTrlrModuleBase } from "./base/cariCagDcshBlTrlr.module.base";
import { CariCagDcshBlTrlrService } from "./cariCagDcshBlTrlr.service";
import { CariCagDcshBlTrlrController } from "./cariCagDcshBlTrlr.controller";
import { CariCagDcshBlTrlrGrpcController } from "./cariCagDcshBlTrlr.grpc.controller";
import { CariCagDcshBlTrlrResolver } from "./cariCagDcshBlTrlr.resolver";

@Module({
  imports: [CariCagDcshBlTrlrModuleBase],
  controllers: [CariCagDcshBlTrlrController, CariCagDcshBlTrlrGrpcController],
  providers: [CariCagDcshBlTrlrService, CariCagDcshBlTrlrResolver],
  exports: [CariCagDcshBlTrlrService],
})
export class CariCagDcshBlTrlrModule {}
