import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import { DatePicker } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  argTypes: {
    date: { control: "date" },
    format: { control: "text" },
    placeholder: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    args.date ? new Date(args.date) : null,
  );

  return (
    <DatePicker
      {...args}
      date={selectedDate}
      onChange={(date) => {
        setSelectedDate(date);
        args.onChange(date);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  format: "yyyy/MM/dd",
  placeholder: "日付を選択",
};

export const WithoutInitialDate = Template.bind({});
WithoutInitialDate.args = {
  date: null,
  format: "yyyy/MM/dd",
  placeholder: "日付を選択してください",
};

export const CustomFormat = Template.bind({});
CustomFormat.args = {
  date: new Date(),
  format: "dd-MM-yyyy",
  placeholder: "日付を選択してください",
};
