import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpellModuleBase } from "./base/spell.module.base";
import { SpellService } from "./spell.service";
import { SpellController } from "./spell.controller";
import { SpellGrpcController } from "./spell.grpc.controller";
import { SpellResolver } from "./spell.resolver";

@Module({
  imports: [SpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpellController, SpellGrpcController],
  providers: [SpellService, SpellResolver],
  exports: [SpellService],
})
export class SpellModule {}
