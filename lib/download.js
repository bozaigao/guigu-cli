/*
 * @Author: your name
 * @Date: 2020-09-07 12:26:42
 * @LastEditTime: 2020-09-07 23:12:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /实操/vue-auto-router-cli/bin/lib/download.js
 */
const { promisify } = require('util')
module.exports.clone = async function (repo, desc) {
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`从远程克隆模板${repo}`)
    process.start()
    await download(repo, desc)
    process.end()
}
