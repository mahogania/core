import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CharacterSpellModuleBase } from "./base/characterSpell.module.base";
import { CharacterSpellService } from "./characterSpell.service";
import { CharacterSpellController } from "./characterSpell.controller";
import { CharacterSpellGrpcController } from "./characterSpell.grpc.controller";
import { CharacterSpellResolver } from "./characterSpell.resolver";

@Module({
  imports: [CharacterSpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [CharacterSpellController, CharacterSpellGrpcController],
  providers: [CharacterSpellService, CharacterSpellResolver],
  exports: [CharacterSpellService],
})
export class CharacterSpellModule {}
