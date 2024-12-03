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
import { Attribute } from "./Attribute";
import { AttributeCountArgs } from "./AttributeCountArgs";
import { AttributeFindManyArgs } from "./AttributeFindManyArgs";
import { AttributeFindUniqueArgs } from "./AttributeFindUniqueArgs";
import { CreateAttributeArgs } from "./CreateAttributeArgs";
import { UpdateAttributeArgs } from "./UpdateAttributeArgs";
import { DeleteAttributeArgs } from "./DeleteAttributeArgs";
import { Fragment } from "../../fragment/base/Fragment";
import { AttributeService } from "../attribute.service";
@graphql.Resolver(() => Attribute)
export class AttributeResolverBase {
  constructor(protected readonly service: AttributeService) {}

  async _attributesMeta(
    @graphql.Args() args: AttributeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Attribute])
  async attributes(
    @graphql.Args() args: AttributeFindManyArgs
  ): Promise<Attribute[]> {
    return this.service.attributes(args);
  }

  @graphql.Query(() => Attribute, { nullable: true })
  async attribute(
    @graphql.Args() args: AttributeFindUniqueArgs
  ): Promise<Attribute | null> {
    const result = await this.service.attribute(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Attribute)
  async createAttribute(
    @graphql.Args() args: CreateAttributeArgs
  ): Promise<Attribute> {
    return await this.service.createAttribute({
      ...args,
      data: {
        ...args.data,

        fragment: args.data.fragment
          ? {
              connect: args.data.fragment,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Attribute)
  async updateAttribute(
    @graphql.Args() args: UpdateAttributeArgs
  ): Promise<Attribute | null> {
    try {
      return await this.service.updateAttribute({
        ...args,
        data: {
          ...args.data,

          fragment: args.data.fragment
            ? {
                connect: args.data.fragment,
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

  @graphql.Mutation(() => Attribute)
  async deleteAttribute(
    @graphql.Args() args: DeleteAttributeArgs
  ): Promise<Attribute | null> {
    try {
      return await this.service.deleteAttribute(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Fragment, {
    nullable: true,
    name: "fragment",
  })
  async getFragment(
    @graphql.Parent() parent: Attribute
  ): Promise<Fragment | null> {
    const result = await this.service.getFragment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
