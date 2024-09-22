import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LfgDungeonRewardsModuleBase } from "./base/lfgDungeonRewards.module.base";
import { LfgDungeonRewardsService } from "./lfgDungeonRewards.service";
import { LfgDungeonRewardsController } from "./lfgDungeonRewards.controller";
import { LfgDungeonRewardsGrpcController } from "./lfgDungeonRewards.grpc.controller";
import { LfgDungeonRewardsResolver } from "./lfgDungeonRewards.resolver";

@Module({
  imports: [LfgDungeonRewardsModuleBase, forwardRef(() => AuthModule)],
  controllers: [LfgDungeonRewardsController, LfgDungeonRewardsGrpcController],
  providers: [LfgDungeonRewardsService, LfgDungeonRewardsResolver],
  exports: [LfgDungeonRewardsService],
})
export class LfgDungeonRewardsModule {}
