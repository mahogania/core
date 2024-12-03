import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestGreetingServiceBase } from "./base/questGreeting.service.base";

@Injectable()
export class QuestGreetingService extends QuestGreetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
