import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoolMembersServiceBase } from "./base/poolMembers.service.base";

@Injectable()
export class PoolMembersService extends PoolMembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
