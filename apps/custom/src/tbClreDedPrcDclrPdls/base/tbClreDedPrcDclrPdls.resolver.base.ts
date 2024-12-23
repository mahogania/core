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
import { TbClreDedPrcDclrPdls } from "./TbClreDedPrcDclrPdls";
import { TbClreDedPrcDclrPdlsCountArgs } from "./TbClreDedPrcDclrPdlsCountArgs";
import { TbClreDedPrcDclrPdlsFindManyArgs } from "./TbClreDedPrcDclrPdlsFindManyArgs";
import { TbClreDedPrcDclrPdlsFindUniqueArgs } from "./TbClreDedPrcDclrPdlsFindUniqueArgs";
import { CreateTbClreDedPrcDclrPdlsArgs } from "./CreateTbClreDedPrcDclrPdlsArgs";
import { UpdateTbClreDedPrcDclrPdlsArgs } from "./UpdateTbClreDedPrcDclrPdlsArgs";
import { DeleteTbClreDedPrcDclrPdlsArgs } from "./DeleteTbClreDedPrcDclrPdlsArgs";
import { TbClreDedPrcDclrPdlsService } from "../tbClreDedPrcDclrPdls.service";
@graphql.Resolver(() => TbClreDedPrcDclrPdls)
export class TbClreDedPrcDclrPdlsResolverBase {
  constructor(protected readonly service: TbClreDedPrcDclrPdlsService) {}

  async _tbClreDedPrcDclrPdlsItemsMeta(
    @graphql.Args() args: TbClreDedPrcDclrPdlsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TbClreDedPrcDclrPdls])
  async tbClreDedPrcDclrPdlsItems(
    @graphql.Args() args: TbClreDedPrcDclrPdlsFindManyArgs
  ): Promise<TbClreDedPrcDclrPdls[]> {
    return this.service.tbClreDedPrcDclrPdlsItems(args);
  }

  @graphql.Query(() => TbClreDedPrcDclrPdls, { nullable: true })
  async tbClreDedPrcDclrPdls(
    @graphql.Args() args: TbClreDedPrcDclrPdlsFindUniqueArgs
  ): Promise<TbClreDedPrcDclrPdls | null> {
    const result = await this.service.tbClreDedPrcDclrPdls(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TbClreDedPrcDclrPdls)
  async createTbClreDedPrcDclrPdls(
    @graphql.Args() args: CreateTbClreDedPrcDclrPdlsArgs
  ): Promise<TbClreDedPrcDclrPdls> {
    return await this.service.createTbClreDedPrcDclrPdls({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TbClreDedPrcDclrPdls)
  async updateTbClreDedPrcDclrPdls(
    @graphql.Args() args: UpdateTbClreDedPrcDclrPdlsArgs
  ): Promise<TbClreDedPrcDclrPdls | null> {
    try {
      return await this.service.updateTbClreDedPrcDclrPdls({
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

  @graphql.Mutation(() => TbClreDedPrcDclrPdls)
  async deleteTbClreDedPrcDclrPdls(
    @graphql.Args() args: DeleteTbClreDedPrcDclrPdlsArgs
  ): Promise<TbClreDedPrcDclrPdls | null> {
    try {
      return await this.service.deleteTbClreDedPrcDclrPdls(args);
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
