import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestPoolMembersServiceBase } from "./base/questPoolMembers.service.base";

@Injectable()
export class QuestPoolMembersService extends QuestPoolMembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
