/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DataImportService } from "../dataImport.service";
import { DataImportCreateInput } from "./DataImportCreateInput";
import { DataImport } from "./DataImport";
import { DataImportFindManyArgs } from "./DataImportFindManyArgs";
import { DataImportWhereUniqueInput } from "./DataImportWhereUniqueInput";
import { DataImportUpdateInput } from "./DataImportUpdateInput";
import { DataImportLogFindManyArgs } from "../../dataImportLog/base/DataImportLogFindManyArgs";
import { DataImportLog } from "../../dataImportLog/base/DataImportLog";
import { DataImportLogWhereUniqueInput } from "../../dataImportLog/base/DataImportLogWhereUniqueInput";

export class DataImportControllerBase {
  constructor(protected readonly service: DataImportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DataImport })
  async createDataImport(
    @common.Body() data: DataImportCreateInput
  ): Promise<DataImport> {
    return await this.service.createDataImport({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        googleSheetsUrl: true,
        id: true,
        idx: true,
        importFile: true,
        importType: true,
        modified: true,
        modifiedBy: true,
        muteEmails: true,
        name: true,
        owner: true,
        payloadCount: true,
        referenceDoctype: true,
        showFailedLogs: true,
        status: true,
        submitAfterImport: true,
        templateOptions: true,
        templateWarnings: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DataImport] })
  @ApiNestedQuery(DataImportFindManyArgs)
  async dataImports(@common.Req() request: Request): Promise<DataImport[]> {
    const args = plainToClass(DataImportFindManyArgs, request.query);
    return this.service.dataImports({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        googleSheetsUrl: true,
        id: true,
        idx: true,
        importFile: true,
        importType: true,
        modified: true,
        modifiedBy: true,
        muteEmails: true,
        name: true,
        owner: true,
        payloadCount: true,
        referenceDoctype: true,
        showFailedLogs: true,
        status: true,
        submitAfterImport: true,
        templateOptions: true,
        templateWarnings: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DataImport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dataImport(
    @common.Param() params: DataImportWhereUniqueInput
  ): Promise<DataImport | null> {
    const result = await this.service.dataImport({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        googleSheetsUrl: true,
        id: true,
        idx: true,
        importFile: true,
        importType: true,
        modified: true,
        modifiedBy: true,
        muteEmails: true,
        name: true,
        owner: true,
        payloadCount: true,
        referenceDoctype: true,
        showFailedLogs: true,
        status: true,
        submitAfterImport: true,
        templateOptions: true,
        templateWarnings: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DataImport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDataImport(
    @common.Param() params: DataImportWhereUniqueInput,
    @common.Body() data: DataImportUpdateInput
  ): Promise<DataImport | null> {
    try {
      return await this.service.updateDataImport({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          googleSheetsUrl: true,
          id: true,
          idx: true,
          importFile: true,
          importType: true,
          modified: true,
          modifiedBy: true,
          muteEmails: true,
          name: true,
          owner: true,
          payloadCount: true,
          referenceDoctype: true,
          showFailedLogs: true,
          status: true,
          submitAfterImport: true,
          templateOptions: true,
          templateWarnings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DataImport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDataImport(
    @common.Param() params: DataImportWhereUniqueInput
  ): Promise<DataImport | null> {
    try {
      return await this.service.deleteDataImport({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          googleSheetsUrl: true,
          id: true,
          idx: true,
          importFile: true,
          importType: true,
          modified: true,
          modifiedBy: true,
          muteEmails: true,
          name: true,
          owner: true,
          payloadCount: true,
          referenceDoctype: true,
          showFailedLogs: true,
          status: true,
          submitAfterImport: true,
          templateOptions: true,
          templateWarnings: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/dataImportLogs")
  @ApiNestedQuery(DataImportLogFindManyArgs)
  async findDataImportLogs(
    @common.Req() request: Request,
    @common.Param() params: DataImportWhereUniqueInput
  ): Promise<DataImportLog[]> {
    const query = plainToClass(DataImportLogFindManyArgs, request.query);
    const results = await this.service.findDataImportLogs(params.id, {
      ...query,
      select: {
        createdAt: true,
        creation: true,

        dataImport: {
          select: {
            id: true,
          },
        },

        docname: true,
        docstatus: true,
        exception: true,
        id: true,
        idx: true,
        logIndex: true,
        messages: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        rowIndexes: true,
        success: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dataImportLogs")
  async connectDataImportLogs(
    @common.Param() params: DataImportWhereUniqueInput,
    @common.Body() body: DataImportLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataImportLogs: {
        connect: body,
      },
    };
    await this.service.updateDataImport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dataImportLogs")
  async updateDataImportLogs(
    @common.Param() params: DataImportWhereUniqueInput,
    @common.Body() body: DataImportLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataImportLogs: {
        set: body,
      },
    };
    await this.service.updateDataImport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dataImportLogs")
  async disconnectDataImportLogs(
    @common.Param() params: DataImportWhereUniqueInput,
    @common.Body() body: DataImportLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataImportLogs: {
        disconnect: body,
      },
    };
    await this.service.updateDataImport({
      where: params,
      data,
      select: { id: true },
    });
  }
}
