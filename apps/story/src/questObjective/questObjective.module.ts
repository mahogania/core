import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestObjectiveModuleBase } from "./base/questObjective.module.base";
import { QuestObjectiveService } from "./questObjective.service";
import { QuestObjectiveController } from "./questObjective.controller";
import { QuestObjectiveGrpcController } from "./questObjective.grpc.controller";
import { QuestObjectiveResolver } from "./questObjective.resolver";

@Module({
  imports: [QuestObjectiveModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestObjectiveController, QuestObjectiveGrpcController],
  providers: [QuestObjectiveService, QuestObjectiveResolver],
  exports: [QuestObjectiveService],
})
export class QuestObjectiveModule {}
