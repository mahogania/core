import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestPoolMemberServiceBase } from "./base/questPoolMember.service.base";

@Injectable()
export class QuestPoolMemberService extends QuestPoolMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
