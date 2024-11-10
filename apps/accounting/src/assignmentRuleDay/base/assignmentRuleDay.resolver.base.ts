/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AssignmentRuleDay } from "./AssignmentRuleDay";
import { AssignmentRuleDayCountArgs } from "./AssignmentRuleDayCountArgs";
import { AssignmentRuleDayFindManyArgs } from "./AssignmentRuleDayFindManyArgs";
import { AssignmentRuleDayFindUniqueArgs } from "./AssignmentRuleDayFindUniqueArgs";
import { CreateAssignmentRuleDayArgs } from "./CreateAssignmentRuleDayArgs";
import { UpdateAssignmentRuleDayArgs } from "./UpdateAssignmentRuleDayArgs";
import { DeleteAssignmentRuleDayArgs } from "./DeleteAssignmentRuleDayArgs";
import { AssignmentRuleDayService } from "../assignmentRuleDay.service";
@graphql.Resolver(() => AssignmentRuleDay)
export class AssignmentRuleDayResolverBase {
  constructor(protected readonly service: AssignmentRuleDayService) {}

  async _assignmentRuleDaysMeta(
    @graphql.Args() args: AssignmentRuleDayCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssignmentRuleDay])
  async assignmentRuleDays(
    @graphql.Args() args: AssignmentRuleDayFindManyArgs
  ): Promise<AssignmentRuleDay[]> {
    return this.service.assignmentRuleDays(args);
  }

  @graphql.Query(() => AssignmentRuleDay, { nullable: true })
  async assignmentRuleDay(
    @graphql.Args() args: AssignmentRuleDayFindUniqueArgs
  ): Promise<AssignmentRuleDay | null> {
    const result = await this.service.assignmentRuleDay(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssignmentRuleDay)
  async createAssignmentRuleDay(
    @graphql.Args() args: CreateAssignmentRuleDayArgs
  ): Promise<AssignmentRuleDay> {
    return await this.service.createAssignmentRuleDay({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssignmentRuleDay)
  async updateAssignmentRuleDay(
    @graphql.Args() args: UpdateAssignmentRuleDayArgs
  ): Promise<AssignmentRuleDay | null> {
    try {
      return await this.service.updateAssignmentRuleDay({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AssignmentRuleDay)
  async deleteAssignmentRuleDay(
    @graphql.Args() args: DeleteAssignmentRuleDayArgs
  ): Promise<AssignmentRuleDay | null> {
    try {
      return await this.service.deleteAssignmentRuleDay(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
