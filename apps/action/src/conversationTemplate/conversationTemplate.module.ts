import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationTemplateModuleBase } from "./base/conversationTemplate.module.base";
import { ConversationTemplateService } from "./conversationTemplate.service";
import { ConversationTemplateController } from "./conversationTemplate.controller";
import { ConversationTemplateGrpcController } from "./conversationTemplate.grpc.controller";
import { ConversationTemplateResolver } from "./conversationTemplate.resolver";

@Module({
  imports: [ConversationTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ConversationTemplateController,
    ConversationTemplateGrpcController,
  ],
  providers: [ConversationTemplateService, ConversationTemplateResolver],
  exports: [ConversationTemplateService],
})
export class ConversationTemplateModule {}
