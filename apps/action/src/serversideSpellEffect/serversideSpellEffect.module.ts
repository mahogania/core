import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServersideSpellEffectModuleBase } from "./base/serversideSpellEffect.module.base";
import { ServersideSpellEffectService } from "./serversideSpellEffect.service";
import { ServersideSpellEffectController } from "./serversideSpellEffect.controller";
import { ServersideSpellEffectGrpcController } from "./serversideSpellEffect.grpc.controller";
import { ServersideSpellEffectResolver } from "./serversideSpellEffect.resolver";

@Module({
  imports: [ServersideSpellEffectModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ServersideSpellEffectController,
    ServersideSpellEffectGrpcController,
  ],
  providers: [ServersideSpellEffectService, ServersideSpellEffectResolver],
  exports: [ServersideSpellEffectService],
})
export class ServersideSpellEffectModule {}
