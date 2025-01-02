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
import { DashboardSettings } from "./DashboardSettings";
import { DashboardSettingsCountArgs } from "./DashboardSettingsCountArgs";
import { DashboardSettingsFindManyArgs } from "./DashboardSettingsFindManyArgs";
import { DashboardSettingsFindUniqueArgs } from "./DashboardSettingsFindUniqueArgs";
import { CreateDashboardSettingsArgs } from "./CreateDashboardSettingsArgs";
import { UpdateDashboardSettingsArgs } from "./UpdateDashboardSettingsArgs";
import { DeleteDashboardSettingsArgs } from "./DeleteDashboardSettingsArgs";
import { DashboardSettingsService } from "../dashboardSettings.service";
@graphql.Resolver(() => DashboardSettings)
export class DashboardSettingsResolverBase {
  constructor(protected readonly service: DashboardSettingsService) {}

  async _dashboardSettingsItemsMeta(
    @graphql.Args() args: DashboardSettingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DashboardSettings])
  async dashboardSettingsItems(
    @graphql.Args() args: DashboardSettingsFindManyArgs
  ): Promise<DashboardSettings[]> {
    return this.service.dashboardSettingsItems(args);
  }

  @graphql.Query(() => DashboardSettings, { nullable: true })
  async dashboardSettings(
    @graphql.Args() args: DashboardSettingsFindUniqueArgs
  ): Promise<DashboardSettings | null> {
    const result = await this.service.dashboardSettings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DashboardSettings)
  async createDashboardSettings(
    @graphql.Args() args: CreateDashboardSettingsArgs
  ): Promise<DashboardSettings> {
    return await this.service.createDashboardSettings({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DashboardSettings)
  async updateDashboardSettings(
    @graphql.Args() args: UpdateDashboardSettingsArgs
  ): Promise<DashboardSettings | null> {
    try {
      return await this.service.updateDashboardSettings({
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

  @graphql.Mutation(() => DashboardSettings)
  async deleteDashboardSettings(
    @graphql.Args() args: DeleteDashboardSettingsArgs
  ): Promise<DashboardSettings | null> {
    try {
      return await this.service.deleteDashboardSettings(args);
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