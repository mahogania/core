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
import { EmployeeExternalWorkHistory } from "./EmployeeExternalWorkHistory";
import { EmployeeExternalWorkHistoryCountArgs } from "./EmployeeExternalWorkHistoryCountArgs";
import { EmployeeExternalWorkHistoryFindManyArgs } from "./EmployeeExternalWorkHistoryFindManyArgs";
import { EmployeeExternalWorkHistoryFindUniqueArgs } from "./EmployeeExternalWorkHistoryFindUniqueArgs";
import { CreateEmployeeExternalWorkHistoryArgs } from "./CreateEmployeeExternalWorkHistoryArgs";
import { UpdateEmployeeExternalWorkHistoryArgs } from "./UpdateEmployeeExternalWorkHistoryArgs";
import { DeleteEmployeeExternalWorkHistoryArgs } from "./DeleteEmployeeExternalWorkHistoryArgs";
import { EmployeeExternalWorkHistoryService } from "../employeeExternalWorkHistory.service";
@graphql.Resolver(() => EmployeeExternalWorkHistory)
export class EmployeeExternalWorkHistoryResolverBase {
  constructor(protected readonly service: EmployeeExternalWorkHistoryService) {}

  async _employeeExternalWorkHistoriesMeta(
    @graphql.Args() args: EmployeeExternalWorkHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeExternalWorkHistory])
  async employeeExternalWorkHistories(
    @graphql.Args() args: EmployeeExternalWorkHistoryFindManyArgs
  ): Promise<EmployeeExternalWorkHistory[]> {
    return this.service.employeeExternalWorkHistories(args);
  }

  @graphql.Query(() => EmployeeExternalWorkHistory, { nullable: true })
  async employeeExternalWorkHistory(
    @graphql.Args() args: EmployeeExternalWorkHistoryFindUniqueArgs
  ): Promise<EmployeeExternalWorkHistory | null> {
    const result = await this.service.employeeExternalWorkHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeExternalWorkHistory)
  async createEmployeeExternalWorkHistory(
    @graphql.Args() args: CreateEmployeeExternalWorkHistoryArgs
  ): Promise<EmployeeExternalWorkHistory> {
    return await this.service.createEmployeeExternalWorkHistory({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmployeeExternalWorkHistory)
  async updateEmployeeExternalWorkHistory(
    @graphql.Args() args: UpdateEmployeeExternalWorkHistoryArgs
  ): Promise<EmployeeExternalWorkHistory | null> {
    try {
      return await this.service.updateEmployeeExternalWorkHistory({
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

  @graphql.Mutation(() => EmployeeExternalWorkHistory)
  async deleteEmployeeExternalWorkHistory(
    @graphql.Args() args: DeleteEmployeeExternalWorkHistoryArgs
  ): Promise<EmployeeExternalWorkHistory | null> {
    try {
      return await this.service.deleteEmployeeExternalWorkHistory(args);
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