import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionchangeSpellsModuleBase } from "./base/playerFactionchangeSpells.module.base";
import { PlayerFactionchangeSpellsService } from "./playerFactionchangeSpells.service";
import { PlayerFactionchangeSpellsController } from "./playerFactionchangeSpells.controller";
import { PlayerFactionchangeSpellsGrpcController } from "./playerFactionchangeSpells.grpc.controller";
import { PlayerFactionchangeSpellsResolver } from "./playerFactionchangeSpells.resolver";

@Module({
  imports: [PlayerFactionchangeSpellsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerFactionchangeSpellsController,
    PlayerFactionchangeSpellsGrpcController,
  ],
  providers: [
    PlayerFactionchangeSpellsService,
    PlayerFactionchangeSpellsResolver,
  ],
  exports: [PlayerFactionchangeSpellsService],
})
export class PlayerFactionchangeSpellsModule {}
