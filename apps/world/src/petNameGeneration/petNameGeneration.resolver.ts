import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PetNameGenerationResolverBase } from "./base/petNameGeneration.resolver.base";
import { PetNameGeneration } from "./base/PetNameGeneration";
import { PetNameGenerationService } from "./petNameGeneration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PetNameGeneration)
export class PetNameGenerationResolver extends PetNameGenerationResolverBase {
  constructor(
    protected readonly service: PetNameGenerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
