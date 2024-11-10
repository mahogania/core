import { Module } from "@nestjs/common";
import { ThreatModuleBase } from "./base/threat.module.base";
import { ThreatService } from "./threat.service";
import { ThreatController } from "./threat.controller";
import { ThreatGrpcController } from "./threat.grpc.controller";
import { ThreatResolver } from "./threat.resolver";

@Module({
  imports: [ThreatModuleBase],
  controllers: [ThreatController, ThreatGrpcController],
  providers: [ThreatService, ThreatResolver],
  exports: [ThreatService],
})
export class ThreatModule {}
