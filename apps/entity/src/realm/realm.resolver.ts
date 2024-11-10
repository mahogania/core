import * as graphql from "@nestjs/graphql";
import { RealmResolverBase } from "./base/realm.resolver.base";
import { Realm } from "./base/Realm";
import { RealmService } from "./realm.service";

@graphql.Resolver(() => Realm)
export class RealmResolver extends RealmResolverBase {
  constructor(protected readonly service: RealmService) {
    super(service);
  }
}
