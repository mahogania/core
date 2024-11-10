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
import { PurchaseTaxesAndChargesTemplate } from "./PurchaseTaxesAndChargesTemplate";
import { PurchaseTaxesAndChargesTemplateCountArgs } from "./PurchaseTaxesAndChargesTemplateCountArgs";
import { PurchaseTaxesAndChargesTemplateFindManyArgs } from "./PurchaseTaxesAndChargesTemplateFindManyArgs";
import { PurchaseTaxesAndChargesTemplateFindUniqueArgs } from "./PurchaseTaxesAndChargesTemplateFindUniqueArgs";
import { CreatePurchaseTaxesAndChargesTemplateArgs } from "./CreatePurchaseTaxesAndChargesTemplateArgs";
import { UpdatePurchaseTaxesAndChargesTemplateArgs } from "./UpdatePurchaseTaxesAndChargesTemplateArgs";
import { DeletePurchaseTaxesAndChargesTemplateArgs } from "./DeletePurchaseTaxesAndChargesTemplateArgs";
import { PurchaseTaxesAndChargesTemplateService } from "../purchaseTaxesAndChargesTemplate.service";
@graphql.Resolver(() => PurchaseTaxesAndChargesTemplate)
export class PurchaseTaxesAndChargesTemplateResolverBase {
  constructor(
    protected readonly service: PurchaseTaxesAndChargesTemplateService
  ) {}

  async _purchaseTaxesAndChargesTemplatesMeta(
    @graphql.Args() args: PurchaseTaxesAndChargesTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PurchaseTaxesAndChargesTemplate])
  async purchaseTaxesAndChargesTemplates(
    @graphql.Args() args: PurchaseTaxesAndChargesTemplateFindManyArgs
  ): Promise<PurchaseTaxesAndChargesTemplate[]> {
    return this.service.purchaseTaxesAndChargesTemplates(args);
  }

  @graphql.Query(() => PurchaseTaxesAndChargesTemplate, { nullable: true })
  async purchaseTaxesAndChargesTemplate(
    @graphql.Args() args: PurchaseTaxesAndChargesTemplateFindUniqueArgs
  ): Promise<PurchaseTaxesAndChargesTemplate | null> {
    const result = await this.service.purchaseTaxesAndChargesTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PurchaseTaxesAndChargesTemplate)
  async createPurchaseTaxesAndChargesTemplate(
    @graphql.Args() args: CreatePurchaseTaxesAndChargesTemplateArgs
  ): Promise<PurchaseTaxesAndChargesTemplate> {
    return await this.service.createPurchaseTaxesAndChargesTemplate({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PurchaseTaxesAndChargesTemplate)
  async updatePurchaseTaxesAndChargesTemplate(
    @graphql.Args() args: UpdatePurchaseTaxesAndChargesTemplateArgs
  ): Promise<PurchaseTaxesAndChargesTemplate | null> {
    try {
      return await this.service.updatePurchaseTaxesAndChargesTemplate({
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

  @graphql.Mutation(() => PurchaseTaxesAndChargesTemplate)
  async deletePurchaseTaxesAndChargesTemplate(
    @graphql.Args() args: DeletePurchaseTaxesAndChargesTemplateArgs
  ): Promise<PurchaseTaxesAndChargesTemplate | null> {
    try {
      return await this.service.deletePurchaseTaxesAndChargesTemplate(args);
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
