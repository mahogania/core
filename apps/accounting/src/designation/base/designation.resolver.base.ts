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
import { Designation } from "./Designation";
import { DesignationCountArgs } from "./DesignationCountArgs";
import { DesignationFindManyArgs } from "./DesignationFindManyArgs";
import { DesignationFindUniqueArgs } from "./DesignationFindUniqueArgs";
import { CreateDesignationArgs } from "./CreateDesignationArgs";
import { UpdateDesignationArgs } from "./UpdateDesignationArgs";
import { DeleteDesignationArgs } from "./DeleteDesignationArgs";
import { DesignationService } from "../designation.service";
@graphql.Resolver(() => Designation)
export class DesignationResolverBase {
  constructor(protected readonly service: DesignationService) {}

  async _designationsMeta(
    @graphql.Args() args: DesignationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Designation])
  async designations(
    @graphql.Args() args: DesignationFindManyArgs
  ): Promise<Designation[]> {
    return this.service.designations(args);
  }

  @graphql.Query(() => Designation, { nullable: true })
  async designation(
    @graphql.Args() args: DesignationFindUniqueArgs
  ): Promise<Designation | null> {
    const result = await this.service.designation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Designation)
  async createDesignation(
    @graphql.Args() args: CreateDesignationArgs
  ): Promise<Designation> {
    return await this.service.createDesignation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Designation)
  async updateDesignation(
    @graphql.Args() args: UpdateDesignationArgs
  ): Promise<Designation | null> {
    try {
      return await this.service.updateDesignation({
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

  @graphql.Mutation(() => Designation)
  async deleteDesignation(
    @graphql.Args() args: DeleteDesignationArgs
  ): Promise<Designation | null> {
    try {
      return await this.service.deleteDesignation(args);
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