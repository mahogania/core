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
import { ClreDedPrcDclr } from "./ClreDedPrcDclr";
import { ClreDedPrcDclrCountArgs } from "./ClreDedPrcDclrCountArgs";
import { ClreDedPrcDclrFindManyArgs } from "./ClreDedPrcDclrFindManyArgs";
import { ClreDedPrcDclrFindUniqueArgs } from "./ClreDedPrcDclrFindUniqueArgs";
import { CreateClreDedPrcDclrArgs } from "./CreateClreDedPrcDclrArgs";
import { UpdateClreDedPrcDclrArgs } from "./UpdateClreDedPrcDclrArgs";
import { DeleteClreDedPrcDclrArgs } from "./DeleteClreDedPrcDclrArgs";
import { ClreDedPrcDclrService } from "../clreDedPrcDclr.service";
@graphql.Resolver(() => ClreDedPrcDclr)
export class ClreDedPrcDclrResolverBase {
  constructor(protected readonly service: ClreDedPrcDclrService) {}

  async _clreDedPrcDclrsMeta(
    @graphql.Args() args: ClreDedPrcDclrCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClreDedPrcDclr])
  async clreDedPrcDclrs(
    @graphql.Args() args: ClreDedPrcDclrFindManyArgs
  ): Promise<ClreDedPrcDclr[]> {
    return this.service.clreDedPrcDclrs(args);
  }

  @graphql.Query(() => ClreDedPrcDclr, { nullable: true })
  async clreDedPrcDclr(
    @graphql.Args() args: ClreDedPrcDclrFindUniqueArgs
  ): Promise<ClreDedPrcDclr | null> {
    const result = await this.service.clreDedPrcDclr(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClreDedPrcDclr)
  async createClreDedPrcDclr(
    @graphql.Args() args: CreateClreDedPrcDclrArgs
  ): Promise<ClreDedPrcDclr> {
    return await this.service.createClreDedPrcDclr({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClreDedPrcDclr)
  async updateClreDedPrcDclr(
    @graphql.Args() args: UpdateClreDedPrcDclrArgs
  ): Promise<ClreDedPrcDclr | null> {
    try {
      return await this.service.updateClreDedPrcDclr({
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

  @graphql.Mutation(() => ClreDedPrcDclr)
  async deleteClreDedPrcDclr(
    @graphql.Args() args: DeleteClreDedPrcDclrArgs
  ): Promise<ClreDedPrcDclr | null> {
    try {
      return await this.service.deleteClreDedPrcDclr(args);
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