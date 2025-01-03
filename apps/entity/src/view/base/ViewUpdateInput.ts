/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FragmentWhereUniqueInput } from "../../fragment/base/FragmentWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProcessorWhereUniqueInput } from "../../processor/base/ProcessorWhereUniqueInput";

@InputType()
class ViewUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FragmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FragmentWhereUniqueInput)
  @IsOptional()
  @Field(() => FragmentWhereUniqueInput, {
    nullable: true,
  })
  fragment?: FragmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProcessorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProcessorWhereUniqueInput)
  @IsOptional()
  @Field(() => ProcessorWhereUniqueInput, {
    nullable: true,
  })
  processor?: ProcessorWhereUniqueInput | null;
}

export { ViewUpdateInput as ViewUpdateInput };
