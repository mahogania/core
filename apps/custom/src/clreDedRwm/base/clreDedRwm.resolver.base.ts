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
import { ClreDedRwm } from "./ClreDedRwm";
import { ClreDedRwmCountArgs } from "./ClreDedRwmCountArgs";
import { ClreDedRwmFindManyArgs } from "./ClreDedRwmFindManyArgs";
import { ClreDedRwmFindUniqueArgs } from "./ClreDedRwmFindUniqueArgs";
import { CreateClreDedRwmArgs } from "./CreateClreDedRwmArgs";
import { UpdateClreDedRwmArgs } from "./UpdateClreDedRwmArgs";
import { DeleteClreDedRwmArgs } from "./DeleteClreDedRwmArgs";
import { ClreDedRwmService } from "../clreDedRwm.service";
@graphql.Resolver(() => ClreDedRwm)
export class ClreDedRwmResolverBase {
  constructor(protected readonly service: ClreDedRwmService) {}

  async _clreDedRwmsMeta(
    @graphql.Args() args: ClreDedRwmCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClreDedRwm])
  async clreDedRwms(
    @graphql.Args() args: ClreDedRwmFindManyArgs
  ): Promise<ClreDedRwm[]> {
    return this.service.clreDedRwms(args);
  }

  @graphql.Query(() => ClreDedRwm, { nullable: true })
  async clreDedRwm(
    @graphql.Args() args: ClreDedRwmFindUniqueArgs
  ): Promise<ClreDedRwm | null> {
    const result = await this.service.clreDedRwm(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClreDedRwm)
  async createClreDedRwm(
    @graphql.Args() args: CreateClreDedRwmArgs
  ): Promise<ClreDedRwm> {
    return await this.service.createClreDedRwm({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClreDedRwm)
  async updateClreDedRwm(
    @graphql.Args() args: UpdateClreDedRwmArgs
  ): Promise<ClreDedRwm | null> {
    try {
      return await this.service.updateClreDedRwm({
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

  @graphql.Mutation(() => ClreDedRwm)
  async deleteClreDedRwm(
    @graphql.Args() args: DeleteClreDedRwmArgs
  ): Promise<ClreDedRwm | null> {
    try {
      return await this.service.deleteClreDedRwm(args);
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
