import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRequestItemConditionalModuleBase } from "./base/questRequestItemConditional.module.base";
import { QuestRequestItemConditionalService } from "./questRequestItemConditional.service";
import { QuestRequestItemConditionalController } from "./questRequestItemConditional.controller";
import { QuestRequestItemConditionalGrpcController } from "./questRequestItemConditional.grpc.controller";
import { QuestRequestItemConditionalResolver } from "./questRequestItemConditional.resolver";

@Module({
  imports: [
    QuestRequestItemConditionalModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestRequestItemConditionalController,
    QuestRequestItemConditionalGrpcController,
  ],
  providers: [
    QuestRequestItemConditionalService,
    QuestRequestItemConditionalResolver,
  ],
  exports: [QuestRequestItemConditionalService],
})
export class QuestRequestItemConditionalModule {}
