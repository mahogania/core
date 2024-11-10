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
import { ItemTaxTemplate } from "./ItemTaxTemplate";
import { ItemTaxTemplateCountArgs } from "./ItemTaxTemplateCountArgs";
import { ItemTaxTemplateFindManyArgs } from "./ItemTaxTemplateFindManyArgs";
import { ItemTaxTemplateFindUniqueArgs } from "./ItemTaxTemplateFindUniqueArgs";
import { CreateItemTaxTemplateArgs } from "./CreateItemTaxTemplateArgs";
import { UpdateItemTaxTemplateArgs } from "./UpdateItemTaxTemplateArgs";
import { DeleteItemTaxTemplateArgs } from "./DeleteItemTaxTemplateArgs";
import { ItemTaxTemplateService } from "../itemTaxTemplate.service";
@graphql.Resolver(() => ItemTaxTemplate)
export class ItemTaxTemplateResolverBase {
  constructor(protected readonly service: ItemTaxTemplateService) {}

  async _itemTaxTemplatesMeta(
    @graphql.Args() args: ItemTaxTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ItemTaxTemplate])
  async itemTaxTemplates(
    @graphql.Args() args: ItemTaxTemplateFindManyArgs
  ): Promise<ItemTaxTemplate[]> {
    return this.service.itemTaxTemplates(args);
  }

  @graphql.Query(() => ItemTaxTemplate, { nullable: true })
  async itemTaxTemplate(
    @graphql.Args() args: ItemTaxTemplateFindUniqueArgs
  ): Promise<ItemTaxTemplate | null> {
    const result = await this.service.itemTaxTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ItemTaxTemplate)
  async createItemTaxTemplate(
    @graphql.Args() args: CreateItemTaxTemplateArgs
  ): Promise<ItemTaxTemplate> {
    return await this.service.createItemTaxTemplate({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ItemTaxTemplate)
  async updateItemTaxTemplate(
    @graphql.Args() args: UpdateItemTaxTemplateArgs
  ): Promise<ItemTaxTemplate | null> {
    try {
      return await this.service.updateItemTaxTemplate({
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

  @graphql.Mutation(() => ItemTaxTemplate)
  async deleteItemTaxTemplate(
    @graphql.Args() args: DeleteItemTaxTemplateArgs
  ): Promise<ItemTaxTemplate | null> {
    try {
      return await this.service.deleteItemTaxTemplate(args);
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