import * as graphql from "@nestjs/graphql";
import { ClientScriptResolverBase } from "./base/clientScript.resolver.base";
import { ClientScript } from "./base/ClientScript";
import { ClientScriptService } from "./clientScript.service";

@graphql.Resolver(() => ClientScript)
export class ClientScriptResolver extends ClientScriptResolverBase {
  constructor(protected readonly service: ClientScriptService) {
    super(service);
  }
}
