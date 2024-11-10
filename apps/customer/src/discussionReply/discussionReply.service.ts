import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscussionReplyServiceBase } from "./base/discussionReply.service.base";

@Injectable()
export class DiscussionReplyService extends DiscussionReplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
