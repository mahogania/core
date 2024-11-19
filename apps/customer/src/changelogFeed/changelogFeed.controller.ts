import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChangelogFeedService } from "./changelogFeed.service";
import { ChangelogFeedControllerBase } from "./base/changelogFeed.controller.base";

@swagger.ApiTags("changelogFeeds")
@common.Controller("changelogFeeds")
export class ChangelogFeedController extends ChangelogFeedControllerBase {
  constructor(protected readonly service: ChangelogFeedService) {
    super(service);
  }
}
