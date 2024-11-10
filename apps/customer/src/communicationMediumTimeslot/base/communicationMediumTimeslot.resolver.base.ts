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
import { CommunicationMediumTimeslot } from "./CommunicationMediumTimeslot";
import { CommunicationMediumTimeslotCountArgs } from "./CommunicationMediumTimeslotCountArgs";
import { CommunicationMediumTimeslotFindManyArgs } from "./CommunicationMediumTimeslotFindManyArgs";
import { CommunicationMediumTimeslotFindUniqueArgs } from "./CommunicationMediumTimeslotFindUniqueArgs";
import { CreateCommunicationMediumTimeslotArgs } from "./CreateCommunicationMediumTimeslotArgs";
import { UpdateCommunicationMediumTimeslotArgs } from "./UpdateCommunicationMediumTimeslotArgs";
import { DeleteCommunicationMediumTimeslotArgs } from "./DeleteCommunicationMediumTimeslotArgs";
import { CommunicationMediumTimeslotService } from "../communicationMediumTimeslot.service";
@graphql.Resolver(() => CommunicationMediumTimeslot)
export class CommunicationMediumTimeslotResolverBase {
  constructor(protected readonly service: CommunicationMediumTimeslotService) {}

  async _communicationMediumTimeslotsMeta(
    @graphql.Args() args: CommunicationMediumTimeslotCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CommunicationMediumTimeslot])
  async communicationMediumTimeslots(
    @graphql.Args() args: CommunicationMediumTimeslotFindManyArgs
  ): Promise<CommunicationMediumTimeslot[]> {
    return this.service.communicationMediumTimeslots(args);
  }

  @graphql.Query(() => CommunicationMediumTimeslot, { nullable: true })
  async communicationMediumTimeslot(
    @graphql.Args() args: CommunicationMediumTimeslotFindUniqueArgs
  ): Promise<CommunicationMediumTimeslot | null> {
    const result = await this.service.communicationMediumTimeslot(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CommunicationMediumTimeslot)
  async createCommunicationMediumTimeslot(
    @graphql.Args() args: CreateCommunicationMediumTimeslotArgs
  ): Promise<CommunicationMediumTimeslot> {
    return await this.service.createCommunicationMediumTimeslot({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CommunicationMediumTimeslot)
  async updateCommunicationMediumTimeslot(
    @graphql.Args() args: UpdateCommunicationMediumTimeslotArgs
  ): Promise<CommunicationMediumTimeslot | null> {
    try {
      return await this.service.updateCommunicationMediumTimeslot({
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

  @graphql.Mutation(() => CommunicationMediumTimeslot)
  async deleteCommunicationMediumTimeslot(
    @graphql.Args() args: DeleteCommunicationMediumTimeslotArgs
  ): Promise<CommunicationMediumTimeslot | null> {
    try {
      return await this.service.deleteCommunicationMediumTimeslot(args);
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
