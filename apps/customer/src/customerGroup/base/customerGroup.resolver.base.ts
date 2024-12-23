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
import { CustomerGroup } from "./CustomerGroup";
import { CustomerGroupCountArgs } from "./CustomerGroupCountArgs";
import { CustomerGroupFindManyArgs } from "./CustomerGroupFindManyArgs";
import { CustomerGroupFindUniqueArgs } from "./CustomerGroupFindUniqueArgs";
import { CreateCustomerGroupArgs } from "./CreateCustomerGroupArgs";
import { UpdateCustomerGroupArgs } from "./UpdateCustomerGroupArgs";
import { DeleteCustomerGroupArgs } from "./DeleteCustomerGroupArgs";
import { CustomerGroupService } from "../customerGroup.service";
@graphql.Resolver(() => CustomerGroup)
export class CustomerGroupResolverBase {
  constructor(protected readonly service: CustomerGroupService) {}

  async _customerGroupsMeta(
    @graphql.Args() args: CustomerGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CustomerGroup])
  async customerGroups(
    @graphql.Args() args: CustomerGroupFindManyArgs
  ): Promise<CustomerGroup[]> {
    return this.service.customerGroups(args);
  }

  @graphql.Query(() => CustomerGroup, { nullable: true })
  async customerGroup(
    @graphql.Args() args: CustomerGroupFindUniqueArgs
  ): Promise<CustomerGroup | null> {
    const result = await this.service.customerGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CustomerGroup)
  async createCustomerGroup(
    @graphql.Args() args: CreateCustomerGroupArgs
  ): Promise<CustomerGroup> {
    return await this.service.createCustomerGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CustomerGroup)
  async updateCustomerGroup(
    @graphql.Args() args: UpdateCustomerGroupArgs
  ): Promise<CustomerGroup | null> {
    try {
      return await this.service.updateCustomerGroup({
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

  @graphql.Mutation(() => CustomerGroup)
  async deleteCustomerGroup(
    @graphql.Args() args: DeleteCustomerGroupArgs
  ): Promise<CustomerGroup | null> {
    try {
      return await this.service.deleteCustomerGroup(args);
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
