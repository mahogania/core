import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpawnGroupModuleBase } from "./base/spawnGroup.module.base";
import { SpawnGroupService } from "./spawnGroup.service";
import { SpawnGroupController } from "./spawnGroup.controller";
import { SpawnGroupGrpcController } from "./spawnGroup.grpc.controller";
import { SpawnGroupResolver } from "./spawnGroup.resolver";

@Module({
  imports: [SpawnGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpawnGroupController, SpawnGroupGrpcController],
  providers: [SpawnGroupService, SpawnGroupResolver],
  exports: [SpawnGroupService],
})
export class SpawnGroupModule {}
