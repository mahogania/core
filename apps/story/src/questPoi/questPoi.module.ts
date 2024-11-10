import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestPoiModuleBase } from "./base/questPoi.module.base";
import { QuestPoiService } from "./questPoi.service";
import { QuestPoiController } from "./questPoi.controller";
import { QuestPoiGrpcController } from "./questPoi.grpc.controller";
import { QuestPoiResolver } from "./questPoi.resolver";

@Module({
  imports: [QuestPoiModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestPoiController, QuestPoiGrpcController],
  providers: [QuestPoiService, QuestPoiResolver],
  exports: [QuestPoiService],
})
export class QuestPoiModule {}
