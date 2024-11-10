import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailRuleServiceBase } from "./base/emailRule.service.base";

@Injectable()
export class EmailRuleService extends EmailRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
