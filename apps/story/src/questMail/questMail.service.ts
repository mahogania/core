import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestMailServiceBase } from "./base/questMail.service.base";

@Injectable()
export class QuestMailService extends QuestMailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
