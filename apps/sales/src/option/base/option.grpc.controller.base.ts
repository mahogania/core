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
import { OptionService } from "../option.service";
import { OptionCreateInput } from "./OptionCreateInput";
import { OptionWhereInput } from "./OptionWhereInput";
import { OptionWhereUniqueInput } from "./OptionWhereUniqueInput";
import { OptionFindManyArgs } from "./OptionFindManyArgs";
import { OptionUpdateInput } from "./OptionUpdateInput";
import { Option } from "./Option";

export class OptionGrpcControllerBase {
  constructor(protected readonly service: OptionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Option })
  @GrpcMethod("OptionService", "createOption")
  async createOption(@common.Body() data: OptionCreateInput): Promise<Option> {
    return await this.service.createOption({
      data: {
        ...data,

        discount: data.discount
          ? {
              connect: data.discount,
            }
          : undefined,

        feature: data.feature
          ? {
              connect: data.feature,
            }
          : undefined,

        price: data.price
          ? {
              connect: data.price,
            }
          : undefined,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Option] })
  @ApiNestedQuery(OptionFindManyArgs)
  @GrpcMethod("OptionService", "options")
  async options(@common.Req() request: Request): Promise<Option[]> {
    const args = plainToClass(OptionFindManyArgs, request.query);
    return this.service.options({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Option })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OptionService", "option")
  async option(
    @common.Param() params: OptionWhereUniqueInput
  ): Promise<Option | null> {
    const result = await this.service.option({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Option })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OptionService", "updateOption")
  async updateOption(
    @common.Param() params: OptionWhereUniqueInput,
    @common.Body() data: OptionUpdateInput
  ): Promise<Option | null> {
    try {
      return await this.service.updateOption({
        where: params,
        data: {
          ...data,

          discount: data.discount
            ? {
                connect: data.discount,
              }
            : undefined,

          feature: data.feature
            ? {
                connect: data.feature,
              }
            : undefined,

          price: data.price
            ? {
                connect: data.price,
              }
            : undefined,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Option })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OptionService", "deleteOption")
  async deleteOption(
    @common.Param() params: OptionWhereUniqueInput
  ): Promise<Option | null> {
    try {
      return await this.service.deleteOption({
        where: params,
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
