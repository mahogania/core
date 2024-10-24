import * as graphql from "@nestjs/graphql";
import { FragmentResolverBase } from "./base/fragment.resolver.base";
import { Fragment } from "./base/Fragment";
import { FragmentService } from "./fragment.service";

@graphql.Resolver(() => Fragment)
export class FragmentResolver extends FragmentResolverBase {
  constructor(protected readonly service: FragmentService) {
    super(service);
  }
}
