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
import { DocTypeLayoutField } from "./DocTypeLayoutField";
import { DocTypeLayoutFieldCountArgs } from "./DocTypeLayoutFieldCountArgs";
import { DocTypeLayoutFieldFindManyArgs } from "./DocTypeLayoutFieldFindManyArgs";
import { DocTypeLayoutFieldFindUniqueArgs } from "./DocTypeLayoutFieldFindUniqueArgs";
import { CreateDocTypeLayoutFieldArgs } from "./CreateDocTypeLayoutFieldArgs";
import { UpdateDocTypeLayoutFieldArgs } from "./UpdateDocTypeLayoutFieldArgs";
import { DeleteDocTypeLayoutFieldArgs } from "./DeleteDocTypeLayoutFieldArgs";
import { DocTypeLayoutFieldService } from "../docTypeLayoutField.service";
@graphql.Resolver(() => DocTypeLayoutField)
export class DocTypeLayoutFieldResolverBase {
  constructor(protected readonly service: DocTypeLayoutFieldService) {}

  async _docTypeLayoutFieldsMeta(
    @graphql.Args() args: DocTypeLayoutFieldCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DocTypeLayoutField])
  async docTypeLayoutFields(
    @graphql.Args() args: DocTypeLayoutFieldFindManyArgs
  ): Promise<DocTypeLayoutField[]> {
    return this.service.docTypeLayoutFields(args);
  }

  @graphql.Query(() => DocTypeLayoutField, { nullable: true })
  async docTypeLayoutField(
    @graphql.Args() args: DocTypeLayoutFieldFindUniqueArgs
  ): Promise<DocTypeLayoutField | null> {
    const result = await this.service.docTypeLayoutField(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DocTypeLayoutField)
  async createDocTypeLayoutField(
    @graphql.Args() args: CreateDocTypeLayoutFieldArgs
  ): Promise<DocTypeLayoutField> {
    return await this.service.createDocTypeLayoutField({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DocTypeLayoutField)
  async updateDocTypeLayoutField(
    @graphql.Args() args: UpdateDocTypeLayoutFieldArgs
  ): Promise<DocTypeLayoutField | null> {
    try {
      return await this.service.updateDocTypeLayoutField({
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

  @graphql.Mutation(() => DocTypeLayoutField)
  async deleteDocTypeLayoutField(
    @graphql.Args() args: DeleteDocTypeLayoutFieldArgs
  ): Promise<DocTypeLayoutField | null> {
    try {
      return await this.service.deleteDocTypeLayoutField(args);
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
