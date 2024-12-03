import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthorizationRuleServiceBase } from "./base/authorizationRule.service.base";

@Injectable()
export class AuthorizationRuleService extends AuthorizationRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
