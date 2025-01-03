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
import { CustomerCreditLimitService } from "../customerCreditLimit.service";
import { CustomerCreditLimitCreateInput } from "./CustomerCreditLimitCreateInput";
import { CustomerCreditLimit } from "./CustomerCreditLimit";
import { CustomerCreditLimitFindManyArgs } from "./CustomerCreditLimitFindManyArgs";
import { CustomerCreditLimitWhereUniqueInput } from "./CustomerCreditLimitWhereUniqueInput";
import { CustomerCreditLimitUpdateInput } from "./CustomerCreditLimitUpdateInput";

export class CustomerCreditLimitControllerBase {
  constructor(protected readonly service: CustomerCreditLimitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerCreditLimit })
  async createCustomerCreditLimit(
    @common.Body() data: CustomerCreditLimitCreateInput
  ): Promise<CustomerCreditLimit> {
    return await this.service.createCustomerCreditLimit({
      data: data,
      select: {
        bypassCreditLimitCheck: true,
        company: true,
        createdAt: true,
        creation: true,
        creditLimit: true,
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
  @swagger.ApiOkResponse({ type: [CustomerCreditLimit] })
  @ApiNestedQuery(CustomerCreditLimitFindManyArgs)
  async customerCreditLimits(
    @common.Req() request: Request
  ): Promise<CustomerCreditLimit[]> {
    const args = plainToClass(CustomerCreditLimitFindManyArgs, request.query);
    return this.service.customerCreditLimits({
      ...args,
      select: {
        bypassCreditLimitCheck: true,
        company: true,
        createdAt: true,
        creation: true,
        creditLimit: true,
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
  @swagger.ApiOkResponse({ type: CustomerCreditLimit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customerCreditLimit(
    @common.Param() params: CustomerCreditLimitWhereUniqueInput
  ): Promise<CustomerCreditLimit | null> {
    const result = await this.service.customerCreditLimit({
      where: params,
      select: {
        bypassCreditLimitCheck: true,
        company: true,
        createdAt: true,
        creation: true,
        creditLimit: true,
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
  @swagger.ApiOkResponse({ type: CustomerCreditLimit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomerCreditLimit(
    @common.Param() params: CustomerCreditLimitWhereUniqueInput,
    @common.Body() data: CustomerCreditLimitUpdateInput
  ): Promise<CustomerCreditLimit | null> {
    try {
      return await this.service.updateCustomerCreditLimit({
        where: params,
        data: data,
        select: {
          bypassCreditLimitCheck: true,
          company: true,
          createdAt: true,
          creation: true,
          creditLimit: true,
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
  @swagger.ApiOkResponse({ type: CustomerCreditLimit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomerCreditLimit(
    @common.Param() params: CustomerCreditLimitWhereUniqueInput
  ): Promise<CustomerCreditLimit | null> {
    try {
      return await this.service.deleteCustomerCreditLimit({
        where: params,
        select: {
          bypassCreditLimitCheck: true,
          company: true,
          createdAt: true,
          creation: true,
          creditLimit: true,
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
