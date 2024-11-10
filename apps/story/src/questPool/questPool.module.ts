import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestPoolModuleBase } from "./base/questPool.module.base";
import { QuestPoolService } from "./questPool.service";
import { QuestPoolController } from "./questPool.controller";
import { QuestPoolGrpcController } from "./questPool.grpc.controller";
import { QuestPoolResolver } from "./questPool.resolver";

@Module({
  imports: [QuestPoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestPoolController, QuestPoolGrpcController],
  providers: [QuestPoolService, QuestPoolResolver],
  exports: [QuestPoolService],
})
export class QuestPoolModule {}
