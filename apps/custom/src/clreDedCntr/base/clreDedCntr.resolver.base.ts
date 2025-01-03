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
import { ClreDedCntr } from "./ClreDedCntr";
import { ClreDedCntrCountArgs } from "./ClreDedCntrCountArgs";
import { ClreDedCntrFindManyArgs } from "./ClreDedCntrFindManyArgs";
import { ClreDedCntrFindUniqueArgs } from "./ClreDedCntrFindUniqueArgs";
import { CreateClreDedCntrArgs } from "./CreateClreDedCntrArgs";
import { UpdateClreDedCntrArgs } from "./UpdateClreDedCntrArgs";
import { DeleteClreDedCntrArgs } from "./DeleteClreDedCntrArgs";
import { ClreDedCntrService } from "../clreDedCntr.service";
@graphql.Resolver(() => ClreDedCntr)
export class ClreDedCntrResolverBase {
  constructor(protected readonly service: ClreDedCntrService) {}

  async _clreDedCntrsMeta(
    @graphql.Args() args: ClreDedCntrCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClreDedCntr])
  async clreDedCntrs(
    @graphql.Args() args: ClreDedCntrFindManyArgs
  ): Promise<ClreDedCntr[]> {
    return this.service.clreDedCntrs(args);
  }

  @graphql.Query(() => ClreDedCntr, { nullable: true })
  async clreDedCntr(
    @graphql.Args() args: ClreDedCntrFindUniqueArgs
  ): Promise<ClreDedCntr | null> {
    const result = await this.service.clreDedCntr(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClreDedCntr)
  async createClreDedCntr(
    @graphql.Args() args: CreateClreDedCntrArgs
  ): Promise<ClreDedCntr> {
    return await this.service.createClreDedCntr({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClreDedCntr)
  async updateClreDedCntr(
    @graphql.Args() args: UpdateClreDedCntrArgs
  ): Promise<ClreDedCntr | null> {
    try {
      return await this.service.updateClreDedCntr({
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

  @graphql.Mutation(() => ClreDedCntr)
  async deleteClreDedCntr(
    @graphql.Args() args: DeleteClreDedCntrArgs
  ): Promise<ClreDedCntr | null> {
    try {
      return await this.service.deleteClreDedCntr(args);
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
