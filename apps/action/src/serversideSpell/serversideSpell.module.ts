import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServersideSpellModuleBase } from "./base/serversideSpell.module.base";
import { ServersideSpellService } from "./serversideSpell.service";
import { ServersideSpellController } from "./serversideSpell.controller";
import { ServersideSpellGrpcController } from "./serversideSpell.grpc.controller";
import { ServersideSpellResolver } from "./serversideSpell.resolver";

@Module({
  imports: [ServersideSpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServersideSpellController, ServersideSpellGrpcController],
  providers: [ServersideSpellService, ServersideSpellResolver],
  exports: [ServersideSpellService],
})
export class ServersideSpellModule {}
