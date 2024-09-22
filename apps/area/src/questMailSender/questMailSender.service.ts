import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestMailSenderServiceBase } from "./base/questMailSender.service.base";

@Injectable()
export class QuestMailSenderService extends QuestMailSenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
