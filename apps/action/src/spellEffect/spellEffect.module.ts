import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpellEffectModuleBase } from "./base/spellEffect.module.base";
import { SpellEffectService } from "./spellEffect.service";
import { SpellEffectController } from "./spellEffect.controller";
import { SpellEffectGrpcController } from "./spellEffect.grpc.controller";
import { SpellEffectResolver } from "./spellEffect.resolver";

@Module({
  imports: [SpellEffectModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpellEffectController, SpellEffectGrpcController],
  providers: [SpellEffectService, SpellEffectResolver],
  exports: [SpellEffectService],
})
export class SpellEffectModule {}
