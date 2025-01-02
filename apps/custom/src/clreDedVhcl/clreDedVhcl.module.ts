import { Module } from "@nestjs/common";
import { ClreDedVhclModuleBase } from "./base/clreDedVhcl.module.base";
import { ClreDedVhclService } from "./clreDedVhcl.service";
import { ClreDedVhclController } from "./clreDedVhcl.controller";
import { ClreDedVhclGrpcController } from "./clreDedVhcl.grpc.controller";
import { ClreDedVhclResolver } from "./clreDedVhcl.resolver";

@Module({
  imports: [ClreDedVhclModuleBase],
  controllers: [ClreDedVhclController, ClreDedVhclGrpcController],
  providers: [ClreDedVhclService, ClreDedVhclResolver],
  exports: [ClreDedVhclService],
})
export class ClreDedVhclModule {}
