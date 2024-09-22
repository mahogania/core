import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestDescriptionConditionalServiceBase } from "./base/questDescriptionConditional.service.base";

@Injectable()
export class QuestDescriptionConditionalService extends QuestDescriptionConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
