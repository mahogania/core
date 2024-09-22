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
import { QuestGreetingLocale } from "./QuestGreetingLocale";
import { QuestGreetingLocaleCountArgs } from "./QuestGreetingLocaleCountArgs";
import { QuestGreetingLocaleFindManyArgs } from "./QuestGreetingLocaleFindManyArgs";
import { QuestGreetingLocaleFindUniqueArgs } from "./QuestGreetingLocaleFindUniqueArgs";
import { DeleteQuestGreetingLocaleArgs } from "./DeleteQuestGreetingLocaleArgs";
import { QuestGreetingLocaleService } from "../questGreetingLocale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestGreetingLocale)
export class QuestGreetingLocaleResolverBase {
  constructor(
    protected readonly service: QuestGreetingLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "read",
    possession: "any",
  })
  async _questGreetingLocalesMeta(
    @graphql.Args() args: QuestGreetingLocaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QuestGreetingLocale])
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "read",
    possession: "any",
  })
  async questGreetingLocales(
    @graphql.Args() args: QuestGreetingLocaleFindManyArgs
  ): Promise<QuestGreetingLocale[]> {
    return this.service.questGreetingLocales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QuestGreetingLocale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "read",
    possession: "own",
  })
  async questGreetingLocale(
    @graphql.Args() args: QuestGreetingLocaleFindUniqueArgs
  ): Promise<QuestGreetingLocale | null> {
    const result = await this.service.questGreetingLocale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuestGreetingLocale)
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "delete",
    possession: "any",
  })
  async deleteQuestGreetingLocale(
    @graphql.Args() args: DeleteQuestGreetingLocaleArgs
  ): Promise<QuestGreetingLocale | null> {
    try {
      return await this.service.deleteQuestGreetingLocale(args);
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
