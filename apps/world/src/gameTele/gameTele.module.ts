import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameTeleModuleBase } from "./base/gameTele.module.base";
import { GameTeleService } from "./gameTele.service";
import { GameTeleController } from "./gameTele.controller";
import { GameTeleGrpcController } from "./gameTele.grpc.controller";
import { GameTeleResolver } from "./gameTele.resolver";

@Module({
  imports: [GameTeleModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameTeleController, GameTeleGrpcController],
  providers: [GameTeleService, GameTeleResolver],
  exports: [GameTeleService],
})
export class GameTeleModule {}
