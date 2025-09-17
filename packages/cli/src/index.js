// 获取参数
// 直接获取
const args = process.argv
const [k,v,k2,v2] = args.slice(2)
console.log('args', args)
console.log('k,v', {k,v})
const pureK = k.replace('--','')
const pureK2 = k2.replace('--','')
const options = {
    [pureK]: v,
    [pureK2]: v2
}
console.log('options', options)