import * as graphql from "@nestjs/graphql";
import { CariCagDcshBlCntrResolverBase } from "./base/cariCagDcshBlCntr.resolver.base";
import { CariCagDcshBlCntr } from "./base/CariCagDcshBlCntr";
import { CariCagDcshBlCntrService } from "./cariCagDcshBlCntr.service";

@graphql.Resolver(() => CariCagDcshBlCntr)
export class CariCagDcshBlCntrResolver extends CariCagDcshBlCntrResolverBase {
  constructor(protected readonly service: CariCagDcshBlCntrService) {
    super(service);
  }
}
