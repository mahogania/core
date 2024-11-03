import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRegionModuleBase } from "./base/questRegion.module.base";
import { QuestRegionService } from "./questRegion.service";
import { QuestRegionController } from "./questRegion.controller";
import { QuestRegionGrpcController } from "./questRegion.grpc.controller";
import { QuestRegionResolver } from "./questRegion.resolver";

@Module({
  imports: [QuestRegionModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestRegionController, QuestRegionGrpcController],
  providers: [QuestRegionService, QuestRegionResolver],
  exports: [QuestRegionService],
})
export class QuestRegionModule {}
