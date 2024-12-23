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
import { BomItemWhereInput } from "./BomItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BomItemOrderByInput } from "./BomItemOrderByInput";

@ArgsType()
class BomItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BomItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BomItemWhereInput, { nullable: true })
  @Type(() => BomItemWhereInput)
  where?: BomItemWhereInput;

  @ApiProperty({
    required: false,
    type: [BomItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BomItemOrderByInput], { nullable: true })
  @Type(() => BomItemOrderByInput)
  orderBy?: Array<BomItemOrderByInput>;

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

export { BomItemFindManyArgs as BomItemFindManyArgs };
