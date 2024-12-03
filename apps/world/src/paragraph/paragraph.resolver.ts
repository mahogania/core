import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParagraphResolverBase } from "./base/paragraph.resolver.base";
import { Paragraph } from "./base/Paragraph";
import { ParagraphService } from "./paragraph.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Paragraph)
export class ParagraphResolver extends ParagraphResolverBase {
  constructor(
    protected readonly service: ParagraphService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
