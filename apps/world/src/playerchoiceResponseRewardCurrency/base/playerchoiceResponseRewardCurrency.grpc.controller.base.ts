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
import { PlayerchoiceResponseRewardCurrencyService } from "../playerchoiceResponseRewardCurrency.service";
import { PlayerchoiceResponseRewardCurrencyCreateInput } from "./PlayerchoiceResponseRewardCurrencyCreateInput";
import { PlayerchoiceResponseRewardCurrencyWhereInput } from "./PlayerchoiceResponseRewardCurrencyWhereInput";
import { PlayerchoiceResponseRewardCurrencyWhereUniqueInput } from "./PlayerchoiceResponseRewardCurrencyWhereUniqueInput";
import { PlayerchoiceResponseRewardCurrencyFindManyArgs } from "./PlayerchoiceResponseRewardCurrencyFindManyArgs";
import { PlayerchoiceResponseRewardCurrencyUpdateInput } from "./PlayerchoiceResponseRewardCurrencyUpdateInput";
import { PlayerchoiceResponseRewardCurrency } from "./PlayerchoiceResponseRewardCurrency";

export class PlayerchoiceResponseRewardCurrencyGrpcControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardCurrencyService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerchoiceResponseRewardCurrency })
  @GrpcMethod(
    "PlayerchoiceResponseRewardCurrencyService",
    "createPlayerchoiceResponseRewardCurrency"
  )
  async createPlayerchoiceResponseRewardCurrency(
    @common.Body() data: PlayerchoiceResponseRewardCurrencyCreateInput
  ): Promise<PlayerchoiceResponseRewardCurrency> {
    return await this.service.createPlayerchoiceResponseRewardCurrency({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerchoiceResponseRewardCurrency] })
  @ApiNestedQuery(PlayerchoiceResponseRewardCurrencyFindManyArgs)
  @GrpcMethod(
    "PlayerchoiceResponseRewardCurrencyService",
    "playerchoiceResponseRewardCurrencies"
  )
  async playerchoiceResponseRewardCurrencies(
    @common.Req() request: Request
  ): Promise<PlayerchoiceResponseRewardCurrency[]> {
    const args = plainToClass(
      PlayerchoiceResponseRewardCurrencyFindManyArgs,
      request.query
    );
    return this.service.playerchoiceResponseRewardCurrencies({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerchoiceResponseRewardCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerchoiceResponseRewardCurrencyService",
    "playerchoiceResponseRewardCurrency"
  )
  async playerchoiceResponseRewardCurrency(
    @common.Param() params: PlayerchoiceResponseRewardCurrencyWhereUniqueInput
  ): Promise<PlayerchoiceResponseRewardCurrency | null> {
    const result = await this.service.playerchoiceResponseRewardCurrency({
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
  @swagger.ApiOkResponse({ type: PlayerchoiceResponseRewardCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerchoiceResponseRewardCurrencyService",
    "updatePlayerchoiceResponseRewardCurrency"
  )
  async updatePlayerchoiceResponseRewardCurrency(
    @common.Param() params: PlayerchoiceResponseRewardCurrencyWhereUniqueInput,
    @common.Body() data: PlayerchoiceResponseRewardCurrencyUpdateInput
  ): Promise<PlayerchoiceResponseRewardCurrency | null> {
    try {
      return await this.service.updatePlayerchoiceResponseRewardCurrency({
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
  @swagger.ApiOkResponse({ type: PlayerchoiceResponseRewardCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerchoiceResponseRewardCurrencyService",
    "deletePlayerchoiceResponseRewardCurrency"
  )
  async deletePlayerchoiceResponseRewardCurrency(
    @common.Param() params: PlayerchoiceResponseRewardCurrencyWhereUniqueInput
  ): Promise<PlayerchoiceResponseRewardCurrency | null> {
    try {
      return await this.service.deletePlayerchoiceResponseRewardCurrency({
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
