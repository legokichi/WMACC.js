# WMACC.js [![Build Status](https://travis-ci.org/uupaa/WMACC.js.png)](http://travis-ci.org/uupaa/WMACC.js)

[![npm](https://nodei.co/npm/uupaa.wmacc.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.wmacc.js/)

AltJS Compiler Collection for BrowserJS

## Document

- [WMACC.js wiki](https://github.com/legokichi/WMACC.js/wiki/WMACC)
- [Development](https://github.com/legokichi/WebModule/wiki/Development)
- [WebModule](https://github.com/legokichi/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/WMACC.js"></script>
<script src="lib/WMACC-coffeescript.js"></script>
<script>
var acc = new WMACC();
console.log(acc.list());// -> [{type:"altjs, name:"CoffeeScript", version:"1.7.1"}]
acc.load("CoffeeScript", function(compilerServer){
  compilerServer.compile([
    {
      fileName: "a.coffee",
      content: "console.log 'hello world'"
    }
  ], {wrap: false}, function(err, result){
    if(!!err){
      console.error(err);
    }else{
      console.log(result);
    }
    compilerServer.unload();
  });
});
</script>
```
