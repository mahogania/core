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
import { PosCustomerGroup } from "./PosCustomerGroup";
import { PosCustomerGroupCountArgs } from "./PosCustomerGroupCountArgs";
import { PosCustomerGroupFindManyArgs } from "./PosCustomerGroupFindManyArgs";
import { PosCustomerGroupFindUniqueArgs } from "./PosCustomerGroupFindUniqueArgs";
import { CreatePosCustomerGroupArgs } from "./CreatePosCustomerGroupArgs";
import { UpdatePosCustomerGroupArgs } from "./UpdatePosCustomerGroupArgs";
import { DeletePosCustomerGroupArgs } from "./DeletePosCustomerGroupArgs";
import { PosCustomerGroupService } from "../posCustomerGroup.service";
@graphql.Resolver(() => PosCustomerGroup)
export class PosCustomerGroupResolverBase {
  constructor(protected readonly service: PosCustomerGroupService) {}

  async _posCustomerGroupsMeta(
    @graphql.Args() args: PosCustomerGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PosCustomerGroup])
  async posCustomerGroups(
    @graphql.Args() args: PosCustomerGroupFindManyArgs
  ): Promise<PosCustomerGroup[]> {
    return this.service.posCustomerGroups(args);
  }

  @graphql.Query(() => PosCustomerGroup, { nullable: true })
  async posCustomerGroup(
    @graphql.Args() args: PosCustomerGroupFindUniqueArgs
  ): Promise<PosCustomerGroup | null> {
    const result = await this.service.posCustomerGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PosCustomerGroup)
  async createPosCustomerGroup(
    @graphql.Args() args: CreatePosCustomerGroupArgs
  ): Promise<PosCustomerGroup> {
    return await this.service.createPosCustomerGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PosCustomerGroup)
  async updatePosCustomerGroup(
    @graphql.Args() args: UpdatePosCustomerGroupArgs
  ): Promise<PosCustomerGroup | null> {
    try {
      return await this.service.updatePosCustomerGroup({
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

  @graphql.Mutation(() => PosCustomerGroup)
  async deletePosCustomerGroup(
    @graphql.Args() args: DeletePosCustomerGroupArgs
  ): Promise<PosCustomerGroup | null> {
    try {
      return await this.service.deletePosCustomerGroup(args);
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
