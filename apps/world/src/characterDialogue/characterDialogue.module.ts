import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CharacterDialogueModuleBase } from "./base/characterDialogue.module.base";
import { CharacterDialogueService } from "./characterDialogue.service";
import { CharacterDialogueController } from "./characterDialogue.controller";
import { CharacterDialogueGrpcController } from "./characterDialogue.grpc.controller";
import { CharacterDialogueResolver } from "./characterDialogue.resolver";

@Module({
  imports: [CharacterDialogueModuleBase, forwardRef(() => AuthModule)],
  controllers: [CharacterDialogueController, CharacterDialogueGrpcController],
  providers: [CharacterDialogueService, CharacterDialogueResolver],
  exports: [CharacterDialogueService],
})
export class CharacterDialogueModule {}
