import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerModuleBase } from "./base/player.module.base";
import { PlayerService } from "./player.service";
import { PlayerController } from "./player.controller";
import { PlayerGrpcController } from "./player.grpc.controller";
import { PlayerResolver } from "./player.resolver";

@Module({
  imports: [PlayerModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerController, PlayerGrpcController],
  providers: [PlayerService, PlayerResolver],
  exports: [PlayerService],
})
export class PlayerModule {}
