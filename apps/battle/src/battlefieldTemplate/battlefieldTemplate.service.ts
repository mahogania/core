import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BattlefieldTemplateServiceBase } from "./base/battlefieldTemplate.service.base";

@Injectable()
export class BattlefieldTemplateService extends BattlefieldTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
