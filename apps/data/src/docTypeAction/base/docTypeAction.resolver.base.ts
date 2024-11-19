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
import { DocTypeAction } from "./DocTypeAction";
import { DocTypeActionCountArgs } from "./DocTypeActionCountArgs";
import { DocTypeActionFindManyArgs } from "./DocTypeActionFindManyArgs";
import { DocTypeActionFindUniqueArgs } from "./DocTypeActionFindUniqueArgs";
import { CreateDocTypeActionArgs } from "./CreateDocTypeActionArgs";
import { UpdateDocTypeActionArgs } from "./UpdateDocTypeActionArgs";
import { DeleteDocTypeActionArgs } from "./DeleteDocTypeActionArgs";
import { DocTypeActionService } from "../docTypeAction.service";
@graphql.Resolver(() => DocTypeAction)
export class DocTypeActionResolverBase {
  constructor(protected readonly service: DocTypeActionService) {}

  async _docTypeActionsMeta(
    @graphql.Args() args: DocTypeActionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DocTypeAction])
  async docTypeActions(
    @graphql.Args() args: DocTypeActionFindManyArgs
  ): Promise<DocTypeAction[]> {
    return this.service.docTypeActions(args);
  }

  @graphql.Query(() => DocTypeAction, { nullable: true })
  async docTypeAction(
    @graphql.Args() args: DocTypeActionFindUniqueArgs
  ): Promise<DocTypeAction | null> {
    const result = await this.service.docTypeAction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DocTypeAction)
  async createDocTypeAction(
    @graphql.Args() args: CreateDocTypeActionArgs
  ): Promise<DocTypeAction> {
    return await this.service.createDocTypeAction({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DocTypeAction)
  async updateDocTypeAction(
    @graphql.Args() args: UpdateDocTypeActionArgs
  ): Promise<DocTypeAction | null> {
    try {
      return await this.service.updateDocTypeAction({
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

  @graphql.Mutation(() => DocTypeAction)
  async deleteDocTypeAction(
    @graphql.Args() args: DeleteDocTypeActionArgs
  ): Promise<DocTypeAction | null> {
    try {
      return await this.service.deleteDocTypeAction(args);
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