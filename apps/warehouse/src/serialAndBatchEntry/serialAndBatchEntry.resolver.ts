import * as graphql from "@nestjs/graphql";
import { SerialAndBatchEntryResolverBase } from "./base/serialAndBatchEntry.resolver.base";
import { SerialAndBatchEntry } from "./base/SerialAndBatchEntry";
import { SerialAndBatchEntryService } from "./serialAndBatchEntry.service";

@graphql.Resolver(() => SerialAndBatchEntry)
export class SerialAndBatchEntryResolver extends SerialAndBatchEntryResolverBase {
  constructor(protected readonly service: SerialAndBatchEntryService) {
    super(service);
  }
}
