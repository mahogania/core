import * as graphql from "@nestjs/graphql";
import { DunningTypeResolverBase } from "./base/dunningType.resolver.base";
import { DunningType } from "./base/DunningType";
import { DunningTypeService } from "./dunningType.service";

@graphql.Resolver(() => DunningType)
export class DunningTypeResolver extends DunningTypeResolverBase {
  constructor(protected readonly service: DunningTypeService) {
    super(service);
  }
}
