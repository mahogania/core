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
import { SubcontractingBom } from "./SubcontractingBom";
import { SubcontractingBomCountArgs } from "./SubcontractingBomCountArgs";
import { SubcontractingBomFindManyArgs } from "./SubcontractingBomFindManyArgs";
import { SubcontractingBomFindUniqueArgs } from "./SubcontractingBomFindUniqueArgs";
import { CreateSubcontractingBomArgs } from "./CreateSubcontractingBomArgs";
import { UpdateSubcontractingBomArgs } from "./UpdateSubcontractingBomArgs";
import { DeleteSubcontractingBomArgs } from "./DeleteSubcontractingBomArgs";
import { SubcontractingBomService } from "../subcontractingBom.service";
@graphql.Resolver(() => SubcontractingBom)
export class SubcontractingBomResolverBase {
  constructor(protected readonly service: SubcontractingBomService) {}

  async _subcontractingBomsMeta(
    @graphql.Args() args: SubcontractingBomCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubcontractingBom])
  async subcontractingBoms(
    @graphql.Args() args: SubcontractingBomFindManyArgs
  ): Promise<SubcontractingBom[]> {
    return this.service.subcontractingBoms(args);
  }

  @graphql.Query(() => SubcontractingBom, { nullable: true })
  async subcontractingBom(
    @graphql.Args() args: SubcontractingBomFindUniqueArgs
  ): Promise<SubcontractingBom | null> {
    const result = await this.service.subcontractingBom(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubcontractingBom)
  async createSubcontractingBom(
    @graphql.Args() args: CreateSubcontractingBomArgs
  ): Promise<SubcontractingBom> {
    return await this.service.createSubcontractingBom({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SubcontractingBom)
  async updateSubcontractingBom(
    @graphql.Args() args: UpdateSubcontractingBomArgs
  ): Promise<SubcontractingBom | null> {
    try {
      return await this.service.updateSubcontractingBom({
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

  @graphql.Mutation(() => SubcontractingBom)
  async deleteSubcontractingBom(
    @graphql.Args() args: DeleteSubcontractingBomArgs
  ): Promise<SubcontractingBom | null> {
    try {
      return await this.service.deleteSubcontractingBom(args);
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