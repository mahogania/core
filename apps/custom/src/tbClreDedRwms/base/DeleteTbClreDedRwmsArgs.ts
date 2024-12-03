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
import { TbClreDedRwmsWhereUniqueInput } from "./TbClreDedRwmsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTbClreDedRwmsArgs {
  @ApiProperty({
    required: true,
    type: () => TbClreDedRwmsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedRwmsWhereUniqueInput)
  @Field(() => TbClreDedRwmsWhereUniqueInput, { nullable: false })
  where!: TbClreDedRwmsWhereUniqueInput;
}

export { DeleteTbClreDedRwmsArgs as DeleteTbClreDedRwmsArgs };
