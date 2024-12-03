import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestCompletionLogConditionalModuleBase } from "./base/questCompletionLogConditional.module.base";
import { QuestCompletionLogConditionalService } from "./questCompletionLogConditional.service";
import { QuestCompletionLogConditionalController } from "./questCompletionLogConditional.controller";
import { QuestCompletionLogConditionalGrpcController } from "./questCompletionLogConditional.grpc.controller";
import { QuestCompletionLogConditionalResolver } from "./questCompletionLogConditional.resolver";

@Module({
  imports: [
    QuestCompletionLogConditionalModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestCompletionLogConditionalController,
    QuestCompletionLogConditionalGrpcController,
  ],
  providers: [
    QuestCompletionLogConditionalService,
    QuestCompletionLogConditionalResolver,
  ],
  exports: [QuestCompletionLogConditionalService],
})
export class QuestCompletionLogConditionalModule {}
