import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MountDefinitionsModuleBase } from "./base/mountDefinitions.module.base";
import { MountDefinitionsService } from "./mountDefinitions.service";
import { MountDefinitionsController } from "./mountDefinitions.controller";
import { MountDefinitionsGrpcController } from "./mountDefinitions.grpc.controller";
import { MountDefinitionsResolver } from "./mountDefinitions.resolver";

@Module({
  imports: [MountDefinitionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MountDefinitionsController, MountDefinitionsGrpcController],
  providers: [MountDefinitionsService, MountDefinitionsResolver],
  exports: [MountDefinitionsService],
})
export class MountDefinitionsModule {}
