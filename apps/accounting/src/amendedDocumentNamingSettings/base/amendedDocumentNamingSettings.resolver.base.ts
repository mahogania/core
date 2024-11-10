/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AmendedDocumentNamingSettings } from "./AmendedDocumentNamingSettings";
import { AmendedDocumentNamingSettingsCountArgs } from "./AmendedDocumentNamingSettingsCountArgs";
import { AmendedDocumentNamingSettingsFindManyArgs } from "./AmendedDocumentNamingSettingsFindManyArgs";
import { AmendedDocumentNamingSettingsFindUniqueArgs } from "./AmendedDocumentNamingSettingsFindUniqueArgs";
import { CreateAmendedDocumentNamingSettingsArgs } from "./CreateAmendedDocumentNamingSettingsArgs";
import { UpdateAmendedDocumentNamingSettingsArgs } from "./UpdateAmendedDocumentNamingSettingsArgs";
import { DeleteAmendedDocumentNamingSettingsArgs } from "./DeleteAmendedDocumentNamingSettingsArgs";
import { AmendedDocumentNamingSettingsService } from "../amendedDocumentNamingSettings.service";
@graphql.Resolver(() => AmendedDocumentNamingSettings)
export class AmendedDocumentNamingSettingsResolverBase {
  constructor(
    protected readonly service: AmendedDocumentNamingSettingsService
  ) {}

  async _amendedDocumentNamingSettingsItemsMeta(
    @graphql.Args() args: AmendedDocumentNamingSettingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AmendedDocumentNamingSettings])
  async amendedDocumentNamingSettingsItems(
    @graphql.Args() args: AmendedDocumentNamingSettingsFindManyArgs
  ): Promise<AmendedDocumentNamingSettings[]> {
    return this.service.amendedDocumentNamingSettingsItems(args);
  }

  @graphql.Query(() => AmendedDocumentNamingSettings, { nullable: true })
  async amendedDocumentNamingSettings(
    @graphql.Args() args: AmendedDocumentNamingSettingsFindUniqueArgs
  ): Promise<AmendedDocumentNamingSettings | null> {
    const result = await this.service.amendedDocumentNamingSettings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AmendedDocumentNamingSettings)
  async createAmendedDocumentNamingSettings(
    @graphql.Args() args: CreateAmendedDocumentNamingSettingsArgs
  ): Promise<AmendedDocumentNamingSettings> {
    return await this.service.createAmendedDocumentNamingSettings({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AmendedDocumentNamingSettings)
  async updateAmendedDocumentNamingSettings(
    @graphql.Args() args: UpdateAmendedDocumentNamingSettingsArgs
  ): Promise<AmendedDocumentNamingSettings | null> {
    try {
      return await this.service.updateAmendedDocumentNamingSettings({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AmendedDocumentNamingSettings)
  async deleteAmendedDocumentNamingSettings(
    @graphql.Args() args: DeleteAmendedDocumentNamingSettingsArgs
  ): Promise<AmendedDocumentNamingSettings | null> {
    try {
      return await this.service.deleteAmendedDocumentNamingSettings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
