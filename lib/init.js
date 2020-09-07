#!/usr/bin/env node
const commander = require('commander')
const chalk = require('chalk')
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const open = require('open')
const { clone } = require('./download')
commander.version(require('../package.json').version)
const log = (content) => {
    console.log(chalk.green(content));
}
const error = (content) => {
    console.log(chalk.red(content));
}
module.exports.init = async (name, template) => {
    const data = await figlet('guigu cli')
    log(data)
    //taro-demo、taro-miniprogram、fish-refux-flutter、chat-flutter

    if (!name) {
        error('请输入项目初始化名称 !')
        return;
    }
    switch (template) {
        case 'taro-demo':
            log(`🚀创建项目:${name}`);
            await clone('github:bozaigao/Taro-demo', name)
            log('✔ 下载完成')
            open('https://github.com/bozaigao/Taro-demo')
            break;
        case 'taro-miniprogram':
            log(`🚀创建项目:${name}`);
            await clone('github:bozaigao/BusinessCard', name)
            log('✔ 下载完成')
            open('https://github.com/bozaigao/BusinessCard')
            break;
        case 'fish-refux-flutter':
            log(`🚀创建项目:${name}`);
            await clone('github:bozaigao/fish-redux-demo', name)
            log('✔ 下载完成')
            open('https://github.com/bozaigao/fish-redux-demo')
            break;
        case 'chat-flutter':
            log(`🚀创建项目:${name}`);
            await clone('github:bozaigao/flutter_server_client', name)
            log('✔ 下载完成')
            open('https://github.com/bozaigao/flutter_server_client')
            break;
        default:
            error('请选择初始化模板!')
            break;
    }
}