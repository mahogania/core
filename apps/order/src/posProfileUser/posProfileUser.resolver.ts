import * as graphql from "@nestjs/graphql";
import { PosProfileUserResolverBase } from "./base/posProfileUser.resolver.base";
import { PosProfileUser } from "./base/PosProfileUser";
import { PosProfileUserService } from "./posProfileUser.service";

@graphql.Resolver(() => PosProfileUser)
export class PosProfileUserResolver extends PosProfileUserResolverBase {
  constructor(protected readonly service: PosProfileUserService) {
    super(service);
  }
}
