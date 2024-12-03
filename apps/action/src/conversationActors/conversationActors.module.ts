import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationActorsModuleBase } from "./base/conversationActors.module.base";
import { ConversationActorsService } from "./conversationActors.service";
import { ConversationActorsController } from "./conversationActors.controller";
import { ConversationActorsGrpcController } from "./conversationActors.grpc.controller";
import { ConversationActorsResolver } from "./conversationActors.resolver";

@Module({
  imports: [ConversationActorsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConversationActorsController, ConversationActorsGrpcController],
  providers: [ConversationActorsService, ConversationActorsResolver],
  exports: [ConversationActorsService],
})
export class ConversationActorsModule {}
