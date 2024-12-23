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
import { ModeOfPaymentService } from "../modeOfPayment.service";
import { ModeOfPaymentCreateInput } from "./ModeOfPaymentCreateInput";
import { ModeOfPayment } from "./ModeOfPayment";
import { ModeOfPaymentFindManyArgs } from "./ModeOfPaymentFindManyArgs";
import { ModeOfPaymentWhereUniqueInput } from "./ModeOfPaymentWhereUniqueInput";
import { ModeOfPaymentUpdateInput } from "./ModeOfPaymentUpdateInput";

export class ModeOfPaymentControllerBase {
  constructor(protected readonly service: ModeOfPaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ModeOfPayment })
  async createModeOfPayment(
    @common.Body() data: ModeOfPaymentCreateInput
  ): Promise<ModeOfPayment> {
    return await this.service.createModeOfPayment({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docStatus: true,
        enabled: true,
        id: true,
        idx: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ModeOfPayment] })
  @ApiNestedQuery(ModeOfPaymentFindManyArgs)
  async modeOfPayments(
    @common.Req() request: Request
  ): Promise<ModeOfPayment[]> {
    const args = plainToClass(ModeOfPaymentFindManyArgs, request.query);
    return this.service.modeOfPayments({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docStatus: true,
        enabled: true,
        id: true,
        idx: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ModeOfPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async modeOfPayment(
    @common.Param() params: ModeOfPaymentWhereUniqueInput
  ): Promise<ModeOfPayment | null> {
    const result = await this.service.modeOfPayment({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docStatus: true,
        enabled: true,
        id: true,
        idx: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
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
  @swagger.ApiOkResponse({ type: ModeOfPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateModeOfPayment(
    @common.Param() params: ModeOfPaymentWhereUniqueInput,
    @common.Body() data: ModeOfPaymentUpdateInput
  ): Promise<ModeOfPayment | null> {
    try {
      return await this.service.updateModeOfPayment({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docStatus: true,
          enabled: true,
          id: true,
          idx: true,
          modeOfPayment: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
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
  @swagger.ApiOkResponse({ type: ModeOfPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteModeOfPayment(
    @common.Param() params: ModeOfPaymentWhereUniqueInput
  ): Promise<ModeOfPayment | null> {
    try {
      return await this.service.deleteModeOfPayment({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docStatus: true,
          enabled: true,
          id: true,
          idx: true,
          modeOfPayment: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
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
