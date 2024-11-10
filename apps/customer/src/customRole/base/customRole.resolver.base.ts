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
import { CustomRole } from "./CustomRole";
import { CustomRoleCountArgs } from "./CustomRoleCountArgs";
import { CustomRoleFindManyArgs } from "./CustomRoleFindManyArgs";
import { CustomRoleFindUniqueArgs } from "./CustomRoleFindUniqueArgs";
import { CreateCustomRoleArgs } from "./CreateCustomRoleArgs";
import { UpdateCustomRoleArgs } from "./UpdateCustomRoleArgs";
import { DeleteCustomRoleArgs } from "./DeleteCustomRoleArgs";
import { CustomRoleService } from "../customRole.service";
@graphql.Resolver(() => CustomRole)
export class CustomRoleResolverBase {
  constructor(protected readonly service: CustomRoleService) {}

  async _customRolesMeta(
    @graphql.Args() args: CustomRoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CustomRole])
  async customRoles(
    @graphql.Args() args: CustomRoleFindManyArgs
  ): Promise<CustomRole[]> {
    return this.service.customRoles(args);
  }

  @graphql.Query(() => CustomRole, { nullable: true })
  async customRole(
    @graphql.Args() args: CustomRoleFindUniqueArgs
  ): Promise<CustomRole | null> {
    const result = await this.service.customRole(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CustomRole)
  async createCustomRole(
    @graphql.Args() args: CreateCustomRoleArgs
  ): Promise<CustomRole> {
    return await this.service.createCustomRole({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CustomRole)
  async updateCustomRole(
    @graphql.Args() args: UpdateCustomRoleArgs
  ): Promise<CustomRole | null> {
    try {
      return await this.service.updateCustomRole({
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

  @graphql.Mutation(() => CustomRole)
  async deleteCustomRole(
    @graphql.Args() args: DeleteCustomRoleArgs
  ): Promise<CustomRole | null> {
    try {
      return await this.service.deleteCustomRole(args);
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
