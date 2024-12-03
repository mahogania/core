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
import { ConsoleLogWhereInput } from "./ConsoleLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ConsoleLogOrderByInput } from "./ConsoleLogOrderByInput";

@ArgsType()
class ConsoleLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConsoleLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ConsoleLogWhereInput, { nullable: true })
  @Type(() => ConsoleLogWhereInput)
  where?: ConsoleLogWhereInput;

  @ApiProperty({
    required: false,
    type: [ConsoleLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ConsoleLogOrderByInput], { nullable: true })
  @Type(() => ConsoleLogOrderByInput)
  orderBy?: Array<ConsoleLogOrderByInput>;

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

export { ConsoleLogFindManyArgs as ConsoleLogFindManyArgs };
