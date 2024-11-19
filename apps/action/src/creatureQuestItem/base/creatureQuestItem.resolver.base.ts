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
import { CreatureQuestItem } from "./CreatureQuestItem";
import { CreatureQuestItemCountArgs } from "./CreatureQuestItemCountArgs";
import { CreatureQuestItemFindManyArgs } from "./CreatureQuestItemFindManyArgs";
import { CreatureQuestItemFindUniqueArgs } from "./CreatureQuestItemFindUniqueArgs";
import { DeleteCreatureQuestItemArgs } from "./DeleteCreatureQuestItemArgs";
import { CreatureQuestItemService } from "../creatureQuestItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureQuestItem)
export class CreatureQuestItemResolverBase {
  constructor(
    protected readonly service: CreatureQuestItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureQuestItem",
    action: "read",
    possession: "any",
  })
  async _creatureQuestItemsMeta(
    @graphql.Args() args: CreatureQuestItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureQuestItem])
  @nestAccessControl.UseRoles({
    resource: "CreatureQuestItem",
    action: "read",
    possession: "any",
  })
  async creatureQuestItems(
    @graphql.Args() args: CreatureQuestItemFindManyArgs
  ): Promise<CreatureQuestItem[]> {
    return this.service.creatureQuestItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureQuestItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureQuestItem",
    action: "read",
    possession: "own",
  })
  async creatureQuestItem(
    @graphql.Args() args: CreatureQuestItemFindUniqueArgs
  ): Promise<CreatureQuestItem | null> {
    const result = await this.service.creatureQuestItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CreatureQuestItem)
  @nestAccessControl.UseRoles({
    resource: "CreatureQuestItem",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureQuestItem(
    @graphql.Args() args: DeleteCreatureQuestItemArgs
  ): Promise<CreatureQuestItem | null> {
    try {
      return await this.service.deleteCreatureQuestItem(args);
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
