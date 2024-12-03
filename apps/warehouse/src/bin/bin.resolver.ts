import * as graphql from "@nestjs/graphql";
import { BinResolverBase } from "./base/bin.resolver.base";
import { Bin } from "./base/Bin";
import { BinService } from "./bin.service";

@graphql.Resolver(() => Bin)
export class BinResolver extends BinResolverBase {
  constructor(protected readonly service: BinService) {
    super(service);
  }
}
