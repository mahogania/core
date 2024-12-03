import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ResponseLocaleResolverBase } from "./base/responseLocale.resolver.base";
import { ResponseLocale } from "./base/ResponseLocale";
import { ResponseLocaleService } from "./responseLocale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResponseLocale)
export class ResponseLocaleResolver extends ResponseLocaleResolverBase {
  constructor(
    protected readonly service: ResponseLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
