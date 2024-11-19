import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRewardSpellModuleBase } from "./base/questRewardSpell.module.base";
import { QuestRewardSpellService } from "./questRewardSpell.service";
import { QuestRewardSpellController } from "./questRewardSpell.controller";
import { QuestRewardSpellGrpcController } from "./questRewardSpell.grpc.controller";
import { QuestRewardSpellResolver } from "./questRewardSpell.resolver";

@Module({
  imports: [QuestRewardSpellModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestRewardSpellController, QuestRewardSpellGrpcController],
  providers: [QuestRewardSpellService, QuestRewardSpellResolver],
  exports: [QuestRewardSpellService],
})
export class QuestRewardSpellModule {}
