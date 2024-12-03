import * as graphql from "@nestjs/graphql";
import { TbClreDedVhclResolverBase } from "./base/tbClreDedVhcl.resolver.base";
import { TbClreDedVhcl } from "./base/TbClreDedVhcl";
import { TbClreDedVhclService } from "./tbClreDedVhcl.service";

@graphql.Resolver(() => TbClreDedVhcl)
export class TbClreDedVhclResolver extends TbClreDedVhclResolverBase {
  constructor(protected readonly service: TbClreDedVhclService) {
    super(service);
  }
}
