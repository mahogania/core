import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AchievementScriptsModuleBase } from "./base/achievementScripts.module.base";
import { AchievementScriptsService } from "./achievementScripts.service";
import { AchievementScriptsController } from "./achievementScripts.controller";
import { AchievementScriptsGrpcController } from "./achievementScripts.grpc.controller";
import { AchievementScriptsResolver } from "./achievementScripts.resolver";

@Module({
  imports: [AchievementScriptsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AchievementScriptsController, AchievementScriptsGrpcController],
  providers: [AchievementScriptsService, AchievementScriptsResolver],
  exports: [AchievementScriptsService],
})
export class AchievementScriptsModule {}
