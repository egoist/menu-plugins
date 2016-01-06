#!/usr/bin/env /usr/local/bin/node
const moment = require('moment-timezone')
const format = 'MM/DD hh:mm A'
console.log('CHN', moment().tz('Asia/Shanghai').format(format))
console.log('BAY', moment().tz('America/Los_Angeles').format(format))
console.log('EUR', moment().tz('Europe/Berlin').format(format))
