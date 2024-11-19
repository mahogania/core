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
import { SerialNoWhereUniqueInput } from "./SerialNoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SerialNoUpdateInput } from "./SerialNoUpdateInput";

@ArgsType()
class UpdateSerialNoArgs {
  @ApiProperty({
    required: true,
    type: () => SerialNoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SerialNoWhereUniqueInput)
  @Field(() => SerialNoWhereUniqueInput, { nullable: false })
  where!: SerialNoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SerialNoUpdateInput,
  })
  @ValidateNested()
  @Type(() => SerialNoUpdateInput)
  @Field(() => SerialNoUpdateInput, { nullable: false })
  data!: SerialNoUpdateInput;
}

export { UpdateSerialNoArgs as UpdateSerialNoArgs };
