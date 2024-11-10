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
import { EmployeeGroup } from "./EmployeeGroup";
import { EmployeeGroupCountArgs } from "./EmployeeGroupCountArgs";
import { EmployeeGroupFindManyArgs } from "./EmployeeGroupFindManyArgs";
import { EmployeeGroupFindUniqueArgs } from "./EmployeeGroupFindUniqueArgs";
import { CreateEmployeeGroupArgs } from "./CreateEmployeeGroupArgs";
import { UpdateEmployeeGroupArgs } from "./UpdateEmployeeGroupArgs";
import { DeleteEmployeeGroupArgs } from "./DeleteEmployeeGroupArgs";
import { EmployeeGroupService } from "../employeeGroup.service";
@graphql.Resolver(() => EmployeeGroup)
export class EmployeeGroupResolverBase {
  constructor(protected readonly service: EmployeeGroupService) {}

  async _employeeGroupsMeta(
    @graphql.Args() args: EmployeeGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeGroup])
  async employeeGroups(
    @graphql.Args() args: EmployeeGroupFindManyArgs
  ): Promise<EmployeeGroup[]> {
    return this.service.employeeGroups(args);
  }

  @graphql.Query(() => EmployeeGroup, { nullable: true })
  async employeeGroup(
    @graphql.Args() args: EmployeeGroupFindUniqueArgs
  ): Promise<EmployeeGroup | null> {
    const result = await this.service.employeeGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeGroup)
  async createEmployeeGroup(
    @graphql.Args() args: CreateEmployeeGroupArgs
  ): Promise<EmployeeGroup> {
    return await this.service.createEmployeeGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmployeeGroup)
  async updateEmployeeGroup(
    @graphql.Args() args: UpdateEmployeeGroupArgs
  ): Promise<EmployeeGroup | null> {
    try {
      return await this.service.updateEmployeeGroup({
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

  @graphql.Mutation(() => EmployeeGroup)
  async deleteEmployeeGroup(
    @graphql.Args() args: DeleteEmployeeGroupArgs
  ): Promise<EmployeeGroup | null> {
    try {
      return await this.service.deleteEmployeeGroup(args);
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