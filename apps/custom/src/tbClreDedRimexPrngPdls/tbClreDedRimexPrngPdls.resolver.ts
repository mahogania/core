import * as graphql from "@nestjs/graphql";
import { TbClreDedRimexPrngPdlsResolverBase } from "./base/tbClreDedRimexPrngPdls.resolver.base";
import { TbClreDedRimexPrngPdls } from "./base/TbClreDedRimexPrngPdls";
import { TbClreDedRimexPrngPdlsService } from "./tbClreDedRimexPrngPdls.service";

@graphql.Resolver(() => TbClreDedRimexPrngPdls)
export class TbClreDedRimexPrngPdlsResolver extends TbClreDedRimexPrngPdlsResolverBase {
  constructor(protected readonly service: TbClreDedRimexPrngPdlsService) {
    super(service);
  }
}
