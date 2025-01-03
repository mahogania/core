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
import { SubcontractingOrderServiceItemWhereInput } from "./SubcontractingOrderServiceItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SubcontractingOrderServiceItemOrderByInput } from "./SubcontractingOrderServiceItemOrderByInput";

@ArgsType()
class SubcontractingOrderServiceItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubcontractingOrderServiceItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SubcontractingOrderServiceItemWhereInput, { nullable: true })
  @Type(() => SubcontractingOrderServiceItemWhereInput)
  where?: SubcontractingOrderServiceItemWhereInput;

  @ApiProperty({
    required: false,
    type: [SubcontractingOrderServiceItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SubcontractingOrderServiceItemOrderByInput], { nullable: true })
  @Type(() => SubcontractingOrderServiceItemOrderByInput)
  orderBy?: Array<SubcontractingOrderServiceItemOrderByInput>;

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

export { SubcontractingOrderServiceItemFindManyArgs as SubcontractingOrderServiceItemFindManyArgs };
