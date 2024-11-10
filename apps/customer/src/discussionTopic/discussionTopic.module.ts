import { Module } from "@nestjs/common";
import { DiscussionTopicModuleBase } from "./base/discussionTopic.module.base";
import { DiscussionTopicService } from "./discussionTopic.service";
import { DiscussionTopicController } from "./discussionTopic.controller";
import { DiscussionTopicResolver } from "./discussionTopic.resolver";

@Module({
  imports: [DiscussionTopicModuleBase],
  controllers: [DiscussionTopicController],
  providers: [DiscussionTopicService, DiscussionTopicResolver],
  exports: [DiscussionTopicService],
})
export class DiscussionTopicModule {}
