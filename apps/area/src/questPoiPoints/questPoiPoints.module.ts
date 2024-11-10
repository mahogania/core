import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestPoiPointsModuleBase } from "./base/questPoiPoints.module.base";
import { QuestPoiPointsService } from "./questPoiPoints.service";
import { QuestPoiPointsController } from "./questPoiPoints.controller";
import { QuestPoiPointsGrpcController } from "./questPoiPoints.grpc.controller";
import { QuestPoiPointsResolver } from "./questPoiPoints.resolver";

@Module({
  imports: [QuestPoiPointsModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestPoiPointsController, QuestPoiPointsGrpcController],
  providers: [QuestPoiPointsService, QuestPoiPointsResolver],
  exports: [QuestPoiPointsService],
})
export class QuestPoiPointsModule {}
