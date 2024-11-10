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
import { LeadSource } from "./LeadSource";
import { LeadSourceCountArgs } from "./LeadSourceCountArgs";
import { LeadSourceFindManyArgs } from "./LeadSourceFindManyArgs";
import { LeadSourceFindUniqueArgs } from "./LeadSourceFindUniqueArgs";
import { CreateLeadSourceArgs } from "./CreateLeadSourceArgs";
import { UpdateLeadSourceArgs } from "./UpdateLeadSourceArgs";
import { DeleteLeadSourceArgs } from "./DeleteLeadSourceArgs";
import { LeadSourceService } from "../leadSource.service";
@graphql.Resolver(() => LeadSource)
export class LeadSourceResolverBase {
  constructor(protected readonly service: LeadSourceService) {}

  async _leadSourcesMeta(
    @graphql.Args() args: LeadSourceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LeadSource])
  async leadSources(
    @graphql.Args() args: LeadSourceFindManyArgs
  ): Promise<LeadSource[]> {
    return this.service.leadSources(args);
  }

  @graphql.Query(() => LeadSource, { nullable: true })
  async leadSource(
    @graphql.Args() args: LeadSourceFindUniqueArgs
  ): Promise<LeadSource | null> {
    const result = await this.service.leadSource(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LeadSource)
  async createLeadSource(
    @graphql.Args() args: CreateLeadSourceArgs
  ): Promise<LeadSource> {
    return await this.service.createLeadSource({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LeadSource)
  async updateLeadSource(
    @graphql.Args() args: UpdateLeadSourceArgs
  ): Promise<LeadSource | null> {
    try {
      return await this.service.updateLeadSource({
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

  @graphql.Mutation(() => LeadSource)
  async deleteLeadSource(
    @graphql.Args() args: DeleteLeadSourceArgs
  ): Promise<LeadSource | null> {
    try {
      return await this.service.deleteLeadSource(args);
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