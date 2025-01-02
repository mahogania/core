import * as graphql from "@nestjs/graphql";
import { CariCagDcshBlVhclResolverBase } from "./base/cariCagDcshBlVhcl.resolver.base";
import { CariCagDcshBlVhcl } from "./base/CariCagDcshBlVhcl";
import { CariCagDcshBlVhclService } from "./cariCagDcshBlVhcl.service";

@graphql.Resolver(() => CariCagDcshBlVhcl)
export class CariCagDcshBlVhclResolver extends CariCagDcshBlVhclResolverBase {
  constructor(protected readonly service: CariCagDcshBlVhclService) {
    super(service);
  }
}
