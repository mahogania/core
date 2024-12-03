import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureQuestStarterModuleBase } from "./base/creatureQuestStarter.module.base";
import { CreatureQuestStarterService } from "./creatureQuestStarter.service";
import { CreatureQuestStarterController } from "./creatureQuestStarter.controller";
import { CreatureQuestStarterGrpcController } from "./creatureQuestStarter.grpc.controller";
import { CreatureQuestStarterResolver } from "./creatureQuestStarter.resolver";

@Module({
  imports: [CreatureQuestStarterModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureQuestStarterController,
    CreatureQuestStarterGrpcController,
  ],
  providers: [CreatureQuestStarterService, CreatureQuestStarterResolver],
  exports: [CreatureQuestStarterService],
})
export class CreatureQuestStarterModule {}
