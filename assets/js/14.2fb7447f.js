(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{420:function(t,n,a){"use strict";a.r(n);var e=a(2),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("blockquote",[n("p",[t._v("本篇为JavaScript中构造函数理解，以巩固自身基础为主")])]),t._v(" "),n("h3",{attrs:{id:"构造函数是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数是什么"}},[t._v("#")]),t._v(" 构造函数是什么")]),t._v(" "),n("p",[t._v("JavaScript构造函数（Constructor）也称为构造器、类型函数，功能类似对象模板，一个构造函数可以生成任意多个实例，实例对象具有相同的属性、行为特征，但不相等")]),t._v(" "),n("h4",{attrs:{id:"如何定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何定义"}},[t._v("#")]),t._v(" 如何定义")]),t._v(" "),n("p",[t._v("语法和用法上，构造函数与普通函数没有任何区别。（为了更好的区分两者，构造函数的名称首字母建议大写）")]),t._v(" "),n("p",[t._v("代码实例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function Fun(a,b){\n    this.a = a\n    this.b = b\n    this.c = function(){\n        //处理代码\n    }\n    ...\n    //其他代码，可以包含return语句\n}\n")])])]),n("h4",{attrs:{id:"如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("函数体内使用this,引用将要生成的实例对象")])]),t._v(" "),n("li",[n("p",[t._v("必须使用new 命令调用函数，生成实例对象")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let fun = new Fun() // 如不需要传参数，可以省略小括号 let fun = new Fun\n")])])])])]),t._v(" "),n("h4",{attrs:{id:"构造函数的返回值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的返回值"}},[t._v("#")]),t._v(" 构造函数的返回值")]),t._v(" "),n("p",[t._v("构造函数允许使用return 语句。如果返回值为简单值则将被忽略，直接返回this指代对象；如果返回值为对象则将覆盖this指代的实例，返回return后面跟随的对象。")]),t._v(" "),n("p",[t._v("代码示例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function Fun(a,b){\n    this.a = a\n    this.b = b\n    return {c:3,d:4}\n}\nlet fun = new Fun(1,2)\nconsole.log('a的值为:',fun.a);\nconsole.log('b的值为:',fun.b);\n")])])]),n("p",[t._v("如图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/239f1c49773d47c2b2c61976ac80d476~tplv-k3u1fbpfcp-watermark.image?",alt:"构造函数截图1.png"}})]),t._v(" "),n("p",[n("strong",[t._v("出现的原因：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("这与new命令解析过程有关，使用new命令调用函数的解析过程如下：\n第1步，当使用new命令调用函数时，先创建一个空对象,作为实例返回\n第2步，设置实例的原型，指向构造函数的prototype属性\n第3步，设置构造函数的体内的this值，让他指向实例。\n第4步，开始执行构造函数内部的代码\n第5步，如果构造函数内部有return语句，而且return后为一个对象，会返回return语句指定的对象;否则会忽略return的返回值，直接返回this对象\n")])])]),n("p",[n("strong",[t._v("延伸：手写new命令")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('function Fun(a, b) {\n    this.a = a;\n    this.b = b;\n    // return { c: 3, d: 4 };\n}\nfunction myNew() {\n        let obj = {}; // 创建对象\n        console.log(arguments);\n        let constructor = [].shift.call(arguments); // 获取构造函数\n        console.log(arguments);\n        if (constructor.prototype !== null) {\n          obj.__proto__ = constructor.prototype; // 构造函数链接到新对象\n        }\n        let ret = constructor.apply(obj, [].slice.call(arguments)); // 改变this指向\n        console.log(arguments);\n        console.log(typeof ret);\n        if (\n          (typeof ret === "object" || typeof ret === "function") &&\n          ret !== null\n        ) {\n          return ret;\n        }\n        return obj; // 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。\n}\n\n      let fun =  myNew(Fun,1,2);\n      console.log(fun)\n')])])]),n("p",[t._v("如图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce7b1d94b10c4f9da193f5a69f585938~tplv-k3u1fbpfcp-watermark.image?",alt:"构造函数截图2.png"}})]),t._v(" "),n("h3",{attrs:{id:"最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),n("p",[t._v("构造函数在面试过程中被问到概率挺大的，多了解一点没什么坏处")])])}),[],!1,null,null,null);n.default=r.exports}}]);