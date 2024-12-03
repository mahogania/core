import * as graphql from "@nestjs/graphql";
import { DiscussionTopicResolverBase } from "./base/discussionTopic.resolver.base";
import { DiscussionTopic } from "./base/DiscussionTopic";
import { DiscussionTopicService } from "./discussionTopic.service";

@graphql.Resolver(() => DiscussionTopic)
export class DiscussionTopicResolver extends DiscussionTopicResolverBase {
  constructor(protected readonly service: DiscussionTopicService) {
    super(service);
  }
}
