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
import { SubcontractingReceiptItemWhereInput } from "./SubcontractingReceiptItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SubcontractingReceiptItemOrderByInput } from "./SubcontractingReceiptItemOrderByInput";

@ArgsType()
class SubcontractingReceiptItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubcontractingReceiptItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SubcontractingReceiptItemWhereInput, { nullable: true })
  @Type(() => SubcontractingReceiptItemWhereInput)
  where?: SubcontractingReceiptItemWhereInput;

  @ApiProperty({
    required: false,
    type: [SubcontractingReceiptItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SubcontractingReceiptItemOrderByInput], { nullable: true })
  @Type(() => SubcontractingReceiptItemOrderByInput)
  orderBy?: Array<SubcontractingReceiptItemOrderByInput>;

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

export { SubcontractingReceiptItemFindManyArgs as SubcontractingReceiptItemFindManyArgs };
