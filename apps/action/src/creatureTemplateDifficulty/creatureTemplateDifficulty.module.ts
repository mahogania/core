import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateDifficultyModuleBase } from "./base/creatureTemplateDifficulty.module.base";
import { CreatureTemplateDifficultyService } from "./creatureTemplateDifficulty.service";
import { CreatureTemplateDifficultyController } from "./creatureTemplateDifficulty.controller";
import { CreatureTemplateDifficultyGrpcController } from "./creatureTemplateDifficulty.grpc.controller";
import { CreatureTemplateDifficultyResolver } from "./creatureTemplateDifficulty.resolver";

@Module({
  imports: [CreatureTemplateDifficultyModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateDifficultyController,
    CreatureTemplateDifficultyGrpcController,
  ],
  providers: [
    CreatureTemplateDifficultyService,
    CreatureTemplateDifficultyResolver,
  ],
  exports: [CreatureTemplateDifficultyService],
})
export class CreatureTemplateDifficultyModule {}
