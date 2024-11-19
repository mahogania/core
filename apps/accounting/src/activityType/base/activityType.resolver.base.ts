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
import { ActivityType } from "./ActivityType";
import { ActivityTypeCountArgs } from "./ActivityTypeCountArgs";
import { ActivityTypeFindManyArgs } from "./ActivityTypeFindManyArgs";
import { ActivityTypeFindUniqueArgs } from "./ActivityTypeFindUniqueArgs";
import { CreateActivityTypeArgs } from "./CreateActivityTypeArgs";
import { UpdateActivityTypeArgs } from "./UpdateActivityTypeArgs";
import { DeleteActivityTypeArgs } from "./DeleteActivityTypeArgs";
import { ActivityTypeService } from "../activityType.service";
@graphql.Resolver(() => ActivityType)
export class ActivityTypeResolverBase {
  constructor(protected readonly service: ActivityTypeService) {}

  async _activityTypesMeta(
    @graphql.Args() args: ActivityTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ActivityType])
  async activityTypes(
    @graphql.Args() args: ActivityTypeFindManyArgs
  ): Promise<ActivityType[]> {
    return this.service.activityTypes(args);
  }

  @graphql.Query(() => ActivityType, { nullable: true })
  async activityType(
    @graphql.Args() args: ActivityTypeFindUniqueArgs
  ): Promise<ActivityType | null> {
    const result = await this.service.activityType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ActivityType)
  async createActivityType(
    @graphql.Args() args: CreateActivityTypeArgs
  ): Promise<ActivityType> {
    return await this.service.createActivityType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ActivityType)
  async updateActivityType(
    @graphql.Args() args: UpdateActivityTypeArgs
  ): Promise<ActivityType | null> {
    try {
      return await this.service.updateActivityType({
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

  @graphql.Mutation(() => ActivityType)
  async deleteActivityType(
    @graphql.Args() args: DeleteActivityTypeArgs
  ): Promise<ActivityType | null> {
    try {
      return await this.service.deleteActivityType(args);
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