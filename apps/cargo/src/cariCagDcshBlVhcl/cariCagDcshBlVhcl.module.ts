import { Module } from "@nestjs/common";
import { CariCagDcshBlVhclModuleBase } from "./base/cariCagDcshBlVhcl.module.base";
import { CariCagDcshBlVhclService } from "./cariCagDcshBlVhcl.service";
import { CariCagDcshBlVhclController } from "./cariCagDcshBlVhcl.controller";
import { CariCagDcshBlVhclGrpcController } from "./cariCagDcshBlVhcl.grpc.controller";
import { CariCagDcshBlVhclResolver } from "./cariCagDcshBlVhcl.resolver";

@Module({
  imports: [CariCagDcshBlVhclModuleBase],
  controllers: [CariCagDcshBlVhclController, CariCagDcshBlVhclGrpcController],
  providers: [CariCagDcshBlVhclService, CariCagDcshBlVhclResolver],
  exports: [CariCagDcshBlVhclService],
})
export class CariCagDcshBlVhclModule {}
