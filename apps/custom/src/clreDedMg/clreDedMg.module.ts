import { Module } from "@nestjs/common";
import { ClreDedMgModuleBase } from "./base/clreDedMg.module.base";
import { ClreDedMgService } from "./clreDedMg.service";
import { ClreDedMgController } from "./clreDedMg.controller";
import { ClreDedMgGrpcController } from "./clreDedMg.grpc.controller";
import { ClreDedMgResolver } from "./clreDedMg.resolver";

@Module({
  imports: [ClreDedMgModuleBase],
  controllers: [ClreDedMgController, ClreDedMgGrpcController],
  providers: [ClreDedMgService, ClreDedMgResolver],
  exports: [ClreDedMgService],
})
export class ClreDedMgModule {}
