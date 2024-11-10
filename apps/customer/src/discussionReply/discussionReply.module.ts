import { Module } from "@nestjs/common";
import { DiscussionReplyModuleBase } from "./base/discussionReply.module.base";
import { DiscussionReplyService } from "./discussionReply.service";
import { DiscussionReplyController } from "./discussionReply.controller";
import { DiscussionReplyResolver } from "./discussionReply.resolver";

@Module({
  imports: [DiscussionReplyModuleBase],
  controllers: [DiscussionReplyController],
  providers: [DiscussionReplyService, DiscussionReplyResolver],
  exports: [DiscussionReplyService],
})
export class DiscussionReplyModule {}
