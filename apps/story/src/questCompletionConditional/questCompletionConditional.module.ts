import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestCompletionConditionalModuleBase } from "./base/questCompletionConditional.module.base";
import { QuestCompletionConditionalService } from "./questCompletionConditional.service";
import { QuestCompletionConditionalController } from "./questCompletionConditional.controller";
import { QuestCompletionConditionalGrpcController } from "./questCompletionConditional.grpc.controller";
import { QuestCompletionConditionalResolver } from "./questCompletionConditional.resolver";

@Module({
  imports: [QuestCompletionConditionalModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestCompletionConditionalController,
    QuestCompletionConditionalGrpcController,
  ],
  providers: [
    QuestCompletionConditionalService,
    QuestCompletionConditionalResolver,
  ],
  exports: [QuestCompletionConditionalService],
})
export class QuestCompletionConditionalModule {}
