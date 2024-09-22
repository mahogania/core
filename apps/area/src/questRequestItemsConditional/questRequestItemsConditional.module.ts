import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestRequestItemsConditionalModuleBase } from "./base/questRequestItemsConditional.module.base";
import { QuestRequestItemsConditionalService } from "./questRequestItemsConditional.service";
import { QuestRequestItemsConditionalController } from "./questRequestItemsConditional.controller";
import { QuestRequestItemsConditionalGrpcController } from "./questRequestItemsConditional.grpc.controller";
import { QuestRequestItemsConditionalResolver } from "./questRequestItemsConditional.resolver";

@Module({
  imports: [
    QuestRequestItemsConditionalModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestRequestItemsConditionalController,
    QuestRequestItemsConditionalGrpcController,
  ],
  providers: [
    QuestRequestItemsConditionalService,
    QuestRequestItemsConditionalResolver,
  ],
  exports: [QuestRequestItemsConditionalService],
})
export class QuestRequestItemsConditionalModule {}
