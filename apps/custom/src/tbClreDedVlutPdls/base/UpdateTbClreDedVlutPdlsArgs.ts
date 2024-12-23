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
import { TbClreDedVlutPdlsWhereUniqueInput } from "./TbClreDedVlutPdlsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TbClreDedVlutPdlsUpdateInput } from "./TbClreDedVlutPdlsUpdateInput";

@ArgsType()
class UpdateTbClreDedVlutPdlsArgs {
  @ApiProperty({
    required: true,
    type: () => TbClreDedVlutPdlsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVlutPdlsWhereUniqueInput)
  @Field(() => TbClreDedVlutPdlsWhereUniqueInput, { nullable: false })
  where!: TbClreDedVlutPdlsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TbClreDedVlutPdlsUpdateInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVlutPdlsUpdateInput)
  @Field(() => TbClreDedVlutPdlsUpdateInput, { nullable: false })
  data!: TbClreDedVlutPdlsUpdateInput;
}

export { UpdateTbClreDedVlutPdlsArgs as UpdateTbClreDedVlutPdlsArgs };
