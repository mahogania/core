import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlayerchoiceResponseMawPowerResolverBase } from "./base/playerchoiceResponseMawPower.resolver.base";
import { PlayerchoiceResponseMawPower } from "./base/PlayerchoiceResponseMawPower";
import { PlayerchoiceResponseMawPowerService } from "./playerchoiceResponseMawPower.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerchoiceResponseMawPower)
export class PlayerchoiceResponseMawPowerResolver extends PlayerchoiceResponseMawPowerResolverBase {
  constructor(
    protected readonly service: PlayerchoiceResponseMawPowerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
