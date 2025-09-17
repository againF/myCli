// 获取参数
// 直接获取
// const args = process.argv
// const [k,v,k2,v2] = args.slice(2)
// console.log('args', args)
// console.log('k,v', {k,v})
// const pureK = k.replace('--','')
// const pureK2 = k2.replace('--','')
// const options = {
//     [pureK]: v,
//     [pureK2]: v2
// }
// console.log('options', options)
// 使用第三方库 commander
const { program } = require('commander');
// console.log('program打印', program);
program
.version('1.0.0')
.description('my cli tool');
/***
 * 导出方法，在 bin 目录下的可执行文件中调用
 * ~/learn/myCli/packages/cli目录下
 * 命令行执行./bin/alan报错zsh: permission denied: ./bin/alan
 * 再执行sudo ./bin/alan报错sudo: ./bin/alan: command not found
 * ls -al bin查看权限 -rw-r--r--  1 alanmac  staff   72  9 17 22:27 alan
 * 为只读权限，执行chmod +x bin/alan  修改权限
 * 再执行ls -al bin       查看权限 -rwxr-xr-x  1 alanmac  staff   72  9 17 22:27 alan
 * 再执行./bin/alan      成功
 * **/
module.exports = function runCli(){
    program.parse(process.argv);
}
