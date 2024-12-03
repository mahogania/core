import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestObjectiveLocaleModuleBase } from "./base/questObjectiveLocale.module.base";
import { QuestObjectiveLocaleService } from "./questObjectiveLocale.service";
import { QuestObjectiveLocaleController } from "./questObjectiveLocale.controller";
import { QuestObjectiveLocaleGrpcController } from "./questObjectiveLocale.grpc.controller";
import { QuestObjectiveLocaleResolver } from "./questObjectiveLocale.resolver";

@Module({
  imports: [QuestObjectiveLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestObjectiveLocaleController,
    QuestObjectiveLocaleGrpcController,
  ],
  providers: [QuestObjectiveLocaleService, QuestObjectiveLocaleResolver],
  exports: [QuestObjectiveLocaleService],
})
export class QuestObjectiveLocaleModule {}
