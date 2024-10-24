import { Module } from "@nestjs/common";
import { AgentModuleBase } from "./base/agent.module.base";
import { AgentService } from "./agent.service";
import { AgentController } from "./agent.controller";
import { AgentGrpcController } from "./agent.grpc.controller";
import { AgentResolver } from "./agent.resolver";

@Module({
  imports: [AgentModuleBase],
  controllers: [AgentController, AgentGrpcController],
  providers: [AgentService, AgentResolver],
  exports: [AgentService],
})
export class AgentModule {}
