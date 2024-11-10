import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestObjectivesCompletionEffectModuleBase } from "./base/questObjectivesCompletionEffect.module.base";
import { QuestObjectivesCompletionEffectService } from "./questObjectivesCompletionEffect.service";
import { QuestObjectivesCompletionEffectController } from "./questObjectivesCompletionEffect.controller";
import { QuestObjectivesCompletionEffectGrpcController } from "./questObjectivesCompletionEffect.grpc.controller";
import { QuestObjectivesCompletionEffectResolver } from "./questObjectivesCompletionEffect.resolver";

@Module({
  imports: [
    QuestObjectivesCompletionEffectModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestObjectivesCompletionEffectController,
    QuestObjectivesCompletionEffectGrpcController,
  ],
  providers: [
    QuestObjectivesCompletionEffectService,
    QuestObjectivesCompletionEffectResolver,
  ],
  exports: [QuestObjectivesCompletionEffectService],
})
export class QuestObjectivesCompletionEffectModule {}
