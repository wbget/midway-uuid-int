# midwayjs uuid-int module

## Install
npm install midway-uuid-int --save

## Config
None.

## Use
```
@Inject()
uuidInt: UUIDIntService;

doSomething() {
  const id = this.uuidInt.uuid(); // generate id by uuid-int
}
```

## Use Redis
Edit config.default.ts
```
export const uuidInt = {
  key: 'uuid-int', // redis key
}
```
[uuid-int](https://github.com/wbget/uuid-int)
## License

[MIT]((http://github.com/midwayjs/midway/blob/master/LICENSE))
