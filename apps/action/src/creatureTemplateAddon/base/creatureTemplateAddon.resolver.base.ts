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
import { CreatureTemplateAddon } from "./CreatureTemplateAddon";
import { CreatureTemplateAddonCountArgs } from "./CreatureTemplateAddonCountArgs";
import { CreatureTemplateAddonFindManyArgs } from "./CreatureTemplateAddonFindManyArgs";
import { CreatureTemplateAddonFindUniqueArgs } from "./CreatureTemplateAddonFindUniqueArgs";
import { DeleteCreatureTemplateAddonArgs } from "./DeleteCreatureTemplateAddonArgs";
import { CreatureTemplateAddonService } from "../creatureTemplateAddon.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CreatureTemplateAddon)
export class CreatureTemplateAddonResolverBase {
  constructor(
    protected readonly service: CreatureTemplateAddonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateAddon",
    action: "read",
    possession: "any",
  })
  async _creatureTemplateAddonsMeta(
    @graphql.Args() args: CreatureTemplateAddonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CreatureTemplateAddon])
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateAddon",
    action: "read",
    possession: "any",
  })
  async creatureTemplateAddons(
    @graphql.Args() args: CreatureTemplateAddonFindManyArgs
  ): Promise<CreatureTemplateAddon[]> {
    return this.service.creatureTemplateAddons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CreatureTemplateAddon, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateAddon",
    action: "read",
    possession: "own",
  })
  async creatureTemplateAddon(
    @graphql.Args() args: CreatureTemplateAddonFindUniqueArgs
  ): Promise<CreatureTemplateAddon | null> {
    const result = await this.service.creatureTemplateAddon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CreatureTemplateAddon)
  @nestAccessControl.UseRoles({
    resource: "CreatureTemplateAddon",
    action: "delete",
    possession: "any",
  })
  async deleteCreatureTemplateAddon(
    @graphql.Args() args: DeleteCreatureTemplateAddonArgs
  ): Promise<CreatureTemplateAddon | null> {
    try {
      return await this.service.deleteCreatureTemplateAddon(args);
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
