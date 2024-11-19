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
import { PickList } from "./PickList";
import { PickListCountArgs } from "./PickListCountArgs";
import { PickListFindManyArgs } from "./PickListFindManyArgs";
import { PickListFindUniqueArgs } from "./PickListFindUniqueArgs";
import { CreatePickListArgs } from "./CreatePickListArgs";
import { UpdatePickListArgs } from "./UpdatePickListArgs";
import { DeletePickListArgs } from "./DeletePickListArgs";
import { PickListService } from "../pickList.service";
@graphql.Resolver(() => PickList)
export class PickListResolverBase {
  constructor(protected readonly service: PickListService) {}

  async _pickListsMeta(
    @graphql.Args() args: PickListCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PickList])
  async pickLists(
    @graphql.Args() args: PickListFindManyArgs
  ): Promise<PickList[]> {
    return this.service.pickLists(args);
  }

  @graphql.Query(() => PickList, { nullable: true })
  async pickList(
    @graphql.Args() args: PickListFindUniqueArgs
  ): Promise<PickList | null> {
    const result = await this.service.pickList(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PickList)
  async createPickList(
    @graphql.Args() args: CreatePickListArgs
  ): Promise<PickList> {
    return await this.service.createPickList({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PickList)
  async updatePickList(
    @graphql.Args() args: UpdatePickListArgs
  ): Promise<PickList | null> {
    try {
      return await this.service.updatePickList({
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

  @graphql.Mutation(() => PickList)
  async deletePickList(
    @graphql.Args() args: DeletePickListArgs
  ): Promise<PickList | null> {
    try {
      return await this.service.deletePickList(args);
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