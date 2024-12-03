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
import { CargoDeclarationVehicleService } from "../cargoDeclarationVehicle.service";
import { CargoDeclarationVehicleCreateInput } from "./CargoDeclarationVehicleCreateInput";
import { CargoDeclarationVehicle } from "./CargoDeclarationVehicle";
import { CargoDeclarationVehicleFindManyArgs } from "./CargoDeclarationVehicleFindManyArgs";
import { CargoDeclarationVehicleWhereUniqueInput } from "./CargoDeclarationVehicleWhereUniqueInput";
import { CargoDeclarationVehicleUpdateInput } from "./CargoDeclarationVehicleUpdateInput";

export class CargoDeclarationVehicleControllerBase {
  constructor(protected readonly service: CargoDeclarationVehicleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CargoDeclarationVehicle })
  @swagger.ApiBody({
    type: CargoDeclarationVehicleCreateInput,
  })
  async createCargoDeclarationVehicle(
    @common.Body() data: CargoDeclarationVehicleCreateInput
  ): Promise<CargoDeclarationVehicle> {
    return await this.service.createCargoDeclarationVehicle({
      data: data,
      select: {
        cagMgmtNo: true,
        chssNo: true,
        createdAt: true,
        delYn: true,
        engnClndGcnt: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        updatedAt: true,
        vhclKndNm: true,
        vhclMdlCd: true,
        vhclMnfcYy: true,
        vhclMnurCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTotlWght: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CargoDeclarationVehicle] })
  @ApiNestedQuery(CargoDeclarationVehicleFindManyArgs)
  async cargoDeclarationVehicles(
    @common.Req() request: Request
  ): Promise<CargoDeclarationVehicle[]> {
    const args = plainToClass(
      CargoDeclarationVehicleFindManyArgs,
      request.query
    );
    return this.service.cargoDeclarationVehicles({
      ...args,
      select: {
        cagMgmtNo: true,
        chssNo: true,
        createdAt: true,
        delYn: true,
        engnClndGcnt: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        updatedAt: true,
        vhclKndNm: true,
        vhclMdlCd: true,
        vhclMnfcYy: true,
        vhclMnurCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTotlWght: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CargoDeclarationVehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cargoDeclarationVehicle(
    @common.Param() params: CargoDeclarationVehicleWhereUniqueInput
  ): Promise<CargoDeclarationVehicle | null> {
    const result = await this.service.cargoDeclarationVehicle({
      where: params,
      select: {
        cagMgmtNo: true,
        chssNo: true,
        createdAt: true,
        delYn: true,
        engnClndGcnt: true,
        frstRegstId: true,
        frstRgsrDttm: true,
        id: true,
        lastChgDttm: true,
        lastChprId: true,
        mrn: true,
        updatedAt: true,
        vhclKndNm: true,
        vhclMdlCd: true,
        vhclMnfcYy: true,
        vhclMnurCd: true,
        vhclRgsrNo: true,
        vhclSrno: true,
        vhclTotlWght: true,
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
  @swagger.ApiOkResponse({ type: CargoDeclarationVehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CargoDeclarationVehicleUpdateInput,
  })
  async updateCargoDeclarationVehicle(
    @common.Param() params: CargoDeclarationVehicleWhereUniqueInput,
    @common.Body() data: CargoDeclarationVehicleUpdateInput
  ): Promise<CargoDeclarationVehicle | null> {
    try {
      return await this.service.updateCargoDeclarationVehicle({
        where: params,
        data: data,
        select: {
          cagMgmtNo: true,
          chssNo: true,
          createdAt: true,
          delYn: true,
          engnClndGcnt: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          lastChgDttm: true,
          lastChprId: true,
          mrn: true,
          updatedAt: true,
          vhclKndNm: true,
          vhclMdlCd: true,
          vhclMnfcYy: true,
          vhclMnurCd: true,
          vhclRgsrNo: true,
          vhclSrno: true,
          vhclTotlWght: true,
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
  @swagger.ApiOkResponse({ type: CargoDeclarationVehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCargoDeclarationVehicle(
    @common.Param() params: CargoDeclarationVehicleWhereUniqueInput
  ): Promise<CargoDeclarationVehicle | null> {
    try {
      return await this.service.deleteCargoDeclarationVehicle({
        where: params,
        select: {
          cagMgmtNo: true,
          chssNo: true,
          createdAt: true,
          delYn: true,
          engnClndGcnt: true,
          frstRegstId: true,
          frstRgsrDttm: true,
          id: true,
          lastChgDttm: true,
          lastChprId: true,
          mrn: true,
          updatedAt: true,
          vhclKndNm: true,
          vhclMdlCd: true,
          vhclMnfcYy: true,
          vhclMnurCd: true,
          vhclRgsrNo: true,
          vhclSrno: true,
          vhclTotlWght: true,
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
