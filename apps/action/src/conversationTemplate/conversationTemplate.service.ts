import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationTemplateServiceBase } from "./base/conversationTemplate.service.base";

@Injectable()
export class ConversationTemplateService extends ConversationTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
