# reactstrap-formik-extended
Brings new features to reactstrap-formik

## New Features
- inputOnly mode => returns only input element
- Input prepend icon and onClick prepend icon callback method features
- Input append icon and onClick append icon callback method features
- Disable built-in error messages feature
- Reactstrap version updated to 8.6.0
- Bootstrap version updated to 4.5.2

## Getting Started

    npm install reactstrap-formik

## Usage Examples
* Text Input [Example](https://codesandbox.io/s/xl6mx6w8z4)
* Select Input [Example](https://codesandbox.io/s/6l3oo28kq3)
* Radio Input [Example](https://codesandbox.io/s/0vm7yo754w)

## Development

    npm install
    npm run storybook


## ReactstrapFormikInput API
| name                              | type                                                  | default   | description                                                                       |
|-----------------------------------|-------------------------------------------------------|-----------|-----------------------------------------------------------------------------------|
| inputOnly                         | boolean                                               | false     | if you only want to input, not input group and other elements you can set as true |
| inputGroupAppendAddonIcon         | React.ReactNode\|undefined                            | undefined | input right side icon JSX element                                                 |
| onClickInputGroupAppendAddonIcon  | (e: React.MouseEvent<HTMLElement>) => void\|undefined | undefined | onClick callback function of right side icon                                      |
| inputGroupPrependAddonIcon        | React.ReactNode\|undefined                            | undefined | input left side icon JSX element                                                  |
| onClickInputGroupPrependAddonIcon | (e: React.MouseEvent<HTMLElement>) => void\|undefined | undefined | onClick callback function of left side icon                                       |
| inputGroupClassName               | string\|undefined                                     | undefined | custom class for input group div                                                  |
| isErrorMessagesDisabled           | boolean                                               | false     | disable built-in error messages if you set as true                                |

