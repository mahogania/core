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
import { ClientScript } from "./ClientScript";
import { ClientScriptCountArgs } from "./ClientScriptCountArgs";
import { ClientScriptFindManyArgs } from "./ClientScriptFindManyArgs";
import { ClientScriptFindUniqueArgs } from "./ClientScriptFindUniqueArgs";
import { CreateClientScriptArgs } from "./CreateClientScriptArgs";
import { UpdateClientScriptArgs } from "./UpdateClientScriptArgs";
import { DeleteClientScriptArgs } from "./DeleteClientScriptArgs";
import { ClientScriptService } from "../clientScript.service";
@graphql.Resolver(() => ClientScript)
export class ClientScriptResolverBase {
  constructor(protected readonly service: ClientScriptService) {}

  async _clientScriptsMeta(
    @graphql.Args() args: ClientScriptCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClientScript])
  async clientScripts(
    @graphql.Args() args: ClientScriptFindManyArgs
  ): Promise<ClientScript[]> {
    return this.service.clientScripts(args);
  }

  @graphql.Query(() => ClientScript, { nullable: true })
  async clientScript(
    @graphql.Args() args: ClientScriptFindUniqueArgs
  ): Promise<ClientScript | null> {
    const result = await this.service.clientScript(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClientScript)
  async createClientScript(
    @graphql.Args() args: CreateClientScriptArgs
  ): Promise<ClientScript> {
    return await this.service.createClientScript({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClientScript)
  async updateClientScript(
    @graphql.Args() args: UpdateClientScriptArgs
  ): Promise<ClientScript | null> {
    try {
      return await this.service.updateClientScript({
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

  @graphql.Mutation(() => ClientScript)
  async deleteClientScript(
    @graphql.Args() args: DeleteClientScriptArgs
  ): Promise<ClientScript | null> {
    try {
      return await this.service.deleteClientScript(args);
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
