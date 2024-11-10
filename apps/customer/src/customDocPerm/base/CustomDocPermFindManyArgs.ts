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
import { CustomDocPermWhereInput } from "./CustomDocPermWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomDocPermOrderByInput } from "./CustomDocPermOrderByInput";

@ArgsType()
class CustomDocPermFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomDocPermWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomDocPermWhereInput, { nullable: true })
  @Type(() => CustomDocPermWhereInput)
  where?: CustomDocPermWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomDocPermOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomDocPermOrderByInput], { nullable: true })
  @Type(() => CustomDocPermOrderByInput)
  orderBy?: Array<CustomDocPermOrderByInput>;

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

export { CustomDocPermFindManyArgs as CustomDocPermFindManyArgs };
