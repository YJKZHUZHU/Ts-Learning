// 布尔类型
let bool: boolean 
bool = true
console.log(bool)

// 数字
let num: number
num = 1232
console.log(num)
// 字符串
let str:string
str = `字符串${bool}${num}`
console.log(str)

// 数组
//方式一
let list: number[]
list = [1,2,3,4,55]
console.log(list)
//方式二
let list1: Array<string>
list1 = ['1','2','3']
//混合一
let list2 : (number | string)[]
list2 = [1,2,3,4,'jkoij']
//混合二
let list3: Array<number | string>
list3 = [1,2,4,4,'juih']
//元组
let tuple: [number,string,boolean]
tuple = [999,'jioio',false]

//枚举类型

enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}
console.log(Roles.ADMIN) //1
//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Roles1 {
  SUPER_ADMIN = 6,
  ADMIN,
  USER
}
console.log(Roles1.SUPER_ADMIN) //6
console.log(Roles1) //{6: "SUPER_ADMIN",7: "ADMIN",8: "USER",SUPER_ADMIN: 6,ADMIN: 7,USER: 8}

//在对一些后端返回的权限字段可以用的上
const response = {
  roles: 1
}
if(response.roles === Roles.ADMIN){
  console.log('我是管理员')
}

//any类型
let notSure:any = 3
notSure = '我不确定，对不对'
notSure = false
console.log(notSure)

let anyArr: any[]
anyArr = [1,2,3,'jiji',false]
console.log(anyArr[0]) //1

//void :某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function getString(text:string) :void {
  console.log(text)
}
getString('叶俊宽')

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unuseble:void = undefined
//ts.config 关闭严格模式生效
// unuseble = null

//null和undefined
let n: null = null
let u:undefined = undefined
//然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// n = false
// u = true

//never :never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message:string):never {
  throw new Error(message)
}
// 推断的返回值类型为never
function fail() {
  return error('some error')
}
//返回never的函数必须存在无法达到的终点
function infiniteLoop() {
  while(true){}
}

//object
let obj = {
  name: '叶俊宽'
}
function getObj(obj: object){
  console.log(obj)
}
getObj(obj)

//类型断言
//有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
//返回长度
function getLength(target:(number | string)){
  if ((<String>target).length && (target as string).length !== 0){
    return (target as string).length
  }
  return (target as string).toString().length
}
console.log(getLength('fewfwefwefewfew'))
