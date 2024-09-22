import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationActorsServiceBase } from "./base/conversationActors.service.base";

@Injectable()
export class ConversationActorsService extends ConversationActorsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
