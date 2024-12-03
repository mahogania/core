import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRewardDisplaySpellModuleBase } from "./base/questRewardDisplaySpell.module.base";
import { QuestRewardDisplaySpellService } from "./questRewardDisplaySpell.service";
import { QuestRewardDisplaySpellController } from "./questRewardDisplaySpell.controller";
import { QuestRewardDisplaySpellGrpcController } from "./questRewardDisplaySpell.grpc.controller";
import { QuestRewardDisplaySpellResolver } from "./questRewardDisplaySpell.resolver";

@Module({
  imports: [QuestRewardDisplaySpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestRewardDisplaySpellController,
    QuestRewardDisplaySpellGrpcController,
  ],
  providers: [QuestRewardDisplaySpellService, QuestRewardDisplaySpellResolver],
  exports: [QuestRewardDisplaySpellService],
})
export class QuestRewardDisplaySpellModule {}
