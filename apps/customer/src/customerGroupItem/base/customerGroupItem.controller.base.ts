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
import { CustomerGroupItemService } from "../customerGroupItem.service";
import { CustomerGroupItemCreateInput } from "./CustomerGroupItemCreateInput";
import { CustomerGroupItem } from "./CustomerGroupItem";
import { CustomerGroupItemFindManyArgs } from "./CustomerGroupItemFindManyArgs";
import { CustomerGroupItemWhereUniqueInput } from "./CustomerGroupItemWhereUniqueInput";
import { CustomerGroupItemUpdateInput } from "./CustomerGroupItemUpdateInput";

export class CustomerGroupItemControllerBase {
  constructor(protected readonly service: CustomerGroupItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerGroupItem })
  async createCustomerGroupItem(
    @common.Body() data: CustomerGroupItemCreateInput
  ): Promise<CustomerGroupItem> {
    return await this.service.createCustomerGroupItem({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        customerGroup: true,
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
  @swagger.ApiOkResponse({ type: [CustomerGroupItem] })
  @ApiNestedQuery(CustomerGroupItemFindManyArgs)
  async customerGroupItems(
    @common.Req() request: Request
  ): Promise<CustomerGroupItem[]> {
    const args = plainToClass(CustomerGroupItemFindManyArgs, request.query);
    return this.service.customerGroupItems({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        customerGroup: true,
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
  @swagger.ApiOkResponse({ type: CustomerGroupItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customerGroupItem(
    @common.Param() params: CustomerGroupItemWhereUniqueInput
  ): Promise<CustomerGroupItem | null> {
    const result = await this.service.customerGroupItem({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        customerGroup: true,
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
  @swagger.ApiOkResponse({ type: CustomerGroupItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomerGroupItem(
    @common.Param() params: CustomerGroupItemWhereUniqueInput,
    @common.Body() data: CustomerGroupItemUpdateInput
  ): Promise<CustomerGroupItem | null> {
    try {
      return await this.service.updateCustomerGroupItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          customerGroup: true,
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
  @swagger.ApiOkResponse({ type: CustomerGroupItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomerGroupItem(
    @common.Param() params: CustomerGroupItemWhereUniqueInput
  ): Promise<CustomerGroupItem | null> {
    try {
      return await this.service.deleteCustomerGroupItem({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          customerGroup: true,
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
