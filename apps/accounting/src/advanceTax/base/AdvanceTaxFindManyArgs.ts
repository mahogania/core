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
import { AdvanceTaxWhereInput } from "./AdvanceTaxWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdvanceTaxOrderByInput } from "./AdvanceTaxOrderByInput";

@ArgsType()
class AdvanceTaxFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdvanceTaxWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdvanceTaxWhereInput, { nullable: true })
  @Type(() => AdvanceTaxWhereInput)
  where?: AdvanceTaxWhereInput;

  @ApiProperty({
    required: false,
    type: [AdvanceTaxOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdvanceTaxOrderByInput], { nullable: true })
  @Type(() => AdvanceTaxOrderByInput)
  orderBy?: Array<AdvanceTaxOrderByInput>;

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

export { AdvanceTaxFindManyArgs as AdvanceTaxFindManyArgs };
