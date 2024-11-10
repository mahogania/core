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
import { JournalEntryWhereInput } from "./JournalEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JournalEntryOrderByInput } from "./JournalEntryOrderByInput";

@ArgsType()
class JournalEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JournalEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  where?: JournalEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [JournalEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JournalEntryOrderByInput], { nullable: true })
  @Type(() => JournalEntryOrderByInput)
  orderBy?: Array<JournalEntryOrderByInput>;

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

export { JournalEntryFindManyArgs as JournalEntryFindManyArgs };