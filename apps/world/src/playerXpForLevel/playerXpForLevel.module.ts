import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerXpForLevelModuleBase } from "./base/playerXpForLevel.module.base";
import { PlayerXpForLevelService } from "./playerXpForLevel.service";
import { PlayerXpForLevelController } from "./playerXpForLevel.controller";
import { PlayerXpForLevelGrpcController } from "./playerXpForLevel.grpc.controller";
import { PlayerXpForLevelResolver } from "./playerXpForLevel.resolver";

@Module({
  imports: [PlayerXpForLevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerXpForLevelController, PlayerXpForLevelGrpcController],
  providers: [PlayerXpForLevelService, PlayerXpForLevelResolver],
  exports: [PlayerXpForLevelService],
})
export class PlayerXpForLevelModule {}
