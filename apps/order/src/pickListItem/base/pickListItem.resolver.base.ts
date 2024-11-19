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
import { PickListItem } from "./PickListItem";
import { PickListItemCountArgs } from "./PickListItemCountArgs";
import { PickListItemFindManyArgs } from "./PickListItemFindManyArgs";
import { PickListItemFindUniqueArgs } from "./PickListItemFindUniqueArgs";
import { CreatePickListItemArgs } from "./CreatePickListItemArgs";
import { UpdatePickListItemArgs } from "./UpdatePickListItemArgs";
import { DeletePickListItemArgs } from "./DeletePickListItemArgs";
import { PickListItemService } from "../pickListItem.service";
@graphql.Resolver(() => PickListItem)
export class PickListItemResolverBase {
  constructor(protected readonly service: PickListItemService) {}

  async _pickListItemsMeta(
    @graphql.Args() args: PickListItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PickListItem])
  async pickListItems(
    @graphql.Args() args: PickListItemFindManyArgs
  ): Promise<PickListItem[]> {
    return this.service.pickListItems(args);
  }

  @graphql.Query(() => PickListItem, { nullable: true })
  async pickListItem(
    @graphql.Args() args: PickListItemFindUniqueArgs
  ): Promise<PickListItem | null> {
    const result = await this.service.pickListItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PickListItem)
  async createPickListItem(
    @graphql.Args() args: CreatePickListItemArgs
  ): Promise<PickListItem> {
    return await this.service.createPickListItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PickListItem)
  async updatePickListItem(
    @graphql.Args() args: UpdatePickListItemArgs
  ): Promise<PickListItem | null> {
    try {
      return await this.service.updatePickListItem({
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

  @graphql.Mutation(() => PickListItem)
  async deletePickListItem(
    @graphql.Args() args: DeletePickListItemArgs
  ): Promise<PickListItem | null> {
    try {
      return await this.service.deletePickListItem(args);
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
