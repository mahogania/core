import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaQuestTriggerModuleBase } from "./base/areaQuestTrigger.module.base";
import { AreaQuestTriggerService } from "./areaQuestTrigger.service";
import { AreaQuestTriggerController } from "./areaQuestTrigger.controller";
import { AreaQuestTriggerGrpcController } from "./areaQuestTrigger.grpc.controller";
import { AreaQuestTriggerResolver } from "./areaQuestTrigger.resolver";

@Module({
  imports: [AreaQuestTriggerModuleBase, forwardRef(() => AuthModule)],
  controllers: [AreaQuestTriggerController, AreaQuestTriggerGrpcController],
  providers: [AreaQuestTriggerService, AreaQuestTriggerResolver],
  exports: [AreaQuestTriggerService],
})
export class AreaQuestTriggerModule {}
