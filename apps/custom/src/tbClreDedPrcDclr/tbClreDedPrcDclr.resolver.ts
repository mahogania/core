import * as graphql from "@nestjs/graphql";
import { TbClreDedPrcDclrResolverBase } from "./base/tbClreDedPrcDclr.resolver.base";
import { TbClreDedPrcDclr } from "./base/TbClreDedPrcDclr";
import { TbClreDedPrcDclrService } from "./tbClreDedPrcDclr.service";

@graphql.Resolver(() => TbClreDedPrcDclr)
export class TbClreDedPrcDclrResolver extends TbClreDedPrcDclrResolverBase {
  constructor(protected readonly service: TbClreDedPrcDclrService) {
    super(service);
  }
}
