import * as graphql from "@nestjs/graphql";
import { ChangelogFeedResolverBase } from "./base/changelogFeed.resolver.base";
import { ChangelogFeed } from "./base/ChangelogFeed";
import { ChangelogFeedService } from "./changelogFeed.service";

@graphql.Resolver(() => ChangelogFeed)
export class ChangelogFeedResolver extends ChangelogFeedResolverBase {
  constructor(protected readonly service: ChangelogFeedService) {
    super(service);
  }
}
