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
import { DepreciationSchedule } from "./DepreciationSchedule";
import { DepreciationScheduleCountArgs } from "./DepreciationScheduleCountArgs";
import { DepreciationScheduleFindManyArgs } from "./DepreciationScheduleFindManyArgs";
import { DepreciationScheduleFindUniqueArgs } from "./DepreciationScheduleFindUniqueArgs";
import { CreateDepreciationScheduleArgs } from "./CreateDepreciationScheduleArgs";
import { UpdateDepreciationScheduleArgs } from "./UpdateDepreciationScheduleArgs";
import { DeleteDepreciationScheduleArgs } from "./DeleteDepreciationScheduleArgs";
import { DepreciationScheduleService } from "../depreciationSchedule.service";
@graphql.Resolver(() => DepreciationSchedule)
export class DepreciationScheduleResolverBase {
  constructor(protected readonly service: DepreciationScheduleService) {}

  async _depreciationSchedulesMeta(
    @graphql.Args() args: DepreciationScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DepreciationSchedule])
  async depreciationSchedules(
    @graphql.Args() args: DepreciationScheduleFindManyArgs
  ): Promise<DepreciationSchedule[]> {
    return this.service.depreciationSchedules(args);
  }

  @graphql.Query(() => DepreciationSchedule, { nullable: true })
  async depreciationSchedule(
    @graphql.Args() args: DepreciationScheduleFindUniqueArgs
  ): Promise<DepreciationSchedule | null> {
    const result = await this.service.depreciationSchedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DepreciationSchedule)
  async createDepreciationSchedule(
    @graphql.Args() args: CreateDepreciationScheduleArgs
  ): Promise<DepreciationSchedule> {
    return await this.service.createDepreciationSchedule({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DepreciationSchedule)
  async updateDepreciationSchedule(
    @graphql.Args() args: UpdateDepreciationScheduleArgs
  ): Promise<DepreciationSchedule | null> {
    try {
      return await this.service.updateDepreciationSchedule({
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

  @graphql.Mutation(() => DepreciationSchedule)
  async deleteDepreciationSchedule(
    @graphql.Args() args: DeleteDepreciationScheduleArgs
  ): Promise<DepreciationSchedule | null> {
    try {
      return await this.service.deleteDepreciationSchedule(args);
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
