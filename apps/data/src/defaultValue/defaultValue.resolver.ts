import * as graphql from "@nestjs/graphql";
import { DefaultValueResolverBase } from "./base/defaultValue.resolver.base";
import { DefaultValue } from "./base/DefaultValue";
import { DefaultValueService } from "./defaultValue.service";

@graphql.Resolver(() => DefaultValue)
export class DefaultValueResolver extends DefaultValueResolverBase {
  constructor(protected readonly service: DefaultValueService) {
    super(service);
  }
}
