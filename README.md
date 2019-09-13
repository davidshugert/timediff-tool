# Time Difference
Tool that allows you to quickly get the time taken from initalization to different points in time.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install timediff-tool --save
```

## Usage
```js
const TimeDiff = require('timediff-tool');
let timediff = new TimeDiff();
setTimeout(() => console.log(timediff.timeTaken + ' milliseconds'), 1500); // 1501 milliseconds
```

## Advanced Usage
```js
const TimeDiff = require('timediff-tool');
let timediff = new TimeDiff();

setTimeout(() => timediff.addPoint("test1"), 1500);
setTimeout(() => timediff.addPoint("test12"), 1600);
setTimeout(() => timediff.addPoint(), 1700);
setTimeout(() =>  console.log(timediff.allTimePoints), 2000);
/** Output: 
  [ { name: 'test1',
    timeRecorded: 2019-09-13T16:52:12.655Z,
    timeDifference:
     { milliseconds: 1502,
       seconds: 1.502,
       minutes: 0.025033333333333335,
       hours: 0.00041722222222222226 } },
  { name: 'test12',
    timeRecorded: 2019-09-13T16:52:12.754Z,
    timeDifference:
     { milliseconds: 1601,
       seconds: 1.601,
       minutes: 0.026683333333333333,
       hours: 0.0004447222222222222 } },
  { name: 2,
    timeRecorded: 2019-09-13T16:52:12.854Z,
    timeDifference:
     { milliseconds: 1701,
       seconds: 1.701,
       minutes: 0.02835,
       hours: 0.0004725 } } ]
 **/
```