import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscussionReplyService } from "./discussionReply.service";
import { DiscussionReplyControllerBase } from "./base/discussionReply.controller.base";

@swagger.ApiTags("discussionReplies")
@common.Controller("discussionReplies")
export class DiscussionReplyController extends DiscussionReplyControllerBase {
  constructor(protected readonly service: DiscussionReplyService) {
    super(service);
  }
}
