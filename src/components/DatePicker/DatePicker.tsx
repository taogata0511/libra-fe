import { ja } from "date-fns/locale";
import ReactDatePicker, { registerLocale } from "react-datepicker";

interface Props {
  date: Date | null;
  format?: string;
  placeholder?: string;
  onChange: (date: Date | null) => void;
}

export const DatePicker = ({
  date = new Date(),
  format = "yyyy/MM/dd",
  placeholder = "日付を選択",
  onChange,
}: Props) => {
  registerLocale("ja", ja);

  return (
    <ReactDatePicker
      locale="ja"
      selected={date}
      onChange={onChange}
      dateFormat={format}
      placeholderText={placeholder}
    />
  );
};
