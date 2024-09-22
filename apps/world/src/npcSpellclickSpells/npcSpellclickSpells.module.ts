import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NpcSpellclickSpellsModuleBase } from "./base/npcSpellclickSpells.module.base";
import { NpcSpellclickSpellsService } from "./npcSpellclickSpells.service";
import { NpcSpellclickSpellsController } from "./npcSpellclickSpells.controller";
import { NpcSpellclickSpellsGrpcController } from "./npcSpellclickSpells.grpc.controller";
import { NpcSpellclickSpellsResolver } from "./npcSpellclickSpells.resolver";

@Module({
  imports: [NpcSpellclickSpellsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    NpcSpellclickSpellsController,
    NpcSpellclickSpellsGrpcController,
  ],
  providers: [NpcSpellclickSpellsService, NpcSpellclickSpellsResolver],
  exports: [NpcSpellclickSpellsService],
})
export class NpcSpellclickSpellsModule {}
