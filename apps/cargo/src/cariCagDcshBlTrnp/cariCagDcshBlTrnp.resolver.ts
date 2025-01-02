import * as graphql from "@nestjs/graphql";
import { CariCagDcshBlTrnpResolverBase } from "./base/cariCagDcshBlTrnp.resolver.base";
import { CariCagDcshBlTrnp } from "./base/CariCagDcshBlTrnp";
import { CariCagDcshBlTrnpService } from "./cariCagDcshBlTrnp.service";

@graphql.Resolver(() => CariCagDcshBlTrnp)
export class CariCagDcshBlTrnpResolver extends CariCagDcshBlTrnpResolverBase {
  constructor(protected readonly service: CariCagDcshBlTrnpService) {
    super(service);
  }
}
