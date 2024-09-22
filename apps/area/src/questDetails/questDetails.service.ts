import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestDetailsServiceBase } from "./base/questDetails.service.base";

@Injectable()
export class QuestDetailsService extends QuestDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
