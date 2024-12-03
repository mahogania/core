import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignmentRuleUserServiceBase } from "./base/assignmentRuleUser.service.base";

@Injectable()
export class AssignmentRuleUserService extends AssignmentRuleUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
