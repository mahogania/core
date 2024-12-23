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
import { DataImportLog } from "./DataImportLog";
import { DataImportLogCountArgs } from "./DataImportLogCountArgs";
import { DataImportLogFindManyArgs } from "./DataImportLogFindManyArgs";
import { DataImportLogFindUniqueArgs } from "./DataImportLogFindUniqueArgs";
import { CreateDataImportLogArgs } from "./CreateDataImportLogArgs";
import { UpdateDataImportLogArgs } from "./UpdateDataImportLogArgs";
import { DeleteDataImportLogArgs } from "./DeleteDataImportLogArgs";
import { DataImport } from "../../dataImport/base/DataImport";
import { DataImportLogService } from "../dataImportLog.service";
@graphql.Resolver(() => DataImportLog)
export class DataImportLogResolverBase {
  constructor(protected readonly service: DataImportLogService) {}

  async _dataImportLogsMeta(
    @graphql.Args() args: DataImportLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DataImportLog])
  async dataImportLogs(
    @graphql.Args() args: DataImportLogFindManyArgs
  ): Promise<DataImportLog[]> {
    return this.service.dataImportLogs(args);
  }

  @graphql.Query(() => DataImportLog, { nullable: true })
  async dataImportLog(
    @graphql.Args() args: DataImportLogFindUniqueArgs
  ): Promise<DataImportLog | null> {
    const result = await this.service.dataImportLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DataImportLog)
  async createDataImportLog(
    @graphql.Args() args: CreateDataImportLogArgs
  ): Promise<DataImportLog> {
    return await this.service.createDataImportLog({
      ...args,
      data: {
        ...args.data,

        dataImport: args.data.dataImport
          ? {
              connect: args.data.dataImport,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DataImportLog)
  async updateDataImportLog(
    @graphql.Args() args: UpdateDataImportLogArgs
  ): Promise<DataImportLog | null> {
    try {
      return await this.service.updateDataImportLog({
        ...args,
        data: {
          ...args.data,

          dataImport: args.data.dataImport
            ? {
                connect: args.data.dataImport,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => DataImportLog)
  async deleteDataImportLog(
    @graphql.Args() args: DeleteDataImportLogArgs
  ): Promise<DataImportLog | null> {
    try {
      return await this.service.deleteDataImportLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => DataImport, {
    nullable: true,
    name: "dataImport",
  })
  async getDataImport(
    @graphql.Parent() parent: DataImportLog
  ): Promise<DataImport | null> {
    const result = await this.service.getDataImport(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
