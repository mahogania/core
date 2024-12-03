import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoolMemberServiceBase } from "./base/poolMember.service.base";

@Injectable()
export class PoolMemberService extends PoolMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
