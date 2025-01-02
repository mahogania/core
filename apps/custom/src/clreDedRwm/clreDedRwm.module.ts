import { Module } from "@nestjs/common";
import { ClreDedRwmModuleBase } from "./base/clreDedRwm.module.base";
import { ClreDedRwmService } from "./clreDedRwm.service";
import { ClreDedRwmController } from "./clreDedRwm.controller";
import { ClreDedRwmGrpcController } from "./clreDedRwm.grpc.controller";
import { ClreDedRwmResolver } from "./clreDedRwm.resolver";

@Module({
  imports: [ClreDedRwmModuleBase],
  controllers: [ClreDedRwmController, ClreDedRwmGrpcController],
  providers: [ClreDedRwmService, ClreDedRwmResolver],
  exports: [ClreDedRwmService],
})
export class ClreDedRwmModule {}
