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
import { Item } from "./Item";
import { ItemCountArgs } from "./ItemCountArgs";
import { ItemFindManyArgs } from "./ItemFindManyArgs";
import { ItemFindUniqueArgs } from "./ItemFindUniqueArgs";
import { CreateItemArgs } from "./CreateItemArgs";
import { UpdateItemArgs } from "./UpdateItemArgs";
import { DeleteItemArgs } from "./DeleteItemArgs";
import { Configuration } from "../../configuration/base/Configuration";
import { Quote } from "../../quote/base/Quote";
import { ItemService } from "../item.service";
@graphql.Resolver(() => Item)
export class ItemResolverBase {
  constructor(protected readonly service: ItemService) {}

  async _itemsMeta(
    @graphql.Args() args: ItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Item])
  async items(@graphql.Args() args: ItemFindManyArgs): Promise<Item[]> {
    return this.service.items(args);
  }

  @graphql.Query(() => Item, { nullable: true })
  async item(@graphql.Args() args: ItemFindUniqueArgs): Promise<Item | null> {
    const result = await this.service.item(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Item)
  async createItem(@graphql.Args() args: CreateItemArgs): Promise<Item> {
    return await this.service.createItem({
      ...args,
      data: {
        ...args.data,

        configuration: args.data.configuration
          ? {
              connect: args.data.configuration,
            }
          : undefined,

        quote: args.data.quote
          ? {
              connect: args.data.quote,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Item)
  async updateItem(@graphql.Args() args: UpdateItemArgs): Promise<Item | null> {
    try {
      return await this.service.updateItem({
        ...args,
        data: {
          ...args.data,

          configuration: args.data.configuration
            ? {
                connect: args.data.configuration,
              }
            : undefined,

          quote: args.data.quote
            ? {
                connect: args.data.quote,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Item)
  async deleteItem(@graphql.Args() args: DeleteItemArgs): Promise<Item | null> {
    try {
      return await this.service.deleteItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Configuration, {
    nullable: true,
    name: "configuration",
  })
  async getConfiguration(
    @graphql.Parent() parent: Item
  ): Promise<Configuration | null> {
    const result = await this.service.getConfiguration(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Quote, {
    nullable: true,
    name: "quote",
  })
  async getQuote(@graphql.Parent() parent: Item): Promise<Quote | null> {
    const result = await this.service.getQuote(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
