import { Module } from "@nestjs/common";
import { LeadModuleBase } from "./base/lead.module.base";
import { LeadService } from "./lead.service";
import { LeadController } from "./lead.controller";
import { LeadGrpcController } from "./lead.grpc.controller";
import { LeadResolver } from "./lead.resolver";

@Module({
  imports: [LeadModuleBase],
  controllers: [LeadController, LeadGrpcController],
  providers: [LeadService, LeadResolver],
  exports: [LeadService],
})
export class LeadModule {}
