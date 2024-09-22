import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayercreateinfoCastSpellModuleBase } from "./base/playercreateinfoCastSpell.module.base";
import { PlayercreateinfoCastSpellService } from "./playercreateinfoCastSpell.service";
import { PlayercreateinfoCastSpellController } from "./playercreateinfoCastSpell.controller";
import { PlayercreateinfoCastSpellGrpcController } from "./playercreateinfoCastSpell.grpc.controller";
import { PlayercreateinfoCastSpellResolver } from "./playercreateinfoCastSpell.resolver";

@Module({
  imports: [PlayercreateinfoCastSpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayercreateinfoCastSpellController,
    PlayercreateinfoCastSpellGrpcController,
  ],
  providers: [
    PlayercreateinfoCastSpellService,
    PlayercreateinfoCastSpellResolver,
  ],
  exports: [PlayercreateinfoCastSpellService],
})
export class PlayercreateinfoCastSpellModule {}
