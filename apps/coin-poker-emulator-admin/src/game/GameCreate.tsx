import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ActionTitle } from "../action/ActionTitle";

export const GameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="StartTime" source="startTime" />
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="GameType" source="gameType" />
        <ReferenceArrayInput
          source="actions"
          reference="Action"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
