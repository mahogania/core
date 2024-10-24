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
import { Opportunity } from "./Opportunity";
import { OpportunityCountArgs } from "./OpportunityCountArgs";
import { OpportunityFindManyArgs } from "./OpportunityFindManyArgs";
import { OpportunityFindUniqueArgs } from "./OpportunityFindUniqueArgs";
import { CreateOpportunityArgs } from "./CreateOpportunityArgs";
import { UpdateOpportunityArgs } from "./UpdateOpportunityArgs";
import { DeleteOpportunityArgs } from "./DeleteOpportunityArgs";
import { BusinessFindManyArgs } from "../../business/base/BusinessFindManyArgs";
import { Business } from "../../business/base/Business";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { ProposalFindManyArgs } from "../../proposal/base/ProposalFindManyArgs";
import { Proposal } from "../../proposal/base/Proposal";
import { Contact } from "../../contact/base/Contact";
import { OpportunityService } from "../opportunity.service";
@graphql.Resolver(() => Opportunity)
export class OpportunityResolverBase {
  constructor(protected readonly service: OpportunityService) {}

  async _opportunitiesMeta(
    @graphql.Args() args: OpportunityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Opportunity])
  async opportunities(
    @graphql.Args() args: OpportunityFindManyArgs
  ): Promise<Opportunity[]> {
    return this.service.opportunities(args);
  }

  @graphql.Query(() => Opportunity, { nullable: true })
  async opportunity(
    @graphql.Args() args: OpportunityFindUniqueArgs
  ): Promise<Opportunity | null> {
    const result = await this.service.opportunity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Opportunity)
  async createOpportunity(
    @graphql.Args() args: CreateOpportunityArgs
  ): Promise<Opportunity> {
    return await this.service.createOpportunity({
      ...args,
      data: {
        ...args.data,

        contact: args.data.contact
          ? {
              connect: args.data.contact,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Opportunity)
  async updateOpportunity(
    @graphql.Args() args: UpdateOpportunityArgs
  ): Promise<Opportunity | null> {
    try {
      return await this.service.updateOpportunity({
        ...args,
        data: {
          ...args.data,

          contact: args.data.contact
            ? {
                connect: args.data.contact,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Opportunity)
  async deleteOpportunity(
    @graphql.Args() args: DeleteOpportunityArgs
  ): Promise<Opportunity | null> {
    try {
      return await this.service.deleteOpportunity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Business], { name: "competitor" })
  async findCompetitor(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: BusinessFindManyArgs
  ): Promise<Business[]> {
    const results = await this.service.findCompetitor(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Proposal], { name: "proposals" })
  async findProposals(
    @graphql.Parent() parent: Opportunity,
    @graphql.Args() args: ProposalFindManyArgs
  ): Promise<Proposal[]> {
    const results = await this.service.findProposals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Contact, {
    nullable: true,
    name: "contact",
  })
  async getContact(
    @graphql.Parent() parent: Opportunity
  ): Promise<Contact | null> {
    const result = await this.service.getContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
