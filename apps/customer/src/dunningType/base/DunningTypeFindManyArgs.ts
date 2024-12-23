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
import { DunningTypeWhereInput } from "./DunningTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DunningTypeOrderByInput } from "./DunningTypeOrderByInput";

@ArgsType()
class DunningTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DunningTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DunningTypeWhereInput, { nullable: true })
  @Type(() => DunningTypeWhereInput)
  where?: DunningTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [DunningTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DunningTypeOrderByInput], { nullable: true })
  @Type(() => DunningTypeOrderByInput)
  orderBy?: Array<DunningTypeOrderByInput>;

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

export { DunningTypeFindManyArgs as DunningTypeFindManyArgs };
