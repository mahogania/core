import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestObjectivesModuleBase } from "./base/questObjectives.module.base";
import { QuestObjectivesService } from "./questObjectives.service";
import { QuestObjectivesController } from "./questObjectives.controller";
import { QuestObjectivesGrpcController } from "./questObjectives.grpc.controller";
import { QuestObjectivesResolver } from "./questObjectives.resolver";

@Module({
  imports: [QuestObjectivesModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestObjectivesController, QuestObjectivesGrpcController],
  providers: [QuestObjectivesService, QuestObjectivesResolver],
  exports: [QuestObjectivesService],
})
export class QuestObjectivesModule {}
