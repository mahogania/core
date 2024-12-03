import * as graphql from "@nestjs/graphql";
import { TbClreDedCoResolverBase } from "./base/tbClreDedCo.resolver.base";
import { TbClreDedCo } from "./base/TbClreDedCo";
import { TbClreDedCoService } from "./tbClreDedCo.service";

@graphql.Resolver(() => TbClreDedCo)
export class TbClreDedCoResolver extends TbClreDedCoResolverBase {
  constructor(protected readonly service: TbClreDedCoService) {
    super(service);
  }
}
