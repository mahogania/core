import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpawnGroupTemplateModuleBase } from "./base/spawnGroupTemplate.module.base";
import { SpawnGroupTemplateService } from "./spawnGroupTemplate.service";
import { SpawnGroupTemplateController } from "./spawnGroupTemplate.controller";
import { SpawnGroupTemplateGrpcController } from "./spawnGroupTemplate.grpc.controller";
import { SpawnGroupTemplateResolver } from "./spawnGroupTemplate.resolver";

@Module({
  imports: [SpawnGroupTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpawnGroupTemplateController, SpawnGroupTemplateGrpcController],
  providers: [SpawnGroupTemplateService, SpawnGroupTemplateResolver],
  exports: [SpawnGroupTemplateService],
})
export class SpawnGroupTemplateModule {}
