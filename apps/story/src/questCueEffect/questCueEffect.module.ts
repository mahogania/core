import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestCueEffectModuleBase } from "./base/questCueEffect.module.base";
import { QuestCueEffectService } from "./questCueEffect.service";
import { QuestCueEffectController } from "./questCueEffect.controller";
import { QuestCueEffectGrpcController } from "./questCueEffect.grpc.controller";
import { QuestCueEffectResolver } from "./questCueEffect.resolver";

@Module({
  imports: [QuestCueEffectModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestCueEffectController, QuestCueEffectGrpcController],
  providers: [QuestCueEffectService, QuestCueEffectResolver],
  exports: [QuestCueEffectService],
})
export class QuestCueEffectModule {}
