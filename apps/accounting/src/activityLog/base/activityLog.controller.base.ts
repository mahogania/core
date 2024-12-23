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
import { ActivityLogService } from "../activityLog.service";
import { ActivityLogCreateInput } from "./ActivityLogCreateInput";
import { ActivityLog } from "./ActivityLog";
import { ActivityLogFindManyArgs } from "./ActivityLogFindManyArgs";
import { ActivityLogWhereUniqueInput } from "./ActivityLogWhereUniqueInput";
import { ActivityLogUpdateInput } from "./ActivityLogUpdateInput";

export class ActivityLogControllerBase {
  constructor(protected readonly service: ActivityLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ActivityLog })
  async createActivityLog(
    @common.Body() data: ActivityLogCreateInput
  ): Promise<ActivityLog> {
    return await this.service.createActivityLog({
      data: data,
      select: {
        communicationDate: true,
        content: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        fullName: true,
        id: true,
        idx: true,
        ipAddress: true,
        linkDoctype: true,
        linkName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        operation: true,
        owner: true,
        referenceDoctype: true,
        referenceName: true,
        referenceOwner: true,
        status: true,
        subject: true,
        timelineDoctype: true,
        timelineName: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ActivityLog] })
  @ApiNestedQuery(ActivityLogFindManyArgs)
  async activityLogs(@common.Req() request: Request): Promise<ActivityLog[]> {
    const args = plainToClass(ActivityLogFindManyArgs, request.query);
    return this.service.activityLogs({
      ...args,
      select: {
        communicationDate: true,
        content: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        fullName: true,
        id: true,
        idx: true,
        ipAddress: true,
        linkDoctype: true,
        linkName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        operation: true,
        owner: true,
        referenceDoctype: true,
        referenceName: true,
        referenceOwner: true,
        status: true,
        subject: true,
        timelineDoctype: true,
        timelineName: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ActivityLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async activityLog(
    @common.Param() params: ActivityLogWhereUniqueInput
  ): Promise<ActivityLog | null> {
    const result = await this.service.activityLog({
      where: params,
      select: {
        communicationDate: true,
        content: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        fullName: true,
        id: true,
        idx: true,
        ipAddress: true,
        linkDoctype: true,
        linkName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        operation: true,
        owner: true,
        referenceDoctype: true,
        referenceName: true,
        referenceOwner: true,
        status: true,
        subject: true,
        timelineDoctype: true,
        timelineName: true,
        updatedAt: true,
        user: true,
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
  @swagger.ApiOkResponse({ type: ActivityLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateActivityLog(
    @common.Param() params: ActivityLogWhereUniqueInput,
    @common.Body() data: ActivityLogUpdateInput
  ): Promise<ActivityLog | null> {
    try {
      return await this.service.updateActivityLog({
        where: params,
        data: data,
        select: {
          communicationDate: true,
          content: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          fullName: true,
          id: true,
          idx: true,
          ipAddress: true,
          linkDoctype: true,
          linkName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          operation: true,
          owner: true,
          referenceDoctype: true,
          referenceName: true,
          referenceOwner: true,
          status: true,
          subject: true,
          timelineDoctype: true,
          timelineName: true,
          updatedAt: true,
          user: true,
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
  @swagger.ApiOkResponse({ type: ActivityLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteActivityLog(
    @common.Param() params: ActivityLogWhereUniqueInput
  ): Promise<ActivityLog | null> {
    try {
      return await this.service.deleteActivityLog({
        where: params,
        select: {
          communicationDate: true,
          content: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          fullName: true,
          id: true,
          idx: true,
          ipAddress: true,
          linkDoctype: true,
          linkName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          operation: true,
          owner: true,
          referenceDoctype: true,
          referenceName: true,
          referenceOwner: true,
          status: true,
          subject: true,
          timelineDoctype: true,
          timelineName: true,
          updatedAt: true,
          user: true,
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
