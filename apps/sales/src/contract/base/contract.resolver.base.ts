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
import { Contract } from "./Contract";
import { ContractCountArgs } from "./ContractCountArgs";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractFindUniqueArgs } from "./ContractFindUniqueArgs";
import { CreateContractArgs } from "./CreateContractArgs";
import { UpdateContractArgs } from "./UpdateContractArgs";
import { DeleteContractArgs } from "./DeleteContractArgs";
import { Deal } from "../../deal/base/Deal";
import { ContractService } from "../contract.service";
@graphql.Resolver(() => Contract)
export class ContractResolverBase {
  constructor(protected readonly service: ContractService) {}

  async _contractsMeta(
    @graphql.Args() args: ContractCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Contract])
  async contracts(
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    return this.service.contracts(args);
  }

  @graphql.Query(() => Contract, { nullable: true })
  async contract(
    @graphql.Args() args: ContractFindUniqueArgs
  ): Promise<Contract | null> {
    const result = await this.service.contract(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Contract)
  async createContract(
    @graphql.Args() args: CreateContractArgs
  ): Promise<Contract> {
    return await this.service.createContract({
      ...args,
      data: {
        ...args.data,

        deal: args.data.deal
          ? {
              connect: args.data.deal,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Contract)
  async updateContract(
    @graphql.Args() args: UpdateContractArgs
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        ...args,
        data: {
          ...args.data,

          deal: args.data.deal
            ? {
                connect: args.data.deal,
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

  @graphql.Mutation(() => Contract)
  async deleteContract(
    @graphql.Args() args: DeleteContractArgs
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Deal, {
    nullable: true,
    name: "deal",
  })
  async getDeal(@graphql.Parent() parent: Contract): Promise<Deal | null> {
    const result = await this.service.getDeal(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
