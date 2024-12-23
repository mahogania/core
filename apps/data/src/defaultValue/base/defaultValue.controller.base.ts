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
import { DefaultValueService } from "../defaultValue.service";
import { DefaultValueCreateInput } from "./DefaultValueCreateInput";
import { DefaultValue } from "./DefaultValue";
import { DefaultValueFindManyArgs } from "./DefaultValueFindManyArgs";
import { DefaultValueWhereUniqueInput } from "./DefaultValueWhereUniqueInput";
import { DefaultValueUpdateInput } from "./DefaultValueUpdateInput";

export class DefaultValueControllerBase {
  constructor(protected readonly service: DefaultValueService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DefaultValue })
  async createDefaultValue(
    @common.Body() data: DefaultValueCreateInput
  ): Promise<DefaultValue> {
    return await this.service.createDefaultValue({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        defkey: true,
        defvalue: true,
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
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DefaultValue] })
  @ApiNestedQuery(DefaultValueFindManyArgs)
  async defaultValues(@common.Req() request: Request): Promise<DefaultValue[]> {
    const args = plainToClass(DefaultValueFindManyArgs, request.query);
    return this.service.defaultValues({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        defkey: true,
        defvalue: true,
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
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DefaultValue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async defaultValue(
    @common.Param() params: DefaultValueWhereUniqueInput
  ): Promise<DefaultValue | null> {
    const result = await this.service.defaultValue({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        defkey: true,
        defvalue: true,
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
  @swagger.ApiOkResponse({ type: DefaultValue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDefaultValue(
    @common.Param() params: DefaultValueWhereUniqueInput,
    @common.Body() data: DefaultValueUpdateInput
  ): Promise<DefaultValue | null> {
    try {
      return await this.service.updateDefaultValue({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          defkey: true,
          defvalue: true,
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
  @swagger.ApiOkResponse({ type: DefaultValue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDefaultValue(
    @common.Param() params: DefaultValueWhereUniqueInput
  ): Promise<DefaultValue | null> {
    try {
      return await this.service.deleteDefaultValue({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          defkey: true,
          defvalue: true,
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
