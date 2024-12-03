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
import { CountryService } from "../country.service";
import { CountryCreateInput } from "./CountryCreateInput";
import { Country } from "./Country";
import { CountryFindManyArgs } from "./CountryFindManyArgs";
import { CountryWhereUniqueInput } from "./CountryWhereUniqueInput";
import { CountryUpdateInput } from "./CountryUpdateInput";

export class CountryControllerBase {
  constructor(protected readonly service: CountryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Country })
  async createCountry(
    @common.Body() data: CountryCreateInput
  ): Promise<Country> {
    return await this.service.createCountry({
      data: data,
      select: {
        code: true,
        countryName: true,
        createdAt: true,
        creation: true,
        dateFormat: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        timeFormat: true,
        timeZones: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Country] })
  @ApiNestedQuery(CountryFindManyArgs)
  async countries(@common.Req() request: Request): Promise<Country[]> {
    const args = plainToClass(CountryFindManyArgs, request.query);
    return this.service.countries({
      ...args,
      select: {
        code: true,
        countryName: true,
        createdAt: true,
        creation: true,
        dateFormat: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        timeFormat: true,
        timeZones: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async country(
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Country | null> {
    const result = await this.service.country({
      where: params,
      select: {
        code: true,
        countryName: true,
        createdAt: true,
        creation: true,
        dateFormat: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        timeFormat: true,
        timeZones: true,
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
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCountry(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() data: CountryUpdateInput
  ): Promise<Country | null> {
    try {
      return await this.service.updateCountry({
        where: params,
        data: data,
        select: {
          code: true,
          countryName: true,
          createdAt: true,
          creation: true,
          dateFormat: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          timeFormat: true,
          timeZones: true,
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
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCountry(
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Country | null> {
    try {
      return await this.service.deleteCountry({
        where: params,
        select: {
          code: true,
          countryName: true,
          createdAt: true,
          creation: true,
          dateFormat: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          timeFormat: true,
          timeZones: true,
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
