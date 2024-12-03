import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscussionTopicService } from "./discussionTopic.service";
import { DiscussionTopicControllerBase } from "./base/discussionTopic.controller.base";

@swagger.ApiTags("discussionTopics")
@common.Controller("discussionTopics")
export class DiscussionTopicController extends DiscussionTopicControllerBase {
  constructor(protected readonly service: DiscussionTopicService) {
    super(service);
  }
}
