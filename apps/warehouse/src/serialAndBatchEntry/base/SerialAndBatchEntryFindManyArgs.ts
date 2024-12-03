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
import { SerialAndBatchEntryWhereInput } from "./SerialAndBatchEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SerialAndBatchEntryOrderByInput } from "./SerialAndBatchEntryOrderByInput";

@ArgsType()
class SerialAndBatchEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SerialAndBatchEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SerialAndBatchEntryWhereInput, { nullable: true })
  @Type(() => SerialAndBatchEntryWhereInput)
  where?: SerialAndBatchEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [SerialAndBatchEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SerialAndBatchEntryOrderByInput], { nullable: true })
  @Type(() => SerialAndBatchEntryOrderByInput)
  orderBy?: Array<SerialAndBatchEntryOrderByInput>;

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

export { SerialAndBatchEntryFindManyArgs as SerialAndBatchEntryFindManyArgs };
