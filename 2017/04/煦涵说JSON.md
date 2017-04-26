# 煦涵说 JSON
JSON(Javascript Object Notaion, javascript 对象表示法)， 是一种数据交换格式，能够在服务器端交换数据， 2001年由Douglas Crockford提出，目的是取代繁琐笨重的XML格式。

JSON 数据格式的优点：
* 与语言无关的文本数据格式
* 轻量、简单、易维护
* 是javascript编程语言的一个子集(**Standard ECMA-262 3rd Edition - December 1999**)， 符合javascript 语言语法，可以使用javascript提供的方法直接解析处理

JSON 建立在两种数据结构上：
* 键 / 值对：各种语言中可以为 字符串、对象、数组或者哈希表
* 有序列表（值）：各种语言中实现为数组、向量、列表或者序列

## JSON的基本语法：
一、 JSON 对象
```json
{
    "key": value
}
```
二、JSON 数组
```json
[value, value, value]
```
三、value 可取值
value 可以是 String(必须使用双引号包裹)、Number、Boolean、null、Object、Array, 这些形式可以嵌套，value值不能是八进制、十六进制（0xF0F）、undefined、function、日期对象，看下面示例

合格的 JSON 格式：
```json
{ 
    "name": "煦涵", 
    "name": null, 
    "male": true, 
    "age": 23
}

{ 
    "brother": ["煦涵1", "煦涵2"]
}

{ 
    "brother": {
        ”煦涵1“: {
            "age": 32
        },
        ”煦涵2“: {
            "age": 30
        }
    }
}

[{
    "name": "煦涵”
    “age": 30
},{
    "name": "张三”
    “age": 27
}]
```
不合格的 JSON 格式：
```json
// key 必须用双引号包裹，value 如果是字符串必须用双引号包裹
{ 'name': "煦涵" } 
[1, 2, 3, 4, oxFOF] 
{ 'name': undefined } 
{ 'name': function() { return "煦涵"} }
{ 'name': new Date() }  
```
如果value的一个String（双引号包围）内包含 `\"`、`\\`、`\/`、`\b`、`\f`、`\n`、`\r`、`\t`、`\u001f` 需要使用反斜杠
如果value的一个Number，不能使用八进制和十六进制数值
PS： value对空格没有限制要求


## JSON 对象
javascript 在 ES5中新增了 JSON 对象，用来处理 JSON 文本数据，实现字符串与 JSON 对象间的相互转换，`JSON.stringify ( value [ , replacer [ , space ] ] )` 和 ` JSON.parse ( text [ , reviver ] )`





https://github.com/douglascrockford/JSON-js/blob/master/json2.js
http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf