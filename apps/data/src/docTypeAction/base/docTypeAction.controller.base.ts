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
import { DocTypeActionService } from "../docTypeAction.service";
import { DocTypeActionCreateInput } from "./DocTypeActionCreateInput";
import { DocTypeAction } from "./DocTypeAction";
import { DocTypeActionFindManyArgs } from "./DocTypeActionFindManyArgs";
import { DocTypeActionWhereUniqueInput } from "./DocTypeActionWhereUniqueInput";
import { DocTypeActionUpdateInput } from "./DocTypeActionUpdateInput";

export class DocTypeActionControllerBase {
  constructor(protected readonly service: DocTypeActionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DocTypeAction })
  async createDocTypeAction(
    @common.Body() data: DocTypeActionCreateInput
  ): Promise<DocTypeAction> {
    return await this.service.createDocTypeAction({
      data: data,
      select: {
        action: true,
        actionType: true,
        createdAt: true,
        creation: true,
        custom: true,
        docstatus: true,
        group: true,
        hidden: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DocTypeAction] })
  @ApiNestedQuery(DocTypeActionFindManyArgs)
  async docTypeActions(
    @common.Req() request: Request
  ): Promise<DocTypeAction[]> {
    const args = plainToClass(DocTypeActionFindManyArgs, request.query);
    return this.service.docTypeActions({
      ...args,
      select: {
        action: true,
        actionType: true,
        createdAt: true,
        creation: true,
        custom: true,
        docstatus: true,
        group: true,
        hidden: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DocTypeAction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async docTypeAction(
    @common.Param() params: DocTypeActionWhereUniqueInput
  ): Promise<DocTypeAction | null> {
    const result = await this.service.docTypeAction({
      where: params,
      select: {
        action: true,
        actionType: true,
        createdAt: true,
        creation: true,
        custom: true,
        docstatus: true,
        group: true,
        hidden: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
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
  @swagger.ApiOkResponse({ type: DocTypeAction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocTypeAction(
    @common.Param() params: DocTypeActionWhereUniqueInput,
    @common.Body() data: DocTypeActionUpdateInput
  ): Promise<DocTypeAction | null> {
    try {
      return await this.service.updateDocTypeAction({
        where: params,
        data: data,
        select: {
          action: true,
          actionType: true,
          createdAt: true,
          creation: true,
          custom: true,
          docstatus: true,
          group: true,
          hidden: true,
          id: true,
          idx: true,
          label: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
  @swagger.ApiOkResponse({ type: DocTypeAction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocTypeAction(
    @common.Param() params: DocTypeActionWhereUniqueInput
  ): Promise<DocTypeAction | null> {
    try {
      return await this.service.deleteDocTypeAction({
        where: params,
        select: {
          action: true,
          actionType: true,
          createdAt: true,
          creation: true,
          custom: true,
          docstatus: true,
          group: true,
          hidden: true,
          id: true,
          idx: true,
          label: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
