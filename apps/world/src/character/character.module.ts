import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CharacterModuleBase } from "./base/character.module.base";
import { CharacterService } from "./character.service";
import { CharacterController } from "./character.controller";
import { CharacterGrpcController } from "./character.grpc.controller";
import { CharacterResolver } from "./character.resolver";

@Module({
  imports: [CharacterModuleBase, forwardRef(() => AuthModule)],
  controllers: [CharacterController, CharacterGrpcController],
  providers: [CharacterService, CharacterResolver],
  exports: [CharacterService],
})
export class CharacterModule {}
