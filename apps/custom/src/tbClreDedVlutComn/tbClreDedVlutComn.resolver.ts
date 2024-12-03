import * as graphql from "@nestjs/graphql";
import { TbClreDedVlutComnResolverBase } from "./base/tbClreDedVlutComn.resolver.base";
import { TbClreDedVlutComn } from "./base/TbClreDedVlutComn";
import { TbClreDedVlutComnService } from "./tbClreDedVlutComn.service";

@graphql.Resolver(() => TbClreDedVlutComn)
export class TbClreDedVlutComnResolver extends TbClreDedVlutComnResolverBase {
  constructor(protected readonly service: TbClreDedVlutComnService) {
    super(service);
  }
}
