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
import { SubscriptionPlanDetailService } from "../subscriptionPlanDetail.service";
import { SubscriptionPlanDetailCreateInput } from "./SubscriptionPlanDetailCreateInput";
import { SubscriptionPlanDetail } from "./SubscriptionPlanDetail";
import { SubscriptionPlanDetailFindManyArgs } from "./SubscriptionPlanDetailFindManyArgs";
import { SubscriptionPlanDetailWhereUniqueInput } from "./SubscriptionPlanDetailWhereUniqueInput";
import { SubscriptionPlanDetailUpdateInput } from "./SubscriptionPlanDetailUpdateInput";

export class SubscriptionPlanDetailControllerBase {
  constructor(protected readonly service: SubscriptionPlanDetailService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SubscriptionPlanDetail })
  async createSubscriptionPlanDetail(
    @common.Body() data: SubscriptionPlanDetailCreateInput
  ): Promise<SubscriptionPlanDetail> {
    return await this.service.createSubscriptionPlanDetail({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SubscriptionPlanDetail] })
  @ApiNestedQuery(SubscriptionPlanDetailFindManyArgs)
  async subscriptionPlanDetails(
    @common.Req() request: Request
  ): Promise<SubscriptionPlanDetail[]> {
    const args = plainToClass(
      SubscriptionPlanDetailFindManyArgs,
      request.query
    );
    return this.service.subscriptionPlanDetails({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionPlanDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async subscriptionPlanDetail(
    @common.Param() params: SubscriptionPlanDetailWhereUniqueInput
  ): Promise<SubscriptionPlanDetail | null> {
    const result = await this.service.subscriptionPlanDetail({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: SubscriptionPlanDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSubscriptionPlanDetail(
    @common.Param() params: SubscriptionPlanDetailWhereUniqueInput,
    @common.Body() data: SubscriptionPlanDetailUpdateInput
  ): Promise<SubscriptionPlanDetail | null> {
    try {
      return await this.service.updateSubscriptionPlanDetail({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: SubscriptionPlanDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSubscriptionPlanDetail(
    @common.Param() params: SubscriptionPlanDetailWhereUniqueInput
  ): Promise<SubscriptionPlanDetail | null> {
    try {
      return await this.service.deleteSubscriptionPlanDetail({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
