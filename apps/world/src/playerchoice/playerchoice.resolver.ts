import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResolverBase } from "./base/playerchoice.resolver.base";
import { Playerchoice } from "./base/Playerchoice";
import { PlayerchoiceService } from "./playerchoice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Playerchoice)
export class PlayerchoiceResolver extends PlayerchoiceResolverBase {
  constructor(
    protected readonly service: PlayerchoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
