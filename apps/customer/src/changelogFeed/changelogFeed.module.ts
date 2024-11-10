import { Module } from "@nestjs/common";
import { ChangelogFeedModuleBase } from "./base/changelogFeed.module.base";
import { ChangelogFeedService } from "./changelogFeed.service";
import { ChangelogFeedController } from "./changelogFeed.controller";
import { ChangelogFeedResolver } from "./changelogFeed.resolver";

@Module({
  imports: [ChangelogFeedModuleBase],
  controllers: [ChangelogFeedController],
  providers: [ChangelogFeedService, ChangelogFeedResolver],
  exports: [ChangelogFeedService],
})
export class ChangelogFeedModule {}
