import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventCharacterModuleBase } from "./base/gameEventCharacter.module.base";
import { GameEventCharacterService } from "./gameEventCharacter.service";
import { GameEventCharacterController } from "./gameEventCharacter.controller";
import { GameEventCharacterGrpcController } from "./gameEventCharacter.grpc.controller";
import { GameEventCharacterResolver } from "./gameEventCharacter.resolver";

@Module({
  imports: [GameEventCharacterModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventCharacterController, GameEventCharacterGrpcController],
  providers: [GameEventCharacterService, GameEventCharacterResolver],
  exports: [GameEventCharacterService],
})
export class GameEventCharacterModule {}
