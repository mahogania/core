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
import { Uom } from "./Uom";
import { UomCountArgs } from "./UomCountArgs";
import { UomFindManyArgs } from "./UomFindManyArgs";
import { UomFindUniqueArgs } from "./UomFindUniqueArgs";
import { CreateUomArgs } from "./CreateUomArgs";
import { UpdateUomArgs } from "./UpdateUomArgs";
import { DeleteUomArgs } from "./DeleteUomArgs";
import { UomService } from "../uom.service";
@graphql.Resolver(() => Uom)
export class UomResolverBase {
  constructor(protected readonly service: UomService) {}

  async _uomsMeta(
    @graphql.Args() args: UomCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Uom])
  async uoms(@graphql.Args() args: UomFindManyArgs): Promise<Uom[]> {
    return this.service.uoms(args);
  }

  @graphql.Query(() => Uom, { nullable: true })
  async uom(@graphql.Args() args: UomFindUniqueArgs): Promise<Uom | null> {
    const result = await this.service.uom(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Uom)
  async createUom(@graphql.Args() args: CreateUomArgs): Promise<Uom> {
    return await this.service.createUom({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Uom)
  async updateUom(@graphql.Args() args: UpdateUomArgs): Promise<Uom | null> {
    try {
      return await this.service.updateUom({
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

  @graphql.Mutation(() => Uom)
  async deleteUom(@graphql.Args() args: DeleteUomArgs): Promise<Uom | null> {
    try {
      return await this.service.deleteUom(args);
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
