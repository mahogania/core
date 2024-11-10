import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignmentRuleServiceBase } from "./base/assignmentRule.service.base";

@Injectable()
export class AssignmentRuleService extends AssignmentRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
