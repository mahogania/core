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
import { CustomHtmlBlock } from "./CustomHtmlBlock";
import { CustomHtmlBlockCountArgs } from "./CustomHtmlBlockCountArgs";
import { CustomHtmlBlockFindManyArgs } from "./CustomHtmlBlockFindManyArgs";
import { CustomHtmlBlockFindUniqueArgs } from "./CustomHtmlBlockFindUniqueArgs";
import { CreateCustomHtmlBlockArgs } from "./CreateCustomHtmlBlockArgs";
import { UpdateCustomHtmlBlockArgs } from "./UpdateCustomHtmlBlockArgs";
import { DeleteCustomHtmlBlockArgs } from "./DeleteCustomHtmlBlockArgs";
import { CustomHtmlBlockService } from "../customHtmlBlock.service";
@graphql.Resolver(() => CustomHtmlBlock)
export class CustomHtmlBlockResolverBase {
  constructor(protected readonly service: CustomHtmlBlockService) {}

  async _customHtmlBlocksMeta(
    @graphql.Args() args: CustomHtmlBlockCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CustomHtmlBlock])
  async customHtmlBlocks(
    @graphql.Args() args: CustomHtmlBlockFindManyArgs
  ): Promise<CustomHtmlBlock[]> {
    return this.service.customHtmlBlocks(args);
  }

  @graphql.Query(() => CustomHtmlBlock, { nullable: true })
  async customHtmlBlock(
    @graphql.Args() args: CustomHtmlBlockFindUniqueArgs
  ): Promise<CustomHtmlBlock | null> {
    const result = await this.service.customHtmlBlock(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CustomHtmlBlock)
  async createCustomHtmlBlock(
    @graphql.Args() args: CreateCustomHtmlBlockArgs
  ): Promise<CustomHtmlBlock> {
    return await this.service.createCustomHtmlBlock({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CustomHtmlBlock)
  async updateCustomHtmlBlock(
    @graphql.Args() args: UpdateCustomHtmlBlockArgs
  ): Promise<CustomHtmlBlock | null> {
    try {
      return await this.service.updateCustomHtmlBlock({
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

  @graphql.Mutation(() => CustomHtmlBlock)
  async deleteCustomHtmlBlock(
    @graphql.Args() args: DeleteCustomHtmlBlockArgs
  ): Promise<CustomHtmlBlock | null> {
    try {
      return await this.service.deleteCustomHtmlBlock(args);
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
