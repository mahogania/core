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
import { Catalog } from "./Catalog";
import { CatalogCountArgs } from "./CatalogCountArgs";
import { CatalogFindManyArgs } from "./CatalogFindManyArgs";
import { CatalogFindUniqueArgs } from "./CatalogFindUniqueArgs";
import { CreateCatalogArgs } from "./CreateCatalogArgs";
import { UpdateCatalogArgs } from "./UpdateCatalogArgs";
import { DeleteCatalogArgs } from "./DeleteCatalogArgs";
import { ConfigurationFindManyArgs } from "../../configuration/base/ConfigurationFindManyArgs";
import { Configuration } from "../../configuration/base/Configuration";
import { Unit } from "../../unit/base/Unit";
import { CatalogService } from "../catalog.service";
@graphql.Resolver(() => Catalog)
export class CatalogResolverBase {
  constructor(protected readonly service: CatalogService) {}

  async _catalogsMeta(
    @graphql.Args() args: CatalogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Catalog])
  async catalogs(
    @graphql.Args() args: CatalogFindManyArgs
  ): Promise<Catalog[]> {
    return this.service.catalogs(args);
  }

  @graphql.Query(() => Catalog, { nullable: true })
  async catalog(
    @graphql.Args() args: CatalogFindUniqueArgs
  ): Promise<Catalog | null> {
    const result = await this.service.catalog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Catalog)
  async createCatalog(
    @graphql.Args() args: CreateCatalogArgs
  ): Promise<Catalog> {
    return await this.service.createCatalog({
      ...args,
      data: {
        ...args.data,

        unit: args.data.unit
          ? {
              connect: args.data.unit,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Catalog)
  async updateCatalog(
    @graphql.Args() args: UpdateCatalogArgs
  ): Promise<Catalog | null> {
    try {
      return await this.service.updateCatalog({
        ...args,
        data: {
          ...args.data,

          unit: args.data.unit
            ? {
                connect: args.data.unit,
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

  @graphql.Mutation(() => Catalog)
  async deleteCatalog(
    @graphql.Args() args: DeleteCatalogArgs
  ): Promise<Catalog | null> {
    try {
      return await this.service.deleteCatalog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Configuration], { name: "configurations" })
  async findConfigurations(
    @graphql.Parent() parent: Catalog,
    @graphql.Args() args: ConfigurationFindManyArgs
  ): Promise<Configuration[]> {
    const results = await this.service.findConfigurations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Unit, {
    nullable: true,
    name: "unit",
  })
  async getUnit(@graphql.Parent() parent: Catalog): Promise<Unit | null> {
    const result = await this.service.getUnit(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}