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
import { Option } from "./Option";
import { OptionCountArgs } from "./OptionCountArgs";
import { OptionFindManyArgs } from "./OptionFindManyArgs";
import { OptionFindUniqueArgs } from "./OptionFindUniqueArgs";
import { CreateOptionArgs } from "./CreateOptionArgs";
import { UpdateOptionArgs } from "./UpdateOptionArgs";
import { DeleteOptionArgs } from "./DeleteOptionArgs";
import { Discount } from "../../discount/base/Discount";
import { Feature } from "../../feature/base/Feature";
import { Price } from "../../price/base/Price";
import { Product } from "../../product/base/Product";
import { OptionService } from "../option.service";
@graphql.Resolver(() => Option)
export class OptionResolverBase {
  constructor(protected readonly service: OptionService) {}

  async _optionsMeta(
    @graphql.Args() args: OptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Option])
  async options(@graphql.Args() args: OptionFindManyArgs): Promise<Option[]> {
    return this.service.options(args);
  }

  @graphql.Query(() => Option, { nullable: true })
  async option(
    @graphql.Args() args: OptionFindUniqueArgs
  ): Promise<Option | null> {
    const result = await this.service.option(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Option)
  async createOption(@graphql.Args() args: CreateOptionArgs): Promise<Option> {
    return await this.service.createOption({
      ...args,
      data: {
        ...args.data,

        discount: args.data.discount
          ? {
              connect: args.data.discount,
            }
          : undefined,

        feature: args.data.feature
          ? {
              connect: args.data.feature,
            }
          : undefined,

        price: args.data.price
          ? {
              connect: args.data.price,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Option)
  async updateOption(
    @graphql.Args() args: UpdateOptionArgs
  ): Promise<Option | null> {
    try {
      return await this.service.updateOption({
        ...args,
        data: {
          ...args.data,

          discount: args.data.discount
            ? {
                connect: args.data.discount,
              }
            : undefined,

          feature: args.data.feature
            ? {
                connect: args.data.feature,
              }
            : undefined,

          price: args.data.price
            ? {
                connect: args.data.price,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
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

  @graphql.Mutation(() => Option)
  async deleteOption(
    @graphql.Args() args: DeleteOptionArgs
  ): Promise<Option | null> {
    try {
      return await this.service.deleteOption(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Discount, {
    nullable: true,
    name: "discount",
  })
  async getDiscount(
    @graphql.Parent() parent: Option
  ): Promise<Discount | null> {
    const result = await this.service.getDiscount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Feature, {
    nullable: true,
    name: "feature",
  })
  async getFeature(@graphql.Parent() parent: Option): Promise<Feature | null> {
    const result = await this.service.getFeature(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Price, {
    nullable: true,
    name: "price",
  })
  async getPrice(@graphql.Parent() parent: Option): Promise<Price | null> {
    const result = await this.service.getPrice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(@graphql.Parent() parent: Option): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
