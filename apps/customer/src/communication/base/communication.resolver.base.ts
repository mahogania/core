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
import { Communication } from "./Communication";
import { CommunicationCountArgs } from "./CommunicationCountArgs";
import { CommunicationFindManyArgs } from "./CommunicationFindManyArgs";
import { CommunicationFindUniqueArgs } from "./CommunicationFindUniqueArgs";
import { CreateCommunicationArgs } from "./CreateCommunicationArgs";
import { UpdateCommunicationArgs } from "./UpdateCommunicationArgs";
import { DeleteCommunicationArgs } from "./DeleteCommunicationArgs";
import { CommunicationService } from "../communication.service";
@graphql.Resolver(() => Communication)
export class CommunicationResolverBase {
  constructor(protected readonly service: CommunicationService) {}

  async _communicationsMeta(
    @graphql.Args() args: CommunicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Communication])
  async communications(
    @graphql.Args() args: CommunicationFindManyArgs
  ): Promise<Communication[]> {
    return this.service.communications(args);
  }

  @graphql.Query(() => Communication, { nullable: true })
  async communication(
    @graphql.Args() args: CommunicationFindUniqueArgs
  ): Promise<Communication | null> {
    const result = await this.service.communication(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Communication)
  async createCommunication(
    @graphql.Args() args: CreateCommunicationArgs
  ): Promise<Communication> {
    return await this.service.createCommunication({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Communication)
  async updateCommunication(
    @graphql.Args() args: UpdateCommunicationArgs
  ): Promise<Communication | null> {
    try {
      return await this.service.updateCommunication({
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

  @graphql.Mutation(() => Communication)
  async deleteCommunication(
    @graphql.Args() args: DeleteCommunicationArgs
  ): Promise<Communication | null> {
    try {
      return await this.service.deleteCommunication(args);
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
