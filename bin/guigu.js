#!/usr/bin/env node

const program = require('commander');
const clear = require('clear')
const { init } = require('../lib/init');
program
    .usage('[options] <file ...>')
    .option('-i, --iname <n>', '项目初始化名字')
    .option('-t, --template <n>', '项目所用模板(taro-demo、taro-miniprogram、fish-refux-flutter、chat-flutter')
    .parse(process.argv);
clear()
init(program.iname, program.template)
