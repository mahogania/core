import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseResolverBase } from "./base/playerchoiceResponse.resolver.base";
import { PlayerchoiceResponse } from "./base/PlayerchoiceResponse";
import { PlayerchoiceResponseService } from "./playerchoiceResponse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponse)
export class PlayerchoiceResponseResolver extends PlayerchoiceResponseResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
