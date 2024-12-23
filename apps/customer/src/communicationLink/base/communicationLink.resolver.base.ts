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
import { CommunicationLink } from "./CommunicationLink";
import { CommunicationLinkCountArgs } from "./CommunicationLinkCountArgs";
import { CommunicationLinkFindManyArgs } from "./CommunicationLinkFindManyArgs";
import { CommunicationLinkFindUniqueArgs } from "./CommunicationLinkFindUniqueArgs";
import { CreateCommunicationLinkArgs } from "./CreateCommunicationLinkArgs";
import { UpdateCommunicationLinkArgs } from "./UpdateCommunicationLinkArgs";
import { DeleteCommunicationLinkArgs } from "./DeleteCommunicationLinkArgs";
import { CommunicationLinkService } from "../communicationLink.service";
@graphql.Resolver(() => CommunicationLink)
export class CommunicationLinkResolverBase {
  constructor(protected readonly service: CommunicationLinkService) {}

  async _communicationLinksMeta(
    @graphql.Args() args: CommunicationLinkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CommunicationLink])
  async communicationLinks(
    @graphql.Args() args: CommunicationLinkFindManyArgs
  ): Promise<CommunicationLink[]> {
    return this.service.communicationLinks(args);
  }

  @graphql.Query(() => CommunicationLink, { nullable: true })
  async communicationLink(
    @graphql.Args() args: CommunicationLinkFindUniqueArgs
  ): Promise<CommunicationLink | null> {
    const result = await this.service.communicationLink(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CommunicationLink)
  async createCommunicationLink(
    @graphql.Args() args: CreateCommunicationLinkArgs
  ): Promise<CommunicationLink> {
    return await this.service.createCommunicationLink({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CommunicationLink)
  async updateCommunicationLink(
    @graphql.Args() args: UpdateCommunicationLinkArgs
  ): Promise<CommunicationLink | null> {
    try {
      return await this.service.updateCommunicationLink({
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

  @graphql.Mutation(() => CommunicationLink)
  async deleteCommunicationLink(
    @graphql.Args() args: DeleteCommunicationLinkArgs
  ): Promise<CommunicationLink | null> {
    try {
      return await this.service.deleteCommunicationLink(args);
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
