import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscussionTopicServiceBase } from "./base/discussionTopic.service.base";

@Injectable()
export class DiscussionTopicService extends DiscussionTopicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
