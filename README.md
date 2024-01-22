# Business Day DatePicker Component

This component is a specialized DatePicker for React applications that allows users to select a range of dates within business days only. The component ensures weekends are not highlighted as part of the range and provides additional functionality to navigate through months and years.

## Features

- **Date Range Selection**: Users can select a start date and an end date to define a range.
- **Business Days Highlighting**: Only business days (Monday to Friday) within the selected range will be highlighted.
- **Year Navigation**: Users have the ability to change the year displayed in the date picker.
- **Month Navigation**: Users can change the month displayed in the date picker.
- **Value Change Handler**: When the date range is changed, the component returns the selected date range and an array of weekend dates within the selected range.

## Usage

To use the Business Day DatePicker component in your project, follow these steps:

1. Install the `react-suite` UI library if you haven't already:

```sh
npm install rsuite --save
```

2. Import the `DatePicker` component from the `react-suite` library and the `BusinessDayDatePicker` component from where it is defined in your project.

```tsx
import { DatePicker } from 'rsuite';
import BusinessDayDatePicker from './path-to-your-component/BusinessDayDatePicker';
```

3. Include the `BusinessDayDatePicker` component in your React component or page:

```tsx
function App() {
  // A handler function to receive the selected date range and weekends
  const handleDateRangeChange = (
    dateRange: [string, string],
    weekends: Array<string>
  ) => {
    console.log('Selected Date Range:', dateRange);
    console.log('Weekend Dates:', weekends);
  };

  return (
    <div className="app">
      <BusinessDayDatePicker onChange={handleDateRangeChange} />
    </div>
  );
}
```

## Props

| Name       | Type       | Description                                                |
|------------|------------|------------------------------------------------------------|
| `onChange` | Function   | Callback function that receives the date range and weekends |

## Example

When a user selects a date range, the `onChange` callback provides the output. For example, if the user selects the range from December 1st, 2022 to December 15th, 2022, the output will be:

```js
[
  ["2022-12-01", "2022-12-15"], // Date Range
  ["2022-12-03", "2022-12-04", "2022-12-10", "2022-12-11"] // Weekend Dates
]
```

## Development Notes

- This component utilizes the `DatePicker.RangePicker` from `rsuite` but restricts selection and styling based on the business days requirement.
- Custom styling logic has been implemented to prevent weekends from being highlighted.
- Additional props can be passed to further customize the behavior and appearance of the `DatePicker`.

Should you have any questions or encounter issues with implementation, please file an issue in the repository where this component is maintained.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
