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
import { BisectNodes } from "./BisectNodes";
import { BisectNodesCountArgs } from "./BisectNodesCountArgs";
import { BisectNodesFindManyArgs } from "./BisectNodesFindManyArgs";
import { BisectNodesFindUniqueArgs } from "./BisectNodesFindUniqueArgs";
import { CreateBisectNodesArgs } from "./CreateBisectNodesArgs";
import { UpdateBisectNodesArgs } from "./UpdateBisectNodesArgs";
import { DeleteBisectNodesArgs } from "./DeleteBisectNodesArgs";
import { BisectNodesService } from "../bisectNodes.service";
@graphql.Resolver(() => BisectNodes)
export class BisectNodesResolverBase {
  constructor(protected readonly service: BisectNodesService) {}

  async _bisectNodesItemsMeta(
    @graphql.Args() args: BisectNodesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BisectNodes])
  async bisectNodesItems(
    @graphql.Args() args: BisectNodesFindManyArgs
  ): Promise<BisectNodes[]> {
    return this.service.bisectNodesItems(args);
  }

  @graphql.Query(() => BisectNodes, { nullable: true })
  async bisectNodes(
    @graphql.Args() args: BisectNodesFindUniqueArgs
  ): Promise<BisectNodes | null> {
    const result = await this.service.bisectNodes(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BisectNodes)
  async createBisectNodes(
    @graphql.Args() args: CreateBisectNodesArgs
  ): Promise<BisectNodes> {
    return await this.service.createBisectNodes({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BisectNodes)
  async updateBisectNodes(
    @graphql.Args() args: UpdateBisectNodesArgs
  ): Promise<BisectNodes | null> {
    try {
      return await this.service.updateBisectNodes({
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

  @graphql.Mutation(() => BisectNodes)
  async deleteBisectNodes(
    @graphql.Args() args: DeleteBisectNodesArgs
  ): Promise<BisectNodes | null> {
    try {
      return await this.service.deleteBisectNodes(args);
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
