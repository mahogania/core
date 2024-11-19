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
import { ConsoleLogService } from "../consoleLog.service";
import { ConsoleLogCreateInput } from "./ConsoleLogCreateInput";
import { ConsoleLog } from "./ConsoleLog";
import { ConsoleLogFindManyArgs } from "./ConsoleLogFindManyArgs";
import { ConsoleLogWhereUniqueInput } from "./ConsoleLogWhereUniqueInput";
import { ConsoleLogUpdateInput } from "./ConsoleLogUpdateInput";

export class ConsoleLogControllerBase {
  constructor(protected readonly service: ConsoleLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ConsoleLog })
  async createConsoleLog(
    @common.Body() data: ConsoleLogCreateInput
  ): Promise<ConsoleLog> {
    return await this.service.createConsoleLog({
      data: data,
      select: {
        committed: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        script: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ConsoleLog] })
  @ApiNestedQuery(ConsoleLogFindManyArgs)
  async consoleLogs(@common.Req() request: Request): Promise<ConsoleLog[]> {
    const args = plainToClass(ConsoleLogFindManyArgs, request.query);
    return this.service.consoleLogs({
      ...args,
      select: {
        committed: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        script: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ConsoleLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async consoleLog(
    @common.Param() params: ConsoleLogWhereUniqueInput
  ): Promise<ConsoleLog | null> {
    const result = await this.service.consoleLog({
      where: params,
      select: {
        committed: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        script: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: ConsoleLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConsoleLog(
    @common.Param() params: ConsoleLogWhereUniqueInput,
    @common.Body() data: ConsoleLogUpdateInput
  ): Promise<ConsoleLog | null> {
    try {
      return await this.service.updateConsoleLog({
        where: params,
        data: data,
        select: {
          committed: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          script: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: ConsoleLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConsoleLog(
    @common.Param() params: ConsoleLogWhereUniqueInput
  ): Promise<ConsoleLog | null> {
    try {
      return await this.service.deleteConsoleLog({
        where: params,
        select: {
          committed: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          script: true,
          typeField: true,
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
}
