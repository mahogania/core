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
import { PosFieldService } from "../posField.service";
import { PosFieldCreateInput } from "./PosFieldCreateInput";
import { PosField } from "./PosField";
import { PosFieldFindManyArgs } from "./PosFieldFindManyArgs";
import { PosFieldWhereUniqueInput } from "./PosFieldWhereUniqueInput";
import { PosFieldUpdateInput } from "./PosFieldUpdateInput";

export class PosFieldControllerBase {
  constructor(protected readonly service: PosFieldService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PosField })
  async createPosField(
    @common.Body() data: PosFieldCreateInput
  ): Promise<PosField> {
    return await this.service.createPosField({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        defaultValue: true,
        docStatus: true,
        fieldname: true,
        fieldtype: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        options: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        readOnly: true,
        reqd: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PosField] })
  @ApiNestedQuery(PosFieldFindManyArgs)
  async posFields(@common.Req() request: Request): Promise<PosField[]> {
    const args = plainToClass(PosFieldFindManyArgs, request.query);
    return this.service.posFields({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        defaultValue: true,
        docStatus: true,
        fieldname: true,
        fieldtype: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        options: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        readOnly: true,
        reqd: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PosField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async posField(
    @common.Param() params: PosFieldWhereUniqueInput
  ): Promise<PosField | null> {
    const result = await this.service.posField({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        defaultValue: true,
        docStatus: true,
        fieldname: true,
        fieldtype: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        options: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        readOnly: true,
        reqd: true,
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
  @swagger.ApiOkResponse({ type: PosField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePosField(
    @common.Param() params: PosFieldWhereUniqueInput,
    @common.Body() data: PosFieldUpdateInput
  ): Promise<PosField | null> {
    try {
      return await this.service.updatePosField({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          defaultValue: true,
          docStatus: true,
          fieldname: true,
          fieldtype: true,
          id: true,
          idx: true,
          label: true,
          modified: true,
          modifiedBy: true,
          name: true,
          options: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          readOnly: true,
          reqd: true,
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
  @swagger.ApiOkResponse({ type: PosField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePosField(
    @common.Param() params: PosFieldWhereUniqueInput
  ): Promise<PosField | null> {
    try {
      return await this.service.deletePosField({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          defaultValue: true,
          docStatus: true,
          fieldname: true,
          fieldtype: true,
          id: true,
          idx: true,
          label: true,
          modified: true,
          modifiedBy: true,
          name: true,
          options: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          readOnly: true,
          reqd: true,
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