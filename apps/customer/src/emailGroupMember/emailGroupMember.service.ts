import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailGroupMemberServiceBase } from "./base/emailGroupMember.service.base";

@Injectable()
export class EmailGroupMemberService extends EmailGroupMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
