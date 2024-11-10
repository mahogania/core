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
import { DunningWhereInput } from "./DunningWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DunningOrderByInput } from "./DunningOrderByInput";

@ArgsType()
class DunningFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DunningWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DunningWhereInput, { nullable: true })
  @Type(() => DunningWhereInput)
  where?: DunningWhereInput;

  @ApiProperty({
    required: false,
    type: [DunningOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DunningOrderByInput], { nullable: true })
  @Type(() => DunningOrderByInput)
  orderBy?: Array<DunningOrderByInput>;

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

export { DunningFindManyArgs as DunningFindManyArgs };