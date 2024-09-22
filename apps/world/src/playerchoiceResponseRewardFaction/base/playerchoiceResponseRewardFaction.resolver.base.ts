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
import { PlayerchoiceResponseRewardFaction } from "./PlayerchoiceResponseRewardFaction";
import { PlayerchoiceResponseRewardFactionCountArgs } from "./PlayerchoiceResponseRewardFactionCountArgs";
import { PlayerchoiceResponseRewardFactionFindManyArgs } from "./PlayerchoiceResponseRewardFactionFindManyArgs";
import { PlayerchoiceResponseRewardFactionFindUniqueArgs } from "./PlayerchoiceResponseRewardFactionFindUniqueArgs";
import { DeletePlayerchoiceResponseRewardFactionArgs } from "./DeletePlayerchoiceResponseRewardFactionArgs";
import { PlayerchoiceResponseRewardFactionService } from "../playerchoiceResponseRewardFaction.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseRewardFaction)
export class PlayerchoiceResponseRewardFactionResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardFactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlayerchoiceResponseRewardFaction",
    action: "read",
    possession: "any",
  })
  async _playerchoiceResponseRewardFactionsMeta(
    @graphql.Args() args: PlayerchoiceResponseRewardFactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlayerchoiceResponseRewardFaction])
  @nestAccessControl.UseRoles({
    resource: "PlayerchoiceResponseRewardFaction",
    action: "read",
    possession: "any",
  })
  async playerchoiceResponseRewardFactions(
    @graphql.Args() args: PlayerchoiceResponseRewardFactionFindManyArgs
  ): Promise<PlayerchoiceResponseRewardFaction[]> {
    return this.service.playerchoiceResponseRewardFactions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlayerchoiceResponseRewardFaction, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlayerchoiceResponseRewardFaction",
    action: "read",
    possession: "own",
  })
  async playerchoiceResponseRewardFaction(
    @graphql.Args() args: PlayerchoiceResponseRewardFactionFindUniqueArgs
  ): Promise<PlayerchoiceResponseRewardFaction | null> {
    const result = await this.service.playerchoiceResponseRewardFaction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PlayerchoiceResponseRewardFaction)
  @nestAccessControl.UseRoles({
    resource: "PlayerchoiceResponseRewardFaction",
    action: "delete",
    possession: "any",
  })
  async deletePlayerchoiceResponseRewardFaction(
    @graphql.Args() args: DeletePlayerchoiceResponseRewardFactionArgs
  ): Promise<PlayerchoiceResponseRewardFaction | null> {
    try {
      return await this.service.deletePlayerchoiceResponseRewardFaction(args);
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
