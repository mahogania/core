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
import { JobCardOperation } from "./JobCardOperation";
import { JobCardOperationCountArgs } from "./JobCardOperationCountArgs";
import { JobCardOperationFindManyArgs } from "./JobCardOperationFindManyArgs";
import { JobCardOperationFindUniqueArgs } from "./JobCardOperationFindUniqueArgs";
import { CreateJobCardOperationArgs } from "./CreateJobCardOperationArgs";
import { UpdateJobCardOperationArgs } from "./UpdateJobCardOperationArgs";
import { DeleteJobCardOperationArgs } from "./DeleteJobCardOperationArgs";
import { JobCardOperationService } from "../jobCardOperation.service";
@graphql.Resolver(() => JobCardOperation)
export class JobCardOperationResolverBase {
  constructor(protected readonly service: JobCardOperationService) {}

  async _jobCardOperationsMeta(
    @graphql.Args() args: JobCardOperationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JobCardOperation])
  async jobCardOperations(
    @graphql.Args() args: JobCardOperationFindManyArgs
  ): Promise<JobCardOperation[]> {
    return this.service.jobCardOperations(args);
  }

  @graphql.Query(() => JobCardOperation, { nullable: true })
  async jobCardOperation(
    @graphql.Args() args: JobCardOperationFindUniqueArgs
  ): Promise<JobCardOperation | null> {
    const result = await this.service.jobCardOperation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JobCardOperation)
  async createJobCardOperation(
    @graphql.Args() args: CreateJobCardOperationArgs
  ): Promise<JobCardOperation> {
    return await this.service.createJobCardOperation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => JobCardOperation)
  async updateJobCardOperation(
    @graphql.Args() args: UpdateJobCardOperationArgs
  ): Promise<JobCardOperation | null> {
    try {
      return await this.service.updateJobCardOperation({
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

  @graphql.Mutation(() => JobCardOperation)
  async deleteJobCardOperation(
    @graphql.Args() args: DeleteJobCardOperationArgs
  ): Promise<JobCardOperation | null> {
    try {
      return await this.service.deleteJobCardOperation(args);
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
