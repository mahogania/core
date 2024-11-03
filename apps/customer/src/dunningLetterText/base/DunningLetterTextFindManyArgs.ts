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
import { DunningLetterTextWhereInput } from "./DunningLetterTextWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DunningLetterTextOrderByInput } from "./DunningLetterTextOrderByInput";

@ArgsType()
class DunningLetterTextFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DunningLetterTextWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DunningLetterTextWhereInput, { nullable: true })
  @Type(() => DunningLetterTextWhereInput)
  where?: DunningLetterTextWhereInput;

  @ApiProperty({
    required: false,
    type: [DunningLetterTextOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DunningLetterTextOrderByInput], { nullable: true })
  @Type(() => DunningLetterTextOrderByInput)
  orderBy?: Array<DunningLetterTextOrderByInput>;

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

export { DunningLetterTextFindManyArgs as DunningLetterTextFindManyArgs };
