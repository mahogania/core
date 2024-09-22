import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureSummonGroupsServiceBase } from "./base/creatureSummonGroups.service.base";

@Injectable()
export class CreatureSummonGroupsService extends CreatureSummonGroupsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
