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
import { CreatureTemplateSparring } from "./CreatureTemplateSparring";
import { CreatureTemplateSparringCountArgs } from "./CreatureTemplateSparringCountArgs";
import { CreatureTemplateSparringFindManyArgs } from "./CreatureTemplateSparringFindManyArgs";
import { CreatureTemplateSparringFindUniqueArgs } from "./CreatureTemplateSparringFindUniqueArgs";
import { DeleteCreatureTemplateSparringArgs } from "./DeleteCreatureTemplateSparringArgs";
import { CreatureTemplateSparringService } from "../creatureTemplateSparring.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateSparring)
export class CreatureTemplateSparringResolverBase {
  constructor(
    protected readonly service: CreatureTemplateSparringService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateSparring",
    action: "read",
    possession: "any",
  })
  async _creatureTemplateSparringsMeta(
    @graphql.Args() args: CreatureTemplateSparringCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureTemplateSparring])
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateSparring",
    action: "read",
    possession: "any",
  })
  async creatureTemplateSparrings(
    @graphql.Args() args: CreatureTemplateSparringFindManyArgs
  ): Promise<CreatureTemplateSparring[]> {
    return this.service.creatureTemplateSparrings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureTemplateSparring, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateSparring",
    action: "read",
    possession: "own",
  })
  async creatureTemplateSparring(
    @graphql.Args() args: CreatureTemplateSparringFindUniqueArgs
  ): Promise<CreatureTemplateSparring | null> {
    const result = await this.service.creatureTemplateSparring(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CreatureTemplateSparring)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateSparring",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureTemplateSparring(
    @graphql.Args() args: DeleteCreatureTemplateSparringArgs
  ): Promise<CreatureTemplateSparring | null> {
    try {
      return await this.service.deleteCreatureTemplateSparring(args);
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
