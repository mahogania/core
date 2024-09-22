import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestGreetingLocaleServiceBase } from "./base/questGreetingLocale.service.base";

@Injectable()
export class QuestGreetingLocaleService extends QuestGreetingLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
