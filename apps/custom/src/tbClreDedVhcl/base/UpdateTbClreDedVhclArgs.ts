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
import { TbClreDedVhclWhereUniqueInput } from "./TbClreDedVhclWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TbClreDedVhclUpdateInput } from "./TbClreDedVhclUpdateInput";

@ArgsType()
class UpdateTbClreDedVhclArgs {
  @ApiProperty({
    required: true,
    type: () => TbClreDedVhclWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVhclWhereUniqueInput)
  @Field(() => TbClreDedVhclWhereUniqueInput, { nullable: false })
  where!: TbClreDedVhclWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TbClreDedVhclUpdateInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVhclUpdateInput)
  @Field(() => TbClreDedVhclUpdateInput, { nullable: false })
  data!: TbClreDedVhclUpdateInput;
}

export { UpdateTbClreDedVhclArgs as UpdateTbClreDedVhclArgs };
