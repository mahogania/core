import * as graphql from "@nestjs/graphql";
import { TbClreDedMdlStszResolverBase } from "./base/tbClreDedMdlStsz.resolver.base";
import { TbClreDedMdlStsz } from "./base/TbClreDedMdlStsz";
import { TbClreDedMdlStszService } from "./tbClreDedMdlStsz.service";

@graphql.Resolver(() => TbClreDedMdlStsz)
export class TbClreDedMdlStszResolver extends TbClreDedMdlStszResolverBase {
  constructor(protected readonly service: TbClreDedMdlStszService) {
    super(service);
  }
}
