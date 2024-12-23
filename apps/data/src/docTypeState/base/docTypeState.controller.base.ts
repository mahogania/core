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
import { DocTypeStateService } from "../docTypeState.service";
import { DocTypeStateCreateInput } from "./DocTypeStateCreateInput";
import { DocTypeState } from "./DocTypeState";
import { DocTypeStateFindManyArgs } from "./DocTypeStateFindManyArgs";
import { DocTypeStateWhereUniqueInput } from "./DocTypeStateWhereUniqueInput";
import { DocTypeStateUpdateInput } from "./DocTypeStateUpdateInput";

export class DocTypeStateControllerBase {
  constructor(protected readonly service: DocTypeStateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DocTypeState })
  async createDocTypeState(
    @common.Body() data: DocTypeStateCreateInput
  ): Promise<DocTypeState> {
    return await this.service.createDocTypeState({
      data: data,
      select: {
        color: true,
        createdAt: true,
        creation: true,
        custom: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DocTypeState] })
  @ApiNestedQuery(DocTypeStateFindManyArgs)
  async docTypeStates(@common.Req() request: Request): Promise<DocTypeState[]> {
    const args = plainToClass(DocTypeStateFindManyArgs, request.query);
    return this.service.docTypeStates({
      ...args,
      select: {
        color: true,
        createdAt: true,
        creation: true,
        custom: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DocTypeState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async docTypeState(
    @common.Param() params: DocTypeStateWhereUniqueInput
  ): Promise<DocTypeState | null> {
    const result = await this.service.docTypeState({
      where: params,
      select: {
        color: true,
        createdAt: true,
        creation: true,
        custom: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: DocTypeState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocTypeState(
    @common.Param() params: DocTypeStateWhereUniqueInput,
    @common.Body() data: DocTypeStateUpdateInput
  ): Promise<DocTypeState | null> {
    try {
      return await this.service.updateDocTypeState({
        where: params,
        data: data,
        select: {
          color: true,
          createdAt: true,
          creation: true,
          custom: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: DocTypeState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocTypeState(
    @common.Param() params: DocTypeStateWhereUniqueInput
  ): Promise<DocTypeState | null> {
    try {
      return await this.service.deleteDocTypeState({
        where: params,
        select: {
          color: true,
          createdAt: true,
          creation: true,
          custom: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          title: true,
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
