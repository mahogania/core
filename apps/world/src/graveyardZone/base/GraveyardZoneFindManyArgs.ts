/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GraveyardZoneWhereInput } from "./GraveyardZoneWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GraveyardZoneOrderByInput } from "./GraveyardZoneOrderByInput";

@ArgsType()
class GraveyardZoneFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GraveyardZoneWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GraveyardZoneWhereInput, { nullable: true })
  @Type(() => GraveyardZoneWhereInput)
  where?: GraveyardZoneWhereInput;

  @ApiProperty({
    required: false,
    type: [GraveyardZoneOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GraveyardZoneOrderByInput], { nullable: true })
  @Type(() => GraveyardZoneOrderByInput)
  orderBy?: Array<GraveyardZoneOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GraveyardZoneFindManyArgs as GraveyardZoneFindManyArgs };
