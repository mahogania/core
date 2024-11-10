import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestObjectiveCompletionEffectModuleBase } from "./base/questObjectiveCompletionEffect.module.base";
import { QuestObjectiveCompletionEffectService } from "./questObjectiveCompletionEffect.service";
import { QuestObjectiveCompletionEffectController } from "./questObjectiveCompletionEffect.controller";
import { QuestObjectiveCompletionEffectGrpcController } from "./questObjectiveCompletionEffect.grpc.controller";
import { QuestObjectiveCompletionEffectResolver } from "./questObjectiveCompletionEffect.resolver";

@Module({
  imports: [
    QuestObjectiveCompletionEffectModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestObjectiveCompletionEffectController,
    QuestObjectiveCompletionEffectGrpcController,
  ],
  providers: [
    QuestObjectiveCompletionEffectService,
    QuestObjectiveCompletionEffectResolver,
  ],
  exports: [QuestObjectiveCompletionEffectService],
})
export class QuestObjectiveCompletionEffectModule {}
