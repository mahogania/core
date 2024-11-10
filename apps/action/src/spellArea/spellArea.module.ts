import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpellAreaModuleBase } from "./base/spellArea.module.base";
import { SpellAreaService } from "./spellArea.service";
import { SpellAreaController } from "./spellArea.controller";
import { SpellAreaGrpcController } from "./spellArea.grpc.controller";
import { SpellAreaResolver } from "./spellArea.resolver";

@Module({
  imports: [SpellAreaModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpellAreaController, SpellAreaGrpcController],
  providers: [SpellAreaService, SpellAreaResolver],
  exports: [SpellAreaService],
})
export class SpellAreaModule {}
