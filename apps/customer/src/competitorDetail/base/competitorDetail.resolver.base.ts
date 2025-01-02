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
import { CompetitorDetail } from "./CompetitorDetail";
import { CompetitorDetailCountArgs } from "./CompetitorDetailCountArgs";
import { CompetitorDetailFindManyArgs } from "./CompetitorDetailFindManyArgs";
import { CompetitorDetailFindUniqueArgs } from "./CompetitorDetailFindUniqueArgs";
import { CreateCompetitorDetailArgs } from "./CreateCompetitorDetailArgs";
import { UpdateCompetitorDetailArgs } from "./UpdateCompetitorDetailArgs";
import { DeleteCompetitorDetailArgs } from "./DeleteCompetitorDetailArgs";
import { CompetitorDetailService } from "../competitorDetail.service";
@graphql.Resolver(() => CompetitorDetail)
export class CompetitorDetailResolverBase {
  constructor(protected readonly service: CompetitorDetailService) {}

  async _competitorDetailsMeta(
    @graphql.Args() args: CompetitorDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CompetitorDetail])
  async competitorDetails(
    @graphql.Args() args: CompetitorDetailFindManyArgs
  ): Promise<CompetitorDetail[]> {
    return this.service.competitorDetails(args);
  }

  @graphql.Query(() => CompetitorDetail, { nullable: true })
  async competitorDetail(
    @graphql.Args() args: CompetitorDetailFindUniqueArgs
  ): Promise<CompetitorDetail | null> {
    const result = await this.service.competitorDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CompetitorDetail)
  async createCompetitorDetail(
    @graphql.Args() args: CreateCompetitorDetailArgs
  ): Promise<CompetitorDetail> {
    return await this.service.createCompetitorDetail({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CompetitorDetail)
  async updateCompetitorDetail(
    @graphql.Args() args: UpdateCompetitorDetailArgs
  ): Promise<CompetitorDetail | null> {
    try {
      return await this.service.updateCompetitorDetail({
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

  @graphql.Mutation(() => CompetitorDetail)
  async deleteCompetitorDetail(
    @graphql.Args() args: DeleteCompetitorDetailArgs
  ): Promise<CompetitorDetail | null> {
    try {
      return await this.service.deleteCompetitorDetail(args);
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