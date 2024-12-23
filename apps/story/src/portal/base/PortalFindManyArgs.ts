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
import { PortalWhereInput } from "./PortalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PortalOrderByInput } from "./PortalOrderByInput";

@ArgsType()
class PortalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PortalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PortalWhereInput, { nullable: true })
  @Type(() => PortalWhereInput)
  where?: PortalWhereInput;

  @ApiProperty({
    required: false,
    type: [PortalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PortalOrderByInput], { nullable: true })
  @Type(() => PortalOrderByInput)
  orderBy?: Array<PortalOrderByInput>;

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

export { PortalFindManyArgs as PortalFindManyArgs };
