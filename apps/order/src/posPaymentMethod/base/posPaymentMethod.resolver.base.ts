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
import { PosPaymentMethod } from "./PosPaymentMethod";
import { PosPaymentMethodCountArgs } from "./PosPaymentMethodCountArgs";
import { PosPaymentMethodFindManyArgs } from "./PosPaymentMethodFindManyArgs";
import { PosPaymentMethodFindUniqueArgs } from "./PosPaymentMethodFindUniqueArgs";
import { CreatePosPaymentMethodArgs } from "./CreatePosPaymentMethodArgs";
import { UpdatePosPaymentMethodArgs } from "./UpdatePosPaymentMethodArgs";
import { DeletePosPaymentMethodArgs } from "./DeletePosPaymentMethodArgs";
import { PosPaymentMethodService } from "../posPaymentMethod.service";
@graphql.Resolver(() => PosPaymentMethod)
export class PosPaymentMethodResolverBase {
  constructor(protected readonly service: PosPaymentMethodService) {}

  async _posPaymentMethodsMeta(
    @graphql.Args() args: PosPaymentMethodCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PosPaymentMethod])
  async posPaymentMethods(
    @graphql.Args() args: PosPaymentMethodFindManyArgs
  ): Promise<PosPaymentMethod[]> {
    return this.service.posPaymentMethods(args);
  }

  @graphql.Query(() => PosPaymentMethod, { nullable: true })
  async posPaymentMethod(
    @graphql.Args() args: PosPaymentMethodFindUniqueArgs
  ): Promise<PosPaymentMethod | null> {
    const result = await this.service.posPaymentMethod(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PosPaymentMethod)
  async createPosPaymentMethod(
    @graphql.Args() args: CreatePosPaymentMethodArgs
  ): Promise<PosPaymentMethod> {
    return await this.service.createPosPaymentMethod({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PosPaymentMethod)
  async updatePosPaymentMethod(
    @graphql.Args() args: UpdatePosPaymentMethodArgs
  ): Promise<PosPaymentMethod | null> {
    try {
      return await this.service.updatePosPaymentMethod({
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

  @graphql.Mutation(() => PosPaymentMethod)
  async deletePosPaymentMethod(
    @graphql.Args() args: DeletePosPaymentMethodArgs
  ): Promise<PosPaymentMethod | null> {
    try {
      return await this.service.deletePosPaymentMethod(args);
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
