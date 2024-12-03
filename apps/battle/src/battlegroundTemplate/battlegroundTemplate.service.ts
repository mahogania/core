import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BattlegroundTemplateServiceBase } from "./base/battlegroundTemplate.service.base";

@Injectable()
export class BattlegroundTemplateService extends BattlegroundTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
