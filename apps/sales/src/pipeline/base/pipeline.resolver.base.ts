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
import { Pipeline } from "./Pipeline";
import { PipelineCountArgs } from "./PipelineCountArgs";
import { PipelineFindManyArgs } from "./PipelineFindManyArgs";
import { PipelineFindUniqueArgs } from "./PipelineFindUniqueArgs";
import { CreatePipelineArgs } from "./CreatePipelineArgs";
import { UpdatePipelineArgs } from "./UpdatePipelineArgs";
import { DeletePipelineArgs } from "./DeletePipelineArgs";
import { ConfigurationFindManyArgs } from "../../configuration/base/ConfigurationFindManyArgs";
import { Configuration } from "../../configuration/base/Configuration";
import { ProcessFindManyArgs } from "../../process/base/ProcessFindManyArgs";
import { Process } from "../../process/base/Process";
import { PipelineService } from "../pipeline.service";
@graphql.Resolver(() => Pipeline)
export class PipelineResolverBase {
  constructor(protected readonly service: PipelineService) {}

  async _pipelinesMeta(
    @graphql.Args() args: PipelineCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Pipeline])
  async pipelines(
    @graphql.Args() args: PipelineFindManyArgs
  ): Promise<Pipeline[]> {
    return this.service.pipelines(args);
  }

  @graphql.Query(() => Pipeline, { nullable: true })
  async pipeline(
    @graphql.Args() args: PipelineFindUniqueArgs
  ): Promise<Pipeline | null> {
    const result = await this.service.pipeline(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Pipeline)
  async createPipeline(
    @graphql.Args() args: CreatePipelineArgs
  ): Promise<Pipeline> {
    return await this.service.createPipeline({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Pipeline)
  async updatePipeline(
    @graphql.Args() args: UpdatePipelineArgs
  ): Promise<Pipeline | null> {
    try {
      return await this.service.updatePipeline({
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

  @graphql.Mutation(() => Pipeline)
  async deletePipeline(
    @graphql.Args() args: DeletePipelineArgs
  ): Promise<Pipeline | null> {
    try {
      return await this.service.deletePipeline(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Configuration], { name: "configurations" })
  async findConfigurations(
    @graphql.Parent() parent: Pipeline,
    @graphql.Args() args: ConfigurationFindManyArgs
  ): Promise<Configuration[]> {
    const results = await this.service.findConfigurations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Process], { name: "processes" })
  async findProcesses(
    @graphql.Parent() parent: Pipeline,
    @graphql.Args() args: ProcessFindManyArgs
  ): Promise<Process[]> {
    const results = await this.service.findProcesses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
