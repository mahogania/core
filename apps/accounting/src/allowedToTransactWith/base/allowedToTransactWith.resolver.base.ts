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
import { AllowedToTransactWith } from "./AllowedToTransactWith";
import { AllowedToTransactWithCountArgs } from "./AllowedToTransactWithCountArgs";
import { AllowedToTransactWithFindManyArgs } from "./AllowedToTransactWithFindManyArgs";
import { AllowedToTransactWithFindUniqueArgs } from "./AllowedToTransactWithFindUniqueArgs";
import { CreateAllowedToTransactWithArgs } from "./CreateAllowedToTransactWithArgs";
import { UpdateAllowedToTransactWithArgs } from "./UpdateAllowedToTransactWithArgs";
import { DeleteAllowedToTransactWithArgs } from "./DeleteAllowedToTransactWithArgs";
import { AllowedToTransactWithService } from "../allowedToTransactWith.service";
@graphql.Resolver(() => AllowedToTransactWith)
export class AllowedToTransactWithResolverBase {
  constructor(protected readonly service: AllowedToTransactWithService) {}

  async _allowedToTransactWithsMeta(
    @graphql.Args() args: AllowedToTransactWithCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AllowedToTransactWith])
  async allowedToTransactWiths(
    @graphql.Args() args: AllowedToTransactWithFindManyArgs
  ): Promise<AllowedToTransactWith[]> {
    return this.service.allowedToTransactWiths(args);
  }

  @graphql.Query(() => AllowedToTransactWith, { nullable: true })
  async allowedToTransactWith(
    @graphql.Args() args: AllowedToTransactWithFindUniqueArgs
  ): Promise<AllowedToTransactWith | null> {
    const result = await this.service.allowedToTransactWith(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AllowedToTransactWith)
  async createAllowedToTransactWith(
    @graphql.Args() args: CreateAllowedToTransactWithArgs
  ): Promise<AllowedToTransactWith> {
    return await this.service.createAllowedToTransactWith({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AllowedToTransactWith)
  async updateAllowedToTransactWith(
    @graphql.Args() args: UpdateAllowedToTransactWithArgs
  ): Promise<AllowedToTransactWith | null> {
    try {
      return await this.service.updateAllowedToTransactWith({
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

  @graphql.Mutation(() => AllowedToTransactWith)
  async deleteAllowedToTransactWith(
    @graphql.Args() args: DeleteAllowedToTransactWithArgs
  ): Promise<AllowedToTransactWith | null> {
    try {
      return await this.service.deleteAllowedToTransactWith(args);
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
