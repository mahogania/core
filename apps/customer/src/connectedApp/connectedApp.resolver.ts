import * as graphql from "@nestjs/graphql";
import { ConnectedAppResolverBase } from "./base/connectedApp.resolver.base";
import { ConnectedApp } from "./base/ConnectedApp";
import { ConnectedAppService } from "./connectedApp.service";

@graphql.Resolver(() => ConnectedApp)
export class ConnectedAppResolver extends ConnectedAppResolverBase {
  constructor(protected readonly service: ConnectedAppService) {
    super(service);
  }
}
