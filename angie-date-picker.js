
angular.module('angie.datePicker', [

]).value('datePickerOptions', {
    modelDateFormat: 'DD-MM-YYYY',
    viewDateFormat: 'DD MMMM YYYY',
    header: true,
    calendar: true,
    time: true,
    controls: true,
    className: null,
    unitsMap: {
        years: 'years',
        months: 'months',
        weeks: 'weeks',
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
        am: 'hours'
    },
    steps: {
        years: 1,
        months: 1,
        weeks: 1,
        days: 1,
        am: 12,
        hours: 1,
        minutes: 1,
        seconds: 1
    },
    autoIncrement: {
        years: 1,
        months: 1,
        weeks: 1,
        days: 1,
        am: 12,
        hours: 1,
        minutes: 10,
        seconds: 10
    },
    autoIncrementInterval: 250,
    position: 'bl',
    spacing: 1,
    template: '\
    <div class="ngldp" ng-class="{\'ngldp--inline\': isInline}">\
        <div class="ngldp__head" ng-show="showHeader">\
            <div class="ngldp__prev-month">\
                <button type="button"\
                        class="ngldp__btn ngldp__btn--prev"\
                        ng-keydown="isActivateKey($event) && prev(\'months\')" \
                        ng-click="prev(\'months\')">prev</button>\
            </div>\
            <div class="ngldp__current-month">{{ currentDate.format(\'MMMM\') }}</div>\
            <div class="ngldp__next-month">\
                <button type="button"\
                        class="ngldp__btn ngldp__btn--next"\
                        ng-keydown="isActivateKey($event) && next(\'months\')" \
                        ng-click="next(\'months\')">next</button>\
            </div>\
            <div class="ngldp__prev-year">\
                <button type="button"\
                        class="ngldp__btn ngldp__btn--prev"\
                        ng-keydown="isActivateKey($event) && prev(\'years\')" \
                        ng-click="prev(\'years\')">prev</button>\
            </div>\
            <div class="ngldp__current-year">{{ currentDate.format(\'YYYY\') }}</div>\
            <div class="ngldp__next-year">\
                <button type="button"\
                        class="ngldp__btn ngldp__btn--next"\
                        ng-keydown="isActivateKey($event) && next(\'years\')" \
                        ng-click="next(\'years\')">next</button>\
            </div>\
        </div>\
        <div class="ngldp__calendar-wrapper" ng-show="showCalendar">\
            <div class="ngldp__body">\
                <table class="ngldp__calendar">\
                    <thead class="ngldp__dows">\
                        <tr>\
                            <th class="ngldp__dow"\
                                ng-repeat="day in daysNames"\
                                ng-class="{\'ngldp__day--weekend\': day.weekend}">{{ day.name }}</th>\
                        </tr>\
                    </thead>\
                    <tbody>\
                        <tr class="ngldp__week" ng-repeat="week in weeks">\
                            <td class="ngldp__day" \
                                tabindex="{{ day.inactive ? \'\' : 0 }}"\
                                ng-repeat="day in week"\
                                ng-click="selectDay(day)"\
                                ng-keydown="isActivateKey($event) && selectDay(day)"\
                                ng-class="{\'ngldp__day--inactive\': day.inactive, \'ngldp__day--today\': day.today, \'ngldp__day--selected\': currentDate.date() == day.number && !day.inactive, \'ngldp__day--weekend\': day.weekend}">\
                                {{ day.number }}\
                            </td>\
                        </tr>\
                    </tbody>\
                </table>\
            </div>\
        </div>\
        <div class="ngldp__time-wrapper" ng-show="showTime">\
            <div class="ngldp__body">\
                <table class="ngldp__time">\
                    <tr>\
                        <td><button type="button" \
                                    class="ngldp__btn ngldp__up-btn" \
                                    ng-mousedown="add(steps.hours, \'hours\'); startAutoIncrement(\'hours\')" \
                                    ng-keydown="isActivateKey($event) && add(steps.hours, \'hours\')" \
                                    ng-click="endAutoIncrement()" \
                                    ng-mouseleave="endAutoIncrement()">add hour</button>\
                        </td>\
                        <td> </td>\
                        <td><button type="button"\
                                    class="ngldp__btn ngldp__up-btn"\
                                    ng-mousedown="add(steps.minutes, \'minutes\'); startAutoIncrement(\'minutes\')"\
                                    ng-keydown="isActivateKey($event) && add(steps.minutes, \'minutes\')" \
                                    ng-click="endAutoIncrement()"\
                                    ng-mouseleave="endAutoIncrement()">add minute</button>\
                        </td>\
                        <td><button type="button"\
                                    class="ngldp__btn ngldp__up-btn"\
                                    ng-mousedown="add(steps.am, \'hours\'); startAutoIncrement(\'am\')"\
                                    ng-keydown="isActivateKey($event) && add(steps.am, \'hours\')" \
                                    ng-click="endAutoIncrement()"\
                                    ng-mouseleave="endAutoIncrement()">add half a day</button>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td><div class="ngldp__time-box">{{ currentDate.format(\'hh\') }}</div></td>\
                        <td> : </td>\
                        <td><div class="ngldp__time-box">{{ currentDate.format(\'mm\') }}</div></td>\
                        <td>{{ currentDate.format(\'A\') }}</td>\
                    </tr>\
                    <tr>\
                        <td><button type="button" \
                                    class="ngldp__btn ngldp__down-btn"\
                                    ng-mousedown="subtract(steps.hours, \'hours\'); startAutoDecrement(\'hours\')"\
                                    ng-keydown="isActivateKey($event) && subtract(steps.hours, \'hours\')" \
                                    ng-click="endAutoIncrement()"\
                                    ng-mouseleave="endAutoIncrement()">subtract hour</button>\
                        </td>\
                        <td> </td>\
                        <td><button type="button"\
                                    class="ngldp__btn ngldp__down-btn"\
                                    ng-mousedown="subtract(steps.minutes, \'minutes\'); startAutoDecrement(\'minutes\')"\
                                    ng-keydown="isActivateKey($event) && subtract(steps.minutes, \'minutes\')" \
                                    ng-click="endAutoIncrement()"\
                                    ng-mouseleave="endAutoIncrement()">subtract minute</button>\
                         </td>\
                        <td><button type="button"\
                                    class="ngldp__btn ngldp__down-btn"\
                                    ng-mousedown="subtract(steps.am, \'hours\'); startAutoDecrement(\'am\')"\
                                    ng-keydown="isActivateKey($event) && subtract(steps.am, \'hours\')" \
                                    ng-click="endAutoIncrement()"\
                                    ng-mouseleave="endAutoIncrement()">subtract half a day</button>\
                        </td>\
                    </tr>\
                </table>\
            </div>\
        </div>\
        <div class="ngldp__controls" ng-show="showControls && (showCalendar || !isInline)">\
            <button type="button"\
                    class="ngldp__btn ngldp__btn--today"\
                    ng-show="showCalendar"\
                    ng-click="selectToday()">Today</button>\
            <button type="button"\
                    class="ngldp__btn ngldp__btn--ok"\
                    ng-hide="isInline"\
                    ng-click="close()">Ok</button>\
        </div>\
    </div>\
    '
}).directive('datePicker', ['$compile', '$interval', 'datePickerOptions', function ($compile, $interval, datePickerOptions) {

    var $body = angular.element(document.body);

    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            model: '=ngModel',
            datePicker: '=',
            options: '='
        },
        link: function ($scope, $element, attributes, ngModel) {
            var $backdrop;
            var $popup;
            var options = $scope.datePicker || $scope.options || {};
            var isInline = $element.prop('tagName') === 'DATE-PICKER';
            var timerIds = [];

            options.modelDateFormat = options.modelDateFormat || datePickerOptions.modelDateFormat;
            options.viewDateFormat = options.viewDateFormat || datePickerOptions.viewDateFormat;
            options.spacing = options.spacing || datePickerOptions.spacing || 0;
            options.steps = options.steps || datePickerOptions.steps;
            options.autoIncrement = options.autoIncrement || datePickerOptions.autoIncrement;
            options.autoIncrementInterval = options.autoIncrementInterval || datePickerOptions.autoIncrementInterval;
            options.className = options.className || datePickerOptions.className;

            Object.keys(datePickerOptions.autoIncrement).forEach(function (key) {
                options.autoIncrement[key] = options.autoIncrement[key] || datePickerOptions.autoIncrement[key];
            });

            Object.keys(datePickerOptions.steps).forEach(function (key) {
                options.steps[key] = options.steps[key] || datePickerOptions.steps[key];
            });

            $scope.isInline = isInline;
            $scope.steps = options.steps;
            $scope.position = options.position || datePickerOptions.position;
            $scope.min = parseDate(options.min);
            $scope.max = parseDate(options.max);

            $scope.currentDate = parseDate($scope.model, moment());
            $scope.daysNames = [];
            $scope.weeks = [];
            $scope.showCalendar = typeof options.calendar === 'boolean' ? options.calendar : datePickerOptions.calendar;
            $scope.showTime = typeof options.time === 'boolean' ? options.time : datePickerOptions.time;
            $scope.showHeader = typeof options.header === 'boolean' ? options.header : datePickerOptions.header;
            $scope.showControls = typeof options.controls === 'boolean' ? options.controls : datePickerOptions.controls;


            $scope.getDaysNames = function () {
                $scope.daysNames = [];

                var d = moment('4/1/1970', 'D/M/YYYY');

                for (var i = 0; i < 7; i++) {
                    $scope.daysNames.push({
                        name: d.format('dd'),
                        weekend: i == 0 || i == 6
                    });
                    d.add(1, 'days');
                }
            };


            $scope.getMonthDays = function () {
                var dateStart = moment($scope.currentDate).startOf('month');
                var dateEnd = moment($scope.currentDate).endOf('month');

                var startWeekDay = dateStart.day();
                var endWeekDay = dateEnd.day();
                var totalDaysInMonth = $scope.currentDate.daysInMonth();

                var days = [];
                var i;

                for (i = 0; i < totalDaysInMonth; i++) {
                    days.push({
                        number: i + 1,
                        inactive: (
                            dateStart.clone().date(i + 1).isBefore($scope.min) ||
                            dateStart.clone().date(i + 1).isAfter($scope.max)
                        ),
                        weekend: isWeekend($scope.currentDate, i + 1),
                        today: isToday($scope.currentDate, i + 1)
                    });
                }

                var prevMonthEnd = dateStart.subtract(1, 'days').date();

                for (i = 0; i < startWeekDay; i++) {
                    days.unshift({
                        number: prevMonthEnd,
                        inactive: true,
                        weekend: isWeekend(dateStart, prevMonthEnd)
                    });

                    dateStart.subtract(1, 'days');

                    prevMonthEnd--;
                }

                for (i = endWeekDay; i < 6; i++) {
                    dateEnd.add(1, 'days');

                    days.push({
                        number: dateEnd.date(),
                        inactive: true,
                        weekend: isWeekend(dateEnd, dateEnd.date())
                    });
                }


                $scope.weeks.length = 0;

                for (i = 0; i < days.length / 7; i++) {
                    $scope.weeks.push(days.slice(i * 7, (i + 1) * 7));
                }
            };


            $scope.open = function () {
                var offset;

                $scope.getDaysNames();
                $scope.getMonthDays();

                $backdrop = angular.element('<div class="ngldp__backdrop"></div>');
                $popup = $compile(datePickerOptions.template)($scope);

                if (options.className) {
                    $popup.addClass(options.className);
                }

                if (!isInline) {
                    $scope.$apply();

                    $backdrop.on('click', function () {
                        $scope.close();
                    });

                    offset = getOffset();
                    
                    $popup.css('left', offset.x);
                    $popup.css('top', offset.y);
                }

                // Render

                if (!isInline) {
                    $body.append($backdrop);
                    $body.append($popup);
                } else {
                    $element.empty();
                    $element.append($popup);
                }

                // Correct position

                if (!isInline) {
                    offset = getOffset();
                    $popup.css('left', offset.x);
                    $popup.css('top', offset.y);
                }

                // Call "open" callback

                if (typeof options.onOpen == 'function') {
                    options.onOpen();
                }
            };


            $scope.close = function () {
                if (isInline || !$popup) {
                    return;
                }

                if ($popup) {
                    $popup.remove();
                    $popup = null;
                }

                if ($backdrop) {
                    $backdrop.remove();
                    $backdrop = null;
                }

                if (typeof options.onClose == 'function') {
                    options.onClose();
                }
            };


            $scope.prev = function (units) {
                $scope.currentDate.subtract(options.steps[units], datePickerOptions.unitsMap[units]);

                fitIntoRange();
                $scope.getMonthDays();
                updateView();
            };


            $scope.next = function (units) {
                $scope.currentDate.add(options.steps[units], datePickerOptions.unitsMap[units]);

                fitIntoRange();
                $scope.getMonthDays();
                updateView();
            };


            $scope.selectDay = function (day) {
                if (day.inactive) {
                    return;
                }

                $scope.currentDate.date(day.number);

                fitIntoRange();
                updateView();
            };


            $scope.selectToday = function () {
                $scope.currentDate = moment();

                fitIntoRange();
                $scope.getMonthDays();
                updateView();
            };


            $scope.add = function (amount, units) {
                $scope.currentDate.add(amount, units);

                fitIntoRange();
                $scope.getMonthDays();
                updateView();
            };


            $scope.subtract = function (amount, units) {
                $scope.currentDate.subtract(amount, units);

                fitIntoRange();
                $scope.getMonthDays();
                updateView();
            };


            $scope.startAutoIncrement = function (units) {
                $scope.endAutoIncrement();

                timerIds.push($interval(function () {
                    $scope.add(options.autoIncrement[units], datePickerOptions.unitsMap[units]);
                }, options.autoIncrementInterval));
            };


            $scope.startAutoDecrement = function (units) {
                $scope.endAutoIncrement();

                timerIds.push($interval(function () {
                    $scope.subtract(options.autoIncrement[units], datePickerOptions.unitsMap[units]);
                }, options.autoIncrementInterval));
            };


            $scope.endAutoIncrement = function () {
                timerIds.forEach(function (timerId) {
                    $interval.cancel(timerId);
                });

                timerIds.length = 0;
            };


            $scope.isActivateKey = function (e) {
                // Space and Return are activate keys

                var isActivate = e.which === 32 || e.which === 13;

                if (isActivate) {
                    e.preventDefault();
                }

                return isActivate;
            };


            if (!isInline) {
                $element.prop('readOnly', true);

                $element.on('click', function () {
                    $scope.open();
                });
            }

            $scope.getDaysNames();

            fitIntoRange();
            updateView();

            if (isInline) {
                $scope.open();
            }


            function updateView() {
                if (!$scope.currentDate) {
                    return;
                }

                ngModel.$setViewValue($scope.currentDate.format(options.modelDateFormat));
                ngModel.$render();
                $element.prop('value', $scope.currentDate.format(options.viewDateFormat));
            }


            function getOffset() {
                var offset = {};

                var elemRect = $element[0].getBoundingClientRect();
                var popupRect = $popup[0].getBoundingClientRect();

                var elemLeft = elemRect.left + window.scrollX;
                var elemTop = elemRect.top + window.scrollY;
                var elemWidth = elemRect.width;
                var elemHeight = elemRect.height;
                var popupWidth = popupRect.width;
                var popupHeight = popupRect.height;

                switch ($scope.position) {
                    case 'cm':
                    case 'mc':
                        offset.x = elemLeft + (elemWidth / 2 - popupWidth / 2);
                        offset.y = elemTop + (elemHeight / 2 - popupHeight / 2);
                        break;
                    case 'lm':
                        offset.x = elemLeft - popupWidth - options.spacing;
                        offset.y = elemTop + (elemHeight / 2 - popupHeight / 2);
                        break;
                    case 'lt':
                        offset.x = elemLeft - popupWidth - options.spacing;
                        offset.y = elemTop;
                        break;
                    case 'lb':
                        offset.x = elemLeft - popupWidth - options.spacing;
                        offset.y = elemTop + elemHeight - popupHeight;
                        break;
                    case 'rm':
                        offset.x = elemLeft + elemWidth + options.spacing;
                        offset.y = elemTop + (elemHeight / 2 - popupHeight / 2);
                        break;
                    case 'rt':
                        offset.x = elemLeft + elemWidth + options.spacing;
                        offset.y = elemTop;
                        break;
                    case 'rb':
                        offset.x = elemLeft + elemWidth + options.spacing;
                        offset.y = elemTop + elemHeight - popupHeight;
                        break;
                    case 'bl':
                        offset.x = elemLeft;
                        offset.y = elemTop + elemHeight + options.spacing;
                        break;
                    case 'bc':
                        offset.x = elemLeft + (elemWidth / 2 - popupWidth / 2);
                        offset.y = elemTop + elemHeight + options.spacing;
                        break;
                    case 'br':
                        offset.x = elemLeft + elemWidth - popupWidth;
                        offset.y = elemTop + elemHeight + options.spacing;
                        break;
                    case 'tl':
                        offset.x = elemLeft;
                        offset.y = elemTop - popupHeight - options.spacing;
                        break;
                    case 'tc':
                        offset.x = elemLeft + (elemWidth / 2 - popupWidth / 2);
                        offset.y = elemTop - popupHeight - options.spacing;
                        break;
                    case 'tr':
                        offset.x = elemLeft + elemWidth - popupWidth;
                        offset.y = elemTop - popupHeight - options.spacing;
                        break;
                }

                offset.x += 'px';
                offset.y += 'px';

                return offset;
            }


            function parseDate(date, fallback) {
                if (typeof date == 'string') {
                    return moment(date, options.modelDateFormat);
                } else {
                    return date ? moment(date) : (fallback || null);
                }
            }


            function fitIntoRange() {
                if ($scope.min && moment.min($scope.currentDate, $scope.min) == $scope.currentDate) {
                    $scope.currentDate = $scope.min.clone();
                }

                if ($scope.max && moment.max($scope.currentDate, $scope.max) == $scope.currentDate) {
                    $scope.currentDate = $scope.max.clone();
                }
            }


            function isWeekend(date, dayOfMonth) {
                var d = moment(date);
                d.date(dayOfMonth);
                var dayOfWeek = d.day();

                return dayOfWeek === 0 || dayOfWeek === 6;
            }


            function isToday(date, dayOfMonth) {
                var now = moment();
                var d = moment(date);
                d.date(dayOfMonth);

                return d.isSame(now, 'day');
            }
        }
    };
}]);