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
import { ShipmentParcelTemplate } from "./ShipmentParcelTemplate";
import { ShipmentParcelTemplateCountArgs } from "./ShipmentParcelTemplateCountArgs";
import { ShipmentParcelTemplateFindManyArgs } from "./ShipmentParcelTemplateFindManyArgs";
import { ShipmentParcelTemplateFindUniqueArgs } from "./ShipmentParcelTemplateFindUniqueArgs";
import { CreateShipmentParcelTemplateArgs } from "./CreateShipmentParcelTemplateArgs";
import { UpdateShipmentParcelTemplateArgs } from "./UpdateShipmentParcelTemplateArgs";
import { DeleteShipmentParcelTemplateArgs } from "./DeleteShipmentParcelTemplateArgs";
import { ShipmentParcelTemplateService } from "../shipmentParcelTemplate.service";
@graphql.Resolver(() => ShipmentParcelTemplate)
export class ShipmentParcelTemplateResolverBase {
  constructor(protected readonly service: ShipmentParcelTemplateService) {}

  async _shipmentParcelTemplatesMeta(
    @graphql.Args() args: ShipmentParcelTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ShipmentParcelTemplate])
  async shipmentParcelTemplates(
    @graphql.Args() args: ShipmentParcelTemplateFindManyArgs
  ): Promise<ShipmentParcelTemplate[]> {
    return this.service.shipmentParcelTemplates(args);
  }

  @graphql.Query(() => ShipmentParcelTemplate, { nullable: true })
  async shipmentParcelTemplate(
    @graphql.Args() args: ShipmentParcelTemplateFindUniqueArgs
  ): Promise<ShipmentParcelTemplate | null> {
    const result = await this.service.shipmentParcelTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ShipmentParcelTemplate)
  async createShipmentParcelTemplate(
    @graphql.Args() args: CreateShipmentParcelTemplateArgs
  ): Promise<ShipmentParcelTemplate> {
    return await this.service.createShipmentParcelTemplate({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ShipmentParcelTemplate)
  async updateShipmentParcelTemplate(
    @graphql.Args() args: UpdateShipmentParcelTemplateArgs
  ): Promise<ShipmentParcelTemplate | null> {
    try {
      return await this.service.updateShipmentParcelTemplate({
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

  @graphql.Mutation(() => ShipmentParcelTemplate)
  async deleteShipmentParcelTemplate(
    @graphql.Args() args: DeleteShipmentParcelTemplateArgs
  ): Promise<ShipmentParcelTemplate | null> {
    try {
      return await this.service.deleteShipmentParcelTemplate(args);
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
