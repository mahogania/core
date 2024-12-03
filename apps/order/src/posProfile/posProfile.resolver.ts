import * as graphql from "@nestjs/graphql";
import { PosProfileResolverBase } from "./base/posProfile.resolver.base";
import { PosProfile } from "./base/PosProfile";
import { PosProfileService } from "./posProfile.service";

@graphql.Resolver(() => PosProfile)
export class PosProfileResolver extends PosProfileResolverBase {
  constructor(protected readonly service: PosProfileService) {
    super(service);
  }
}
