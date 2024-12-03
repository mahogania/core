import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChangelogFeedServiceBase } from "./base/changelogFeed.service.base";

@Injectable()
export class ChangelogFeedService extends ChangelogFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
