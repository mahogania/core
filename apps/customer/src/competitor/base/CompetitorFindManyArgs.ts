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
import { CompetitorWhereInput } from "./CompetitorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompetitorOrderByInput } from "./CompetitorOrderByInput";

@ArgsType()
class CompetitorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompetitorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompetitorWhereInput, { nullable: true })
  @Type(() => CompetitorWhereInput)
  where?: CompetitorWhereInput;

  @ApiProperty({
    required: false,
    type: [CompetitorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompetitorOrderByInput], { nullable: true })
  @Type(() => CompetitorOrderByInput)
  orderBy?: Array<CompetitorOrderByInput>;

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

export { CompetitorFindManyArgs as CompetitorFindManyArgs };
