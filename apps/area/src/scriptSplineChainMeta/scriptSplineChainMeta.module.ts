import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScriptSplineChainMetaModuleBase } from "./base/scriptSplineChainMeta.module.base";
import { ScriptSplineChainMetaService } from "./scriptSplineChainMeta.service";
import { ScriptSplineChainMetaController } from "./scriptSplineChainMeta.controller";
import { ScriptSplineChainMetaGrpcController } from "./scriptSplineChainMeta.grpc.controller";
import { ScriptSplineChainMetaResolver } from "./scriptSplineChainMeta.resolver";

@Module({
  imports: [ScriptSplineChainMetaModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ScriptSplineChainMetaController,
    ScriptSplineChainMetaGrpcController,
  ],
  providers: [ScriptSplineChainMetaService, ScriptSplineChainMetaResolver],
  exports: [ScriptSplineChainMetaService],
})
export class ScriptSplineChainMetaModule {}
