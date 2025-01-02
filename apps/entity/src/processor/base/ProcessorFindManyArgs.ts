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
import { ProcessorWhereInput } from "./ProcessorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProcessorOrderByInput } from "./ProcessorOrderByInput";

@ArgsType()
class ProcessorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProcessorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProcessorWhereInput, { nullable: true })
  @Type(() => ProcessorWhereInput)
  where?: ProcessorWhereInput;

  @ApiProperty({
    required: false,
    type: [ProcessorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProcessorOrderByInput], { nullable: true })
  @Type(() => ProcessorOrderByInput)
  orderBy?: Array<ProcessorOrderByInput>;

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

export { ProcessorFindManyArgs as ProcessorFindManyArgs };