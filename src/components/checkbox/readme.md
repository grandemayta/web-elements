# we-checkbox

```html
<we-checkbox-group name="fruits" change-callback=checkboxHandler>
  <we-checkbox value="banana">Banana</we-checkbox>
  <we-checkbox value="apple">Apple</we-checkbox>
  <we-checkbox value="pear">Pear</we-checkbox>
</we-checkbox-group>
```
<br>
<!-- Auto Generated Below -->


## Properties

| Property             | Attribute  | Description                                                            | Type      | Default     |
| -------------------- | ---------- | ---------------------------------------------------------------------- | --------- | ----------- |
| `checked`            | `checked`  | identify if this checkbox is checked or not when the page is loaded    | `boolean` | `undefined` |
| `disabled`           | `disabled` | Identify if this checkbox is disabled or not                           | `boolean` | `undefined` |
| `value` _(required)_ | `value`    | Value returned when the input is submitted if this checkbox is checked | `string`  | `undefined` |


## Events

| Event              | Description                                                                                    | Type                         |
| ------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| `checkboxCallback` | Event triggered when this checkbox is checked/not checked returning the value prop for payload | `CustomEvent<CheckboxValue>` |


## CSS Custom Properties

| Name                                  | Description                                              |
| ------------------------------------- | -------------------------------------------------------- |
| `--checked-background-color`          | Checked background color <br> Default: #3F51B5           |
| `--checked-border-color`              | Checked border color <br> Default: #3F51B5               |
| `--checked-color`                     | Checked color <br> Default: #fff                         |
| `--checked-disabled-background-color` | Checked and disabled background color <br> Default: #aaa |
| `--checked-disabled-border-color`     | Checked and disabled border color <br> Default: #aaa     |
| `--disabled-border-color`             | Checked disabled color <br> Default: #aaa                |
| `--icon-border`                       | Icon border <br> Default: 1px solid #212121              |
| `--icon-border-radius`                | Icon border radius <br> Default: 0.2em                   |
| `--icon-content`                      | Icon content <br> Default: "\2714"                       |
| `--icon-heigth`                       | Icon heigth <br> Default: 1em                            |
| `--icon-margin`                       | Icon margin <br> Default: 0 0.3em 0 0                    |
| `--icon-padding`                      | Icon padding <br> Default: 0 0 0.3em 0.2em               |
| `--icon-width`                        | Icon width <br> Default: 1em                             |
| `--label-margin`                      | Margin label <br> Default: 0.2em                         |
| `--label-padding`                     | Padding label <br> Default: 0.2em                        |


----------------------------------------------


