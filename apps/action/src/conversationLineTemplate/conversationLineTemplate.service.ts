import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationLineTemplateServiceBase } from "./base/conversationLineTemplate.service.base";

@Injectable()
export class ConversationLineTemplateService extends ConversationLineTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
