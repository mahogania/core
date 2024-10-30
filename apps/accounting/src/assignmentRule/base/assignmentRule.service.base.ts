/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AssignmentRule as PrismaAssignmentRule } from "@prisma/client";

export class AssignmentRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssignmentRuleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assignmentRule.count(args);
  }

  async assignmentRules(
    args: Prisma.AssignmentRuleFindManyArgs
  ): Promise<PrismaAssignmentRule[]> {
    return this.prisma.assignmentRule.findMany(args);
  }
  async assignmentRule(
    args: Prisma.AssignmentRuleFindUniqueArgs
  ): Promise<PrismaAssignmentRule | null> {
    return this.prisma.assignmentRule.findUnique(args);
  }
  async createAssignmentRule(
    args: Prisma.AssignmentRuleCreateArgs
  ): Promise<PrismaAssignmentRule> {
    return this.prisma.assignmentRule.create(args);
  }
  async updateAssignmentRule(
    args: Prisma.AssignmentRuleUpdateArgs
  ): Promise<PrismaAssignmentRule> {
    return this.prisma.assignmentRule.update(args);
  }
  async deleteAssignmentRule(
    args: Prisma.AssignmentRuleDeleteArgs
  ): Promise<PrismaAssignmentRule> {
    return this.prisma.assignmentRule.delete(args);
  }
}
