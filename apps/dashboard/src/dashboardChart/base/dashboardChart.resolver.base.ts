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
import { DashboardChart } from "./DashboardChart";
import { DashboardChartCountArgs } from "./DashboardChartCountArgs";
import { DashboardChartFindManyArgs } from "./DashboardChartFindManyArgs";
import { DashboardChartFindUniqueArgs } from "./DashboardChartFindUniqueArgs";
import { CreateDashboardChartArgs } from "./CreateDashboardChartArgs";
import { UpdateDashboardChartArgs } from "./UpdateDashboardChartArgs";
import { DeleteDashboardChartArgs } from "./DeleteDashboardChartArgs";
import { DashboardChartService } from "../dashboardChart.service";
@graphql.Resolver(() => DashboardChart)
export class DashboardChartResolverBase {
  constructor(protected readonly service: DashboardChartService) {}

  async _dashboardChartsMeta(
    @graphql.Args() args: DashboardChartCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DashboardChart])
  async dashboardCharts(
    @graphql.Args() args: DashboardChartFindManyArgs
  ): Promise<DashboardChart[]> {
    return this.service.dashboardCharts(args);
  }

  @graphql.Query(() => DashboardChart, { nullable: true })
  async dashboardChart(
    @graphql.Args() args: DashboardChartFindUniqueArgs
  ): Promise<DashboardChart | null> {
    const result = await this.service.dashboardChart(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DashboardChart)
  async createDashboardChart(
    @graphql.Args() args: CreateDashboardChartArgs
  ): Promise<DashboardChart> {
    return await this.service.createDashboardChart({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DashboardChart)
  async updateDashboardChart(
    @graphql.Args() args: UpdateDashboardChartArgs
  ): Promise<DashboardChart | null> {
    try {
      return await this.service.updateDashboardChart({
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

  @graphql.Mutation(() => DashboardChart)
  async deleteDashboardChart(
    @graphql.Args() args: DeleteDashboardChartArgs
  ): Promise<DashboardChart | null> {
    try {
      return await this.service.deleteDashboardChart(args);
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
