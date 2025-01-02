import * as graphql from "@nestjs/graphql";
import { CariCagDcshBlTrlrResolverBase } from "./base/cariCagDcshBlTrlr.resolver.base";
import { CariCagDcshBlTrlr } from "./base/CariCagDcshBlTrlr";
import { CariCagDcshBlTrlrService } from "./cariCagDcshBlTrlr.service";

@graphql.Resolver(() => CariCagDcshBlTrlr)
export class CariCagDcshBlTrlrResolver extends CariCagDcshBlTrlrResolverBase {
  constructor(protected readonly service: CariCagDcshBlTrlrService) {
    super(service);
  }
}
