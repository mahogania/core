import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureLevelStatModuleBase } from "./base/creatureLevelStat.module.base";
import { CreatureLevelStatService } from "./creatureLevelStat.service";
import { CreatureLevelStatController } from "./creatureLevelStat.controller";
import { CreatureLevelStatGrpcController } from "./creatureLevelStat.grpc.controller";
import { CreatureLevelStatResolver } from "./creatureLevelStat.resolver";

@Module({
  imports: [CreatureLevelStatModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureLevelStatController, CreatureLevelStatGrpcController],
  providers: [CreatureLevelStatService, CreatureLevelStatResolver],
  exports: [CreatureLevelStatService],
})
export class CreatureLevelStatModule {}
