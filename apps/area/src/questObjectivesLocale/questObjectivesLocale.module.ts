import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestObjectivesLocaleModuleBase } from "./base/questObjectivesLocale.module.base";
import { QuestObjectivesLocaleService } from "./questObjectivesLocale.service";
import { QuestObjectivesLocaleController } from "./questObjectivesLocale.controller";
import { QuestObjectivesLocaleGrpcController } from "./questObjectivesLocale.grpc.controller";
import { QuestObjectivesLocaleResolver } from "./questObjectivesLocale.resolver";

@Module({
  imports: [QuestObjectivesLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestObjectivesLocaleController,
    QuestObjectivesLocaleGrpcController,
  ],
  providers: [QuestObjectivesLocaleService, QuestObjectivesLocaleResolver],
  exports: [QuestObjectivesLocaleService],
})
export class QuestObjectivesLocaleModule {}
