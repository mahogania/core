import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionSpellModuleBase } from "./base/playerFactionSpell.module.base";
import { PlayerFactionSpellService } from "./playerFactionSpell.service";
import { PlayerFactionSpellController } from "./playerFactionSpell.controller";
import { PlayerFactionSpellGrpcController } from "./playerFactionSpell.grpc.controller";
import { PlayerFactionSpellResolver } from "./playerFactionSpell.resolver";

@Module({
  imports: [PlayerFactionSpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerFactionSpellController, PlayerFactionSpellGrpcController],
  providers: [PlayerFactionSpellService, PlayerFactionSpellResolver],
  exports: [PlayerFactionSpellService],
})
export class PlayerFactionSpellModule {}
