import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationLineTemplateModuleBase } from "./base/conversationLineTemplate.module.base";
import { ConversationLineTemplateService } from "./conversationLineTemplate.service";
import { ConversationLineTemplateController } from "./conversationLineTemplate.controller";
import { ConversationLineTemplateGrpcController } from "./conversationLineTemplate.grpc.controller";
import { ConversationLineTemplateResolver } from "./conversationLineTemplate.resolver";

@Module({
  imports: [ConversationLineTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ConversationLineTemplateController,
    ConversationLineTemplateGrpcController,
  ],
  providers: [
    ConversationLineTemplateService,
    ConversationLineTemplateResolver,
  ],
  exports: [ConversationLineTemplateService],
})
export class ConversationLineTemplateModule {}
