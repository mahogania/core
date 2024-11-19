import { Module } from "@nestjs/common";
import { ProposalModuleBase } from "./base/proposal.module.base";
import { ProposalService } from "./proposal.service";
import { ProposalController } from "./proposal.controller";
import { ProposalGrpcController } from "./proposal.grpc.controller";
import { ProposalResolver } from "./proposal.resolver";

@Module({
  imports: [ProposalModuleBase],
  controllers: [ProposalController, ProposalGrpcController],
  providers: [ProposalService, ProposalResolver],
  exports: [ProposalService],
})
export class ProposalModule {}
