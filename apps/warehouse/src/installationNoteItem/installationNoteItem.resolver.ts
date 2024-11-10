import * as graphql from "@nestjs/graphql";
import { InstallationNoteItemResolverBase } from "./base/installationNoteItem.resolver.base";
import { InstallationNoteItem } from "./base/InstallationNoteItem";
import { InstallationNoteItemService } from "./installationNoteItem.service";

@graphql.Resolver(() => InstallationNoteItem)
export class InstallationNoteItemResolver extends InstallationNoteItemResolverBase {
  constructor(protected readonly service: InstallationNoteItemService) {
    super(service);
  }
}
