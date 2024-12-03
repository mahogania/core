import * as graphql from "@nestjs/graphql";
import { ClosedDocumentResolverBase } from "./base/closedDocument.resolver.base";
import { ClosedDocument } from "./base/ClosedDocument";
import { ClosedDocumentService } from "./closedDocument.service";

@graphql.Resolver(() => ClosedDocument)
export class ClosedDocumentResolver extends ClosedDocumentResolverBase {
  constructor(protected readonly service: ClosedDocumentService) {
    super(service);
  }
}
