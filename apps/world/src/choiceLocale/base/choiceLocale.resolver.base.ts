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
import { ChoiceLocale } from "./ChoiceLocale";
import { ChoiceLocaleCountArgs } from "./ChoiceLocaleCountArgs";
import { ChoiceLocaleFindManyArgs } from "./ChoiceLocaleFindManyArgs";
import { ChoiceLocaleFindUniqueArgs } from "./ChoiceLocaleFindUniqueArgs";
import { CreateChoiceLocaleArgs } from "./CreateChoiceLocaleArgs";
import { UpdateChoiceLocaleArgs } from "./UpdateChoiceLocaleArgs";
import { DeleteChoiceLocaleArgs } from "./DeleteChoiceLocaleArgs";
import { ChoiceFindManyArgs } from "../../choice/base/ChoiceFindManyArgs";
import { Choice } from "../../choice/base/Choice";
import { ChoiceLocaleService } from "../choiceLocale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChoiceLocale)
export class ChoiceLocaleResolverBase {
  constructor(
    protected readonly service: ChoiceLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "read",
    possession: "any",
  })
  async _choiceLocalesMeta(
    @graphql.Args() args: ChoiceLocaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ChoiceLocale])
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "read",
    possession: "any",
  })
  async choiceLocales(
    @graphql.Args() args: ChoiceLocaleFindManyArgs
  ): Promise<ChoiceLocale[]> {
    return this.service.choiceLocales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ChoiceLocale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "read",
    possession: "own",
  })
  async choiceLocale(
    @graphql.Args() args: ChoiceLocaleFindUniqueArgs
  ): Promise<ChoiceLocale | null> {
    const result = await this.service.choiceLocale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChoiceLocale)
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "create",
    possession: "any",
  })
  async createChoiceLocale(
    @graphql.Args() args: CreateChoiceLocaleArgs
  ): Promise<ChoiceLocale> {
    return await this.service.createChoiceLocale({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChoiceLocale)
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "update",
    possession: "any",
  })
  async updateChoiceLocale(
    @graphql.Args() args: UpdateChoiceLocaleArgs
  ): Promise<ChoiceLocale | null> {
    try {
      return await this.service.updateChoiceLocale({
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

  @graphql.Mutation(() => ChoiceLocale)
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "delete",
    possession: "any",
  })
  async deleteChoiceLocale(
    @graphql.Args() args: DeleteChoiceLocaleArgs
  ): Promise<ChoiceLocale | null> {
    try {
      return await this.service.deleteChoiceLocale(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Choice], { name: "choices" })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "any",
  })
  async findChoices(
    @graphql.Parent() parent: ChoiceLocale,
    @graphql.Args() args: ChoiceFindManyArgs
  ): Promise<Choice[]> {
    const results = await this.service.findChoices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}