import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestDetailsModuleBase } from "./base/questDetails.module.base";
import { QuestDetailsService } from "./questDetails.service";
import { QuestDetailsController } from "./questDetails.controller";
import { QuestDetailsGrpcController } from "./questDetails.grpc.controller";
import { QuestDetailsResolver } from "./questDetails.resolver";

@Module({
  imports: [QuestDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestDetailsController, QuestDetailsGrpcController],
  providers: [QuestDetailsService, QuestDetailsResolver],
  exports: [QuestDetailsService],
})
export class QuestDetailsModule {}
