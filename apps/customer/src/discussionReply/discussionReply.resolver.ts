import * as graphql from "@nestjs/graphql";
import { DiscussionReplyResolverBase } from "./base/discussionReply.resolver.base";
import { DiscussionReply } from "./base/DiscussionReply";
import { DiscussionReplyService } from "./discussionReply.service";

@graphql.Resolver(() => DiscussionReply)
export class DiscussionReplyResolver extends DiscussionReplyResolverBase {
  constructor(protected readonly service: DiscussionReplyService) {
    super(service);
  }
}
