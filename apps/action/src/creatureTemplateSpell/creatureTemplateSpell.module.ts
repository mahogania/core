import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateSpellModuleBase } from "./base/creatureTemplateSpell.module.base";
import { CreatureTemplateSpellService } from "./creatureTemplateSpell.service";
import { CreatureTemplateSpellController } from "./creatureTemplateSpell.controller";
import { CreatureTemplateSpellGrpcController } from "./creatureTemplateSpell.grpc.controller";
import { CreatureTemplateSpellResolver } from "./creatureTemplateSpell.resolver";

@Module({
  imports: [CreatureTemplateSpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateSpellController,
    CreatureTemplateSpellGrpcController,
  ],
  providers: [CreatureTemplateSpellService, CreatureTemplateSpellResolver],
  exports: [CreatureTemplateSpellService],
})
export class CreatureTemplateSpellModule {}
