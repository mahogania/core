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
import { TbClreDedPrcDclrWhereInput } from "./TbClreDedPrcDclrWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TbClreDedPrcDclrCountArgs {
  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrWhereInput,
  })
  @Field(() => TbClreDedPrcDclrWhereInput, { nullable: true })
  @Type(() => TbClreDedPrcDclrWhereInput)
  where?: TbClreDedPrcDclrWhereInput;
}

export { TbClreDedPrcDclrCountArgs as TbClreDedPrcDclrCountArgs };