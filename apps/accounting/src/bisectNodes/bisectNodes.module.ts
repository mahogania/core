import { Module } from "@nestjs/common";
import { BisectNodesModuleBase } from "./base/bisectNodes.module.base";
import { BisectNodesService } from "./bisectNodes.service";
import { BisectNodesController } from "./bisectNodes.controller";
import { BisectNodesResolver } from "./bisectNodes.resolver";

@Module({
  imports: [BisectNodesModuleBase],
  controllers: [BisectNodesController],
  providers: [BisectNodesService, BisectNodesResolver],
  exports: [BisectNodesService],
})
export class BisectNodesModule {}
