import { Module } from "@nestjs/common";
import { WorldModuleBase } from "./base/world.module.base";
import { WorldService } from "./world.service";
import { WorldController } from "./world.controller";
import { WorldGrpcController } from "./world.grpc.controller";
import { WorldResolver } from "./world.resolver";

@Module({
  imports: [WorldModuleBase],
  controllers: [WorldController, WorldGrpcController],
  providers: [WorldService, WorldResolver],
  exports: [WorldService],
})
export class WorldModule {}
