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
import { CommandUpdateManyWithoutTraitsInput } from "./CommandUpdateManyWithoutTraitsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FragmentUpdateManyWithoutTraitsInput } from "./FragmentUpdateManyWithoutTraitsInput";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";

@InputType()
class TraitUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommandUpdateManyWithoutTraitsInput,
  })
  @ValidateNested()
  @Type(() => CommandUpdateManyWithoutTraitsInput)
  @IsOptional()
  @Field(() => CommandUpdateManyWithoutTraitsInput, {
    nullable: true,
  })
  commands?: CommandUpdateManyWithoutTraitsInput;

  @ApiProperty({
    required: false,
    type: () => FragmentUpdateManyWithoutTraitsInput,
  })
  @ValidateNested()
  @Type(() => FragmentUpdateManyWithoutTraitsInput)
  @IsOptional()
  @Field(() => FragmentUpdateManyWithoutTraitsInput, {
    nullable: true,
  })
  fragments?: FragmentUpdateManyWithoutTraitsInput;

  @ApiProperty({
    required: false,
    type: () => TemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => TemplateWhereUniqueInput, {
    nullable: true,
  })
  template?: TemplateWhereUniqueInput | null;
}

export { TraitUpdateInput as TraitUpdateInput };
