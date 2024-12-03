import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstanceSpawnGroupsModuleBase } from "./base/instanceSpawnGroups.module.base";
import { InstanceSpawnGroupsService } from "./instanceSpawnGroups.service";
import { InstanceSpawnGroupsController } from "./instanceSpawnGroups.controller";
import { InstanceSpawnGroupsGrpcController } from "./instanceSpawnGroups.grpc.controller";
import { InstanceSpawnGroupsResolver } from "./instanceSpawnGroups.resolver";

@Module({
  imports: [InstanceSpawnGroupsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    InstanceSpawnGroupsController,
    InstanceSpawnGroupsGrpcController,
  ],
  providers: [InstanceSpawnGroupsService, InstanceSpawnGroupsResolver],
  exports: [InstanceSpawnGroupsService],
})
export class InstanceSpawnGroupsModule {}
