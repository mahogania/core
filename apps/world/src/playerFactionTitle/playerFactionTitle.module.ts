import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionTitleModuleBase } from "./base/playerFactionTitle.module.base";
import { PlayerFactionTitleService } from "./playerFactionTitle.service";
import { PlayerFactionTitleController } from "./playerFactionTitle.controller";
import { PlayerFactionTitleGrpcController } from "./playerFactionTitle.grpc.controller";
import { PlayerFactionTitleResolver } from "./playerFactionTitle.resolver";

@Module({
  imports: [PlayerFactionTitleModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerFactionTitleController, PlayerFactionTitleGrpcController],
  providers: [PlayerFactionTitleService, PlayerFactionTitleResolver],
  exports: [PlayerFactionTitleService],
})
export class PlayerFactionTitleModule {}
