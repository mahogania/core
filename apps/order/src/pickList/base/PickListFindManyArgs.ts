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
import { PickListWhereInput } from "./PickListWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PickListOrderByInput } from "./PickListOrderByInput";

@ArgsType()
class PickListFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PickListWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PickListWhereInput, { nullable: true })
  @Type(() => PickListWhereInput)
  where?: PickListWhereInput;

  @ApiProperty({
    required: false,
    type: [PickListOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PickListOrderByInput], { nullable: true })
  @Type(() => PickListOrderByInput)
  orderBy?: Array<PickListOrderByInput>;

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

export { PickListFindManyArgs as PickListFindManyArgs };
