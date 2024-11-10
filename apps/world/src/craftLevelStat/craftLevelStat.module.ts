import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CraftLevelStatModuleBase } from "./base/craftLevelStat.module.base";
import { CraftLevelStatService } from "./craftLevelStat.service";
import { CraftLevelStatController } from "./craftLevelStat.controller";
import { CraftLevelStatGrpcController } from "./craftLevelStat.grpc.controller";
import { CraftLevelStatResolver } from "./craftLevelStat.resolver";

@Module({
  imports: [CraftLevelStatModuleBase, forwardRef(() => AuthModule)],
  controllers: [CraftLevelStatController, CraftLevelStatGrpcController],
  providers: [CraftLevelStatService, CraftLevelStatResolver],
  exports: [CraftLevelStatService],
})
export class CraftLevelStatModule {}
