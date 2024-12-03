import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignmentRuleDayServiceBase } from "./base/assignmentRuleDay.service.base";

@Injectable()
export class AssignmentRuleDayService extends AssignmentRuleDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
