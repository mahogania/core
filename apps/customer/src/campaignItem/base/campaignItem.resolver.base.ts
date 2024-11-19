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
import { CampaignItem } from "./CampaignItem";
import { CampaignItemCountArgs } from "./CampaignItemCountArgs";
import { CampaignItemFindManyArgs } from "./CampaignItemFindManyArgs";
import { CampaignItemFindUniqueArgs } from "./CampaignItemFindUniqueArgs";
import { CreateCampaignItemArgs } from "./CreateCampaignItemArgs";
import { UpdateCampaignItemArgs } from "./UpdateCampaignItemArgs";
import { DeleteCampaignItemArgs } from "./DeleteCampaignItemArgs";
import { CampaignItemService } from "../campaignItem.service";
@graphql.Resolver(() => CampaignItem)
export class CampaignItemResolverBase {
  constructor(protected readonly service: CampaignItemService) {}

  async _campaignItemsMeta(
    @graphql.Args() args: CampaignItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CampaignItem])
  async campaignItems(
    @graphql.Args() args: CampaignItemFindManyArgs
  ): Promise<CampaignItem[]> {
    return this.service.campaignItems(args);
  }

  @graphql.Query(() => CampaignItem, { nullable: true })
  async campaignItem(
    @graphql.Args() args: CampaignItemFindUniqueArgs
  ): Promise<CampaignItem | null> {
    const result = await this.service.campaignItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CampaignItem)
  async createCampaignItem(
    @graphql.Args() args: CreateCampaignItemArgs
  ): Promise<CampaignItem> {
    return await this.service.createCampaignItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CampaignItem)
  async updateCampaignItem(
    @graphql.Args() args: UpdateCampaignItemArgs
  ): Promise<CampaignItem | null> {
    try {
      return await this.service.updateCampaignItem({
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

  @graphql.Mutation(() => CampaignItem)
  async deleteCampaignItem(
    @graphql.Args() args: DeleteCampaignItemArgs
  ): Promise<CampaignItem | null> {
    try {
      return await this.service.deleteCampaignItem(args);
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