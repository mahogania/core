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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Command } from "./Command";
import { CommandCountArgs } from "./CommandCountArgs";
import { CommandFindManyArgs } from "./CommandFindManyArgs";
import { CommandFindUniqueArgs } from "./CommandFindUniqueArgs";
import { CreateCommandArgs } from "./CreateCommandArgs";
import { UpdateCommandArgs } from "./UpdateCommandArgs";
import { DeleteCommandArgs } from "./DeleteCommandArgs";
import { CommandService } from "../command.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Command)
export class CommandResolverBase {
  constructor(
    protected readonly service: CommandService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "any",
  })
  async _commandsMeta(
    @graphql.Args() args: CommandCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Command])
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "any",
  })
  async commands(
    @graphql.Args() args: CommandFindManyArgs
  ): Promise<Command[]> {
    return this.service.commands(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Command, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "read",
    possession: "own",
  })
  async command(
    @graphql.Args() args: CommandFindUniqueArgs
  ): Promise<Command | null> {
    const result = await this.service.command(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Command)
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "create",
    possession: "any",
  })
  async createCommand(
    @graphql.Args() args: CreateCommandArgs
  ): Promise<Command> {
    return await this.service.createCommand({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Command)
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "update",
    possession: "any",
  })
  async updateCommand(
    @graphql.Args() args: UpdateCommandArgs
  ): Promise<Command | null> {
    try {
      return await this.service.updateCommand({
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

  @graphql.Mutation(() => Command)
  @nestAccessControl.UseRoles({
    resource: "Command",
    action: "delete",
    possession: "any",
  })
  async deleteCommand(
    @graphql.Args() args: DeleteCommandArgs
  ): Promise<Command | null> {
    try {
      return await this.service.deleteCommand(args);
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
