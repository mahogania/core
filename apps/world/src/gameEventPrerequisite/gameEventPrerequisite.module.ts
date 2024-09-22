import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventPrerequisiteModuleBase } from "./base/gameEventPrerequisite.module.base";
import { GameEventPrerequisiteService } from "./gameEventPrerequisite.service";
import { GameEventPrerequisiteController } from "./gameEventPrerequisite.controller";
import { GameEventPrerequisiteGrpcController } from "./gameEventPrerequisite.grpc.controller";
import { GameEventPrerequisiteResolver } from "./gameEventPrerequisite.resolver";

@Module({
  imports: [GameEventPrerequisiteModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventPrerequisiteController,
    GameEventPrerequisiteGrpcController,
  ],
  providers: [GameEventPrerequisiteService, GameEventPrerequisiteResolver],
  exports: [GameEventPrerequisiteService],
})
export class GameEventPrerequisiteModule {}
