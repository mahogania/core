import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LinkedRespawnModuleBase } from "./base/linkedRespawn.module.base";
import { LinkedRespawnService } from "./linkedRespawn.service";
import { LinkedRespawnController } from "./linkedRespawn.controller";
import { LinkedRespawnGrpcController } from "./linkedRespawn.grpc.controller";
import { LinkedRespawnResolver } from "./linkedRespawn.resolver";

@Module({
  imports: [LinkedRespawnModuleBase, forwardRef(() => AuthModule)],
  controllers: [LinkedRespawnController, LinkedRespawnGrpcController],
  providers: [LinkedRespawnService, LinkedRespawnResolver],
  exports: [LinkedRespawnService],
})
export class LinkedRespawnModule {}
