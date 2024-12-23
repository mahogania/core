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
import { EmployeeInternalWorkHistory } from "./EmployeeInternalWorkHistory";
import { EmployeeInternalWorkHistoryCountArgs } from "./EmployeeInternalWorkHistoryCountArgs";
import { EmployeeInternalWorkHistoryFindManyArgs } from "./EmployeeInternalWorkHistoryFindManyArgs";
import { EmployeeInternalWorkHistoryFindUniqueArgs } from "./EmployeeInternalWorkHistoryFindUniqueArgs";
import { CreateEmployeeInternalWorkHistoryArgs } from "./CreateEmployeeInternalWorkHistoryArgs";
import { UpdateEmployeeInternalWorkHistoryArgs } from "./UpdateEmployeeInternalWorkHistoryArgs";
import { DeleteEmployeeInternalWorkHistoryArgs } from "./DeleteEmployeeInternalWorkHistoryArgs";
import { EmployeeInternalWorkHistoryService } from "../employeeInternalWorkHistory.service";
@graphql.Resolver(() => EmployeeInternalWorkHistory)
export class EmployeeInternalWorkHistoryResolverBase {
  constructor(protected readonly service: EmployeeInternalWorkHistoryService) {}

  async _employeeInternalWorkHistoriesMeta(
    @graphql.Args() args: EmployeeInternalWorkHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeInternalWorkHistory])
  async employeeInternalWorkHistories(
    @graphql.Args() args: EmployeeInternalWorkHistoryFindManyArgs
  ): Promise<EmployeeInternalWorkHistory[]> {
    return this.service.employeeInternalWorkHistories(args);
  }

  @graphql.Query(() => EmployeeInternalWorkHistory, { nullable: true })
  async employeeInternalWorkHistory(
    @graphql.Args() args: EmployeeInternalWorkHistoryFindUniqueArgs
  ): Promise<EmployeeInternalWorkHistory | null> {
    const result = await this.service.employeeInternalWorkHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeInternalWorkHistory)
  async createEmployeeInternalWorkHistory(
    @graphql.Args() args: CreateEmployeeInternalWorkHistoryArgs
  ): Promise<EmployeeInternalWorkHistory> {
    return await this.service.createEmployeeInternalWorkHistory({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmployeeInternalWorkHistory)
  async updateEmployeeInternalWorkHistory(
    @graphql.Args() args: UpdateEmployeeInternalWorkHistoryArgs
  ): Promise<EmployeeInternalWorkHistory | null> {
    try {
      return await this.service.updateEmployeeInternalWorkHistory({
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

  @graphql.Mutation(() => EmployeeInternalWorkHistory)
  async deleteEmployeeInternalWorkHistory(
    @graphql.Args() args: DeleteEmployeeInternalWorkHistoryArgs
  ): Promise<EmployeeInternalWorkHistory | null> {
    try {
      return await this.service.deleteEmployeeInternalWorkHistory(args);
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
