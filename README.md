# randomjson
Generate json randomly according to the conditions
## how to use
### install
    npm install randomjson
### use
```javascript
    var randomjson = require('randomjson');
    
    modelJson = {
        "ret": "200",
        "msg": "<@string{1,10}|number>",
        "p1": "<@null>",
        "info": "<@chinese>",
        "p2": "<@boolean>",
        "p7": {
            "p11<@{2,5}>": [
                {
                    "p8": "12312",
                    "p9": ["<@string{4,7}>"],
                    "p10": "<@string>"
                }
            ]
        },
        "data<@{1,10}>": [
            {
                "p8": "12312",
                "p9": 7777,
                "p10": "<@string>"
            }
        ],
        "p15": "<@number{4}>-<@number{2}>-<@number{2}>"
    }
    var myJson = randomjson(modelJson);
    
    The value of myJson might be:
    
    {
        "ret": 1708,
        "msg": "This Ec",
        "p1": null,
        "info": "集中第六版的发展始于2",
        "p2": true,
        "p7": {
            "p11": [{
                "p8": "12312",
                "p9": ["This"],
                "p10": "This Ecma Standa"
            }, {
                "p8": "12312",
                "p9": ["This"],
                "p10": "This Ecma Standa"
            }, {
                "p8": "12312",
                "p9": ["This E"],
                "p10": "This "
            }]
        },
        "data": [{
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma St"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma Standard d"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma Standard d"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma Standa"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This E"
        }],
        "p15": "8302-82-22"
        }
    
```    
    
## Lexical
    Starting with <@, ending with>, the middle content is randomjson's lexical  
## conditions

### data type
    "<@number>": the data type is number
    "<@string>": the data type is string
    "<@null>": the data type is null
    "<@boolean>": the data type is boolean
    "<@chinese>": chinese string
### quantifier
    {minNumber, maxNumber}: At least minNumber, up to maxNumber
    {minNumber,}: At least minNumber
    {number}: A total of number
### Multiple options
    You can use "|" to separate multiple options, random values are one of them#
### Length description
    Non-array, the length of the value string, for example: "ret": "<@number {4}>"
    When the value is an array, the length is in the key, for example:
             "P11<@{2,5}>": [{
                 "P8": "12312",
                 "P9": ["<@string{4,7}>"],
                 "P10": "<@string>"
             }]
    
# randomjson
根据条件生成json对应的随机json
## 如何使用
### 安装
    npm install randomjson
### 用法
```javascript
    // 引用包
    var randomjson = require('randomjson');
    // 模型
    modelJson = {
        "ret": "200",
        "msg": "<@string{1,10}|number>",
        "p1": "<@null>",
        "info": "<@chinese>",
        "p2": "<@boolean>",
        "p7": {
            "p11<@{2,5}>": [
                {
                    "p8": "12312",
                    "p9": ["<@string{4,7}>"],
                    "p10": "<@string>"
                }
            ]
        },
        "data<@{1,10}>": [
            {
                "p8": "12312",
                "p9": 7777,
                "p10": "<@string>"
            }
        ],
        "p15": "<@number{4}>-<@number{2}>-<@number{2}>"
    }
    // 根据模型生成json
    var myJson = randomjson(modelJson);
    
    根据上边模型生成的json可能是这样:
    
    {
        "ret": 1708,
        "msg": "This Ec",
        "p1": null,
        "info": "集中第六版的发展始于2",
        "p2": true,
        "p7": {
            "p11": [{
                "p8": "12312",
                "p9": ["This"],
                "p10": "This Ecma Standa"
            }, {
                "p8": "12312",
                "p9": ["This"],
                "p10": "This Ecma Standa"
            }, {
                "p8": "12312",
                "p9": ["This E"],
                "p10": "This "
            }]
        },
        "data": [{
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma St"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma Standard d"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma Standard d"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This Ecma Standa"
        }, {
            "p8": "12312",
            "p9": 7777,
            "p10": "This E"
        }],
        "p15": "8302-82-22"
        }
    
```    
    
## Lexical
    以<@开始，以>结束，中间内容是randomjson的词法  
## conditions

### data type
    "<@number>": number类型
    "<@string>": string类型
    "<@null>": null
    "<@boolean>": boolean类型
    "<@chinese>": 中文字符串
### quantifier
    {minNumber, maxNumber}: minNumber到maxNumber个
    {minNumber,}: 最少minNumber
    {number}: number个
### Multiple options
    你可以使用“|” 要分离多个选项，随机值是其中之一
### Length description
    值为非数组时，长度在value字符串里，例如："ret": "<@number{4}>"
    值为数组时，长度在key里，例如：
            "p11<@{2,5}>": [{
                "p8": "12312",
                "p9": ["<@string{4,7}>"],
                "p10": "<@string>"
            }]
            
## 目前项目还在开发中，有兴趣可以加qq群：  533916703
