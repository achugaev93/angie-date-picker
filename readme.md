
# Advantages

- Simple and flexible AngularJS directive that support selecting, formatting and parsing both date and time.
- Date/time can be localized (thanks to MomentJS).
- It supports limits (min and max date/time) and ranges.
- It is pretty simple to use and accessible.
- You can disable functionality (i.e. if you need only time picker - you are welcome).
- You can customize increment steps of years, months, dates, hours, minutes.
- And it support different date/time formatting for model value and for view value.

# Here is it

![Angular date picker](https://raw.githubusercontent.com/achugaev93/angie-date-picker/master/example/screen.png)

# Installation

`angie-date-picker` depends on AngularJS and MomentJS libraries, so install them too. jQuery is not required.

```bash
bower install --save angular moment
```

Install using Bower (recommended):

```bash
bower install --save angie-date-picker
```

Install using NPM:

```bash
npm install --save angie-date-picker
```

# Usage

First of all add styles and scripts to a page:

```html
<link href="bower_components/angie-date-picker/angie-date-picker.min.css" rel="stylesheet">

<script src="bower_components/moment/min/moment-with-locales.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angie-date-picker/angie-date-picker.min.js"></script>
```

Step two: add module `angie.datePicker` into your Angular app dependencies:

```js
angular.module('example', [
    'angie.datePicker'          // Use date picker module
]);
```

Step three: configure default settings according to your needs:

```js
angular.module('example', [
    'angie.datePicker'
]).run(['datePickerOptions', function (datePickerOptions) {

    // Configure date picker default settings

    datePickerOptions.spacing = 2;
    datePickerOptions.viewDateFormat = 'DD MMMM YYYY, HH:mm';
    datePickerOptions.modelDateFormat = 'YYYY-MM-DD HH:mm';
}]);
```

Step four: define date pickers settings and model values in your controller:

```js
angular.module('example').controller('MainCtrl', ['$scope', function ($scope) {

    $scope.birthday = '19-02-1993';

    $scope.datePickerOptions = {
        birthday: {
            time: false,
            viewDateFormat: 'DD MMMM YYYY',
            modelDateFormat: 'DD-MM-YYYY'
        },
        meeting: {
            min: moment().startOf('day')
        }
    };

    $scope.$watch('birthday', function (date) {
        // Will print date in model format
        console.log(date);
    });
}]);
```

Step five: use directive in your markup:

```html
<body ng-controller="MainCtrl">

<form name="BirthdayForm">
    <label for="birthday-input">Birthday:</label>
    <div>
    <!-- Popup -->
    <input name="birthday"
           id="birthday-input"
           ng-model="birthday"
           date-picker="datePickerOptions.birthday">
    </div>
</form>

<form name="MeetingForm">
    <label>Next meeting at: {{ meeting }}</label>
    <!-- Inline date picker -->
    <date-picker ng-model="meeting" options="datePickerOptions.meeting"></date-picker>
</form>

</body>
```

# Contribute

Please, send pull requests if you want to contribute and make date picker more featureful.

# License

MIT