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
import { DocTypeLayoutService } from "../docTypeLayout.service";
import { DocTypeLayoutCreateInput } from "./DocTypeLayoutCreateInput";
import { DocTypeLayout } from "./DocTypeLayout";
import { DocTypeLayoutFindManyArgs } from "./DocTypeLayoutFindManyArgs";
import { DocTypeLayoutWhereUniqueInput } from "./DocTypeLayoutWhereUniqueInput";
import { DocTypeLayoutUpdateInput } from "./DocTypeLayoutUpdateInput";

export class DocTypeLayoutControllerBase {
  constructor(protected readonly service: DocTypeLayoutService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DocTypeLayout })
  async createDocTypeLayout(
    @common.Body() data: DocTypeLayoutCreateInput
  ): Promise<DocTypeLayout> {
    return await this.service.createDocTypeLayout({
      data: data,
      select: {
        clientScript: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        documentType: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        route: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DocTypeLayout] })
  @ApiNestedQuery(DocTypeLayoutFindManyArgs)
  async docTypeLayouts(
    @common.Req() request: Request
  ): Promise<DocTypeLayout[]> {
    const args = plainToClass(DocTypeLayoutFindManyArgs, request.query);
    return this.service.docTypeLayouts({
      ...args,
      select: {
        clientScript: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        documentType: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        route: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DocTypeLayout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async docTypeLayout(
    @common.Param() params: DocTypeLayoutWhereUniqueInput
  ): Promise<DocTypeLayout | null> {
    const result = await this.service.docTypeLayout({
      where: params,
      select: {
        clientScript: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        documentType: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        route: true,
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
  @swagger.ApiOkResponse({ type: DocTypeLayout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocTypeLayout(
    @common.Param() params: DocTypeLayoutWhereUniqueInput,
    @common.Body() data: DocTypeLayoutUpdateInput
  ): Promise<DocTypeLayout | null> {
    try {
      return await this.service.updateDocTypeLayout({
        where: params,
        data: data,
        select: {
          clientScript: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          documentType: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          route: true,
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
  @swagger.ApiOkResponse({ type: DocTypeLayout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocTypeLayout(
    @common.Param() params: DocTypeLayoutWhereUniqueInput
  ): Promise<DocTypeLayout | null> {
    try {
      return await this.service.deleteDocTypeLayout({
        where: params,
        select: {
          clientScript: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          documentType: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          route: true,
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
