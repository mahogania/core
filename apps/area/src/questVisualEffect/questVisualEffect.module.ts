import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestVisualEffectModuleBase } from "./base/questVisualEffect.module.base";
import { QuestVisualEffectService } from "./questVisualEffect.service";
import { QuestVisualEffectController } from "./questVisualEffect.controller";
import { QuestVisualEffectGrpcController } from "./questVisualEffect.grpc.controller";
import { QuestVisualEffectResolver } from "./questVisualEffect.resolver";

@Module({
  imports: [QuestVisualEffectModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestVisualEffectController, QuestVisualEffectGrpcController],
  providers: [QuestVisualEffectService, QuestVisualEffectResolver],
  exports: [QuestVisualEffectService],
})
export class QuestVisualEffectModule {}
