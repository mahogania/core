import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureQuestEnderModuleBase } from "./base/creatureQuestEnder.module.base";
import { CreatureQuestEnderService } from "./creatureQuestEnder.service";
import { CreatureQuestEnderController } from "./creatureQuestEnder.controller";
import { CreatureQuestEnderGrpcController } from "./creatureQuestEnder.grpc.controller";
import { CreatureQuestEnderResolver } from "./creatureQuestEnder.resolver";

@Module({
  imports: [CreatureQuestEnderModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureQuestEnderController, CreatureQuestEnderGrpcController],
  providers: [CreatureQuestEnderService, CreatureQuestEnderResolver],
  exports: [CreatureQuestEnderService],
})
export class CreatureQuestEnderModule {}
