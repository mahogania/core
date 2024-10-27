import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestDetailModuleBase } from "./base/questDetail.module.base";
import { QuestDetailService } from "./questDetail.service";
import { QuestDetailController } from "./questDetail.controller";
import { QuestDetailGrpcController } from "./questDetail.grpc.controller";
import { QuestDetailResolver } from "./questDetail.resolver";

@Module({
  imports: [QuestDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestDetailController, QuestDetailGrpcController],
  providers: [QuestDetailService, QuestDetailResolver],
  exports: [QuestDetailService],
})
export class QuestDetailModule {}
