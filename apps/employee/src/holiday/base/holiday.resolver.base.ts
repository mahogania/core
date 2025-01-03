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
import { Holiday } from "./Holiday";
import { HolidayCountArgs } from "./HolidayCountArgs";
import { HolidayFindManyArgs } from "./HolidayFindManyArgs";
import { HolidayFindUniqueArgs } from "./HolidayFindUniqueArgs";
import { CreateHolidayArgs } from "./CreateHolidayArgs";
import { UpdateHolidayArgs } from "./UpdateHolidayArgs";
import { DeleteHolidayArgs } from "./DeleteHolidayArgs";
import { HolidayService } from "../holiday.service";
@graphql.Resolver(() => Holiday)
export class HolidayResolverBase {
  constructor(protected readonly service: HolidayService) {}

  async _holidaysMeta(
    @graphql.Args() args: HolidayCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Holiday])
  async holidays(
    @graphql.Args() args: HolidayFindManyArgs
  ): Promise<Holiday[]> {
    return this.service.holidays(args);
  }

  @graphql.Query(() => Holiday, { nullable: true })
  async holiday(
    @graphql.Args() args: HolidayFindUniqueArgs
  ): Promise<Holiday | null> {
    const result = await this.service.holiday(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Holiday)
  async createHoliday(
    @graphql.Args() args: CreateHolidayArgs
  ): Promise<Holiday> {
    return await this.service.createHoliday({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Holiday)
  async updateHoliday(
    @graphql.Args() args: UpdateHolidayArgs
  ): Promise<Holiday | null> {
    try {
      return await this.service.updateHoliday({
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

  @graphql.Mutation(() => Holiday)
  async deleteHoliday(
    @graphql.Args() args: DeleteHolidayArgs
  ): Promise<Holiday | null> {
    try {
      return await this.service.deleteHoliday(args);
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
