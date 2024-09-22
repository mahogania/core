import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestDescriptionConditionalModuleBase } from "./base/questDescriptionConditional.module.base";
import { QuestDescriptionConditionalService } from "./questDescriptionConditional.service";
import { QuestDescriptionConditionalController } from "./questDescriptionConditional.controller";
import { QuestDescriptionConditionalGrpcController } from "./questDescriptionConditional.grpc.controller";
import { QuestDescriptionConditionalResolver } from "./questDescriptionConditional.resolver";

@Module({
  imports: [
    QuestDescriptionConditionalModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    QuestDescriptionConditionalController,
    QuestDescriptionConditionalGrpcController,
  ],
  providers: [
    QuestDescriptionConditionalService,
    QuestDescriptionConditionalResolver,
  ],
  exports: [QuestDescriptionConditionalService],
})
export class QuestDescriptionConditionalModule {}
