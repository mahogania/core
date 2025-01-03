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
import { GrpcMethod } from "@nestjs/microservices";
import { DiscountService } from "../discount.service";
import { DiscountCreateInput } from "./DiscountCreateInput";
import { DiscountWhereInput } from "./DiscountWhereInput";
import { DiscountWhereUniqueInput } from "./DiscountWhereUniqueInput";
import { DiscountFindManyArgs } from "./DiscountFindManyArgs";
import { DiscountUpdateInput } from "./DiscountUpdateInput";
import { Discount } from "./Discount";
import { OptionFindManyArgs } from "../../option/base/OptionFindManyArgs";
import { Option } from "../../option/base/Option";
import { OptionWhereUniqueInput } from "../../option/base/OptionWhereUniqueInput";

export class DiscountGrpcControllerBase {
  constructor(protected readonly service: DiscountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Discount })
  @GrpcMethod("DiscountService", "createDiscount")
  async createDiscount(
    @common.Body() data: DiscountCreateInput
  ): Promise<Discount> {
    return await this.service.createDiscount({
      data: {
        ...data,

        currency: data.currency
          ? {
              connect: data.currency,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        discountRuleUrl: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Discount] })
  @ApiNestedQuery(DiscountFindManyArgs)
  @GrpcMethod("DiscountService", "discounts")
  async discounts(@common.Req() request: Request): Promise<Discount[]> {
    const args = plainToClass(DiscountFindManyArgs, request.query);
    return this.service.discounts({
      ...args,
      select: {
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        discountRuleUrl: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DiscountService", "discount")
  async discount(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    const result = await this.service.discount({
      where: params,
      select: {
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        discountRuleUrl: true,
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
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DiscountService", "updateDiscount")
  async updateDiscount(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() data: DiscountUpdateInput
  ): Promise<Discount | null> {
    try {
      return await this.service.updateDiscount({
        where: params,
        data: {
          ...data,

          currency: data.currency
            ? {
                connect: data.currency,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          currency: {
            select: {
              id: true,
            },
          },

          discountRuleUrl: true,
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
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DiscountService", "deleteDiscount")
  async deleteDiscount(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    try {
      return await this.service.deleteDiscount({
        where: params,
        select: {
          createdAt: true,

          currency: {
            select: {
              id: true,
            },
          },

          discountRuleUrl: true,
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

  @common.Get("/:id/options")
  @ApiNestedQuery(OptionFindManyArgs)
  @GrpcMethod("DiscountService", "findManyOptions")
  async findManyOptions(
    @common.Req() request: Request,
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Option[]> {
    const query = plainToClass(OptionFindManyArgs, request.query);
    const results = await this.service.findOptions(params.id, {
      ...query,
      select: {
        createdAt: true,

        discount: {
          select: {
            id: true,
          },
        },

        feature: {
          select: {
            id: true,
          },
        },

        id: true,

        price: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/options")
  @GrpcMethod("DiscountService", "connectOptions")
  async connectOptions(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: OptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      options: {
        connect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/options")
  @GrpcMethod("DiscountService", "updateOptions")
  async updateOptions(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: OptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      options: {
        set: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/options")
  @GrpcMethod("DiscountService", "disconnectOptions")
  async disconnectOptions(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: OptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      options: {
        disconnect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }
}
