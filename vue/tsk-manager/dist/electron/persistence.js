module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/persistence.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/graceful-fs/fs.js":
/*!****************************************!*\
  !*** ./node_modules/graceful-fs/fs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fs = __webpack_require__(/*! fs */ \"fs\")\n\nmodule.exports = clone(fs)\n\nfunction clone (obj) {\n  if (obj === null || typeof obj !== 'object')\n    return obj\n\n  if (obj instanceof Object)\n    var copy = { __proto__: obj.__proto__ }\n  else\n    var copy = Object.create(null)\n\n  Object.getOwnPropertyNames(obj).forEach(function (key) {\n    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))\n  })\n\n  return copy\n}\n\n\n//# sourceURL=webpack:///./node_modules/graceful-fs/fs.js?");

/***/ }),

/***/ "./node_modules/graceful-fs/graceful-fs.js":
/*!*************************************************!*\
  !*** ./node_modules/graceful-fs/graceful-fs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fs = __webpack_require__(/*! fs */ \"fs\")\nvar polyfills = __webpack_require__(/*! ./polyfills.js */ \"./node_modules/graceful-fs/polyfills.js\")\nvar legacy = __webpack_require__(/*! ./legacy-streams.js */ \"./node_modules/graceful-fs/legacy-streams.js\")\nvar queue = []\n\nvar util = __webpack_require__(/*! util */ \"util\")\n\nfunction noop () {}\n\nvar debug = noop\nif (util.debuglog)\n  debug = util.debuglog('gfs4')\nelse if (/\\bgfs4\\b/i.test(process.env.NODE_DEBUG || ''))\n  debug = function() {\n    var m = util.format.apply(util, arguments)\n    m = 'GFS4: ' + m.split(/\\n/).join('\\nGFS4: ')\n    console.error(m)\n  }\n\nif (/\\bgfs4\\b/i.test(process.env.NODE_DEBUG || '')) {\n  process.on('exit', function() {\n    debug(queue)\n    __webpack_require__(/*! assert */ \"assert\").equal(queue.length, 0)\n  })\n}\n\nmodule.exports = patch(__webpack_require__(/*! ./fs.js */ \"./node_modules/graceful-fs/fs.js\"))\nif (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH) {\n  module.exports = patch(fs)\n}\n\n// Always patch fs.close/closeSync, because we want to\n// retry() whenever a close happens *anywhere* in the program.\n// This is essential when multiple graceful-fs instances are\n// in play at the same time.\nmodule.exports.close =\nfs.close = (function (fs$close) { return function (fd, cb) {\n  return fs$close.call(fs, fd, function (err) {\n    if (!err)\n      retry()\n\n    if (typeof cb === 'function')\n      cb.apply(this, arguments)\n  })\n}})(fs.close)\n\nmodule.exports.closeSync =\nfs.closeSync = (function (fs$closeSync) { return function (fd) {\n  // Note that graceful-fs also retries when fs.closeSync() fails.\n  // Looks like a bug to me, although it's probably a harmless one.\n  var rval = fs$closeSync.apply(fs, arguments)\n  retry()\n  return rval\n}})(fs.closeSync)\n\nfunction patch (fs) {\n  // Everything that references the open() function needs to be in here\n  polyfills(fs)\n  fs.gracefulify = patch\n  fs.FileReadStream = ReadStream;  // Legacy name.\n  fs.FileWriteStream = WriteStream;  // Legacy name.\n  fs.createReadStream = createReadStream\n  fs.createWriteStream = createWriteStream\n  var fs$readFile = fs.readFile\n  fs.readFile = readFile\n  function readFile (path, options, cb) {\n    if (typeof options === 'function')\n      cb = options, options = null\n\n    return go$readFile(path, options, cb)\n\n    function go$readFile (path, options, cb) {\n      return fs$readFile(path, options, function (err) {\n        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))\n          enqueue([go$readFile, [path, options, cb]])\n        else {\n          if (typeof cb === 'function')\n            cb.apply(this, arguments)\n          retry()\n        }\n      })\n    }\n  }\n\n  var fs$writeFile = fs.writeFile\n  fs.writeFile = writeFile\n  function writeFile (path, data, options, cb) {\n    if (typeof options === 'function')\n      cb = options, options = null\n\n    return go$writeFile(path, data, options, cb)\n\n    function go$writeFile (path, data, options, cb) {\n      return fs$writeFile(path, data, options, function (err) {\n        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))\n          enqueue([go$writeFile, [path, data, options, cb]])\n        else {\n          if (typeof cb === 'function')\n            cb.apply(this, arguments)\n          retry()\n        }\n      })\n    }\n  }\n\n  var fs$appendFile = fs.appendFile\n  if (fs$appendFile)\n    fs.appendFile = appendFile\n  function appendFile (path, data, options, cb) {\n    if (typeof options === 'function')\n      cb = options, options = null\n\n    return go$appendFile(path, data, options, cb)\n\n    function go$appendFile (path, data, options, cb) {\n      return fs$appendFile(path, data, options, function (err) {\n        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))\n          enqueue([go$appendFile, [path, data, options, cb]])\n        else {\n          if (typeof cb === 'function')\n            cb.apply(this, arguments)\n          retry()\n        }\n      })\n    }\n  }\n\n  var fs$readdir = fs.readdir\n  fs.readdir = readdir\n  function readdir (path, options, cb) {\n    var args = [path]\n    if (typeof options !== 'function') {\n      args.push(options)\n    } else {\n      cb = options\n    }\n    args.push(go$readdir$cb)\n\n    return go$readdir(args)\n\n    function go$readdir$cb (err, files) {\n      if (files && files.sort)\n        files.sort()\n\n      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))\n        enqueue([go$readdir, [args]])\n      else {\n        if (typeof cb === 'function')\n          cb.apply(this, arguments)\n        retry()\n      }\n    }\n  }\n\n  function go$readdir (args) {\n    return fs$readdir.apply(fs, args)\n  }\n\n  if (process.version.substr(0, 4) === 'v0.8') {\n    var legStreams = legacy(fs)\n    ReadStream = legStreams.ReadStream\n    WriteStream = legStreams.WriteStream\n  }\n\n  var fs$ReadStream = fs.ReadStream\n  ReadStream.prototype = Object.create(fs$ReadStream.prototype)\n  ReadStream.prototype.open = ReadStream$open\n\n  var fs$WriteStream = fs.WriteStream\n  WriteStream.prototype = Object.create(fs$WriteStream.prototype)\n  WriteStream.prototype.open = WriteStream$open\n\n  fs.ReadStream = ReadStream\n  fs.WriteStream = WriteStream\n\n  function ReadStream (path, options) {\n    if (this instanceof ReadStream)\n      return fs$ReadStream.apply(this, arguments), this\n    else\n      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)\n  }\n\n  function ReadStream$open () {\n    var that = this\n    open(that.path, that.flags, that.mode, function (err, fd) {\n      if (err) {\n        if (that.autoClose)\n          that.destroy()\n\n        that.emit('error', err)\n      } else {\n        that.fd = fd\n        that.emit('open', fd)\n        that.read()\n      }\n    })\n  }\n\n  function WriteStream (path, options) {\n    if (this instanceof WriteStream)\n      return fs$WriteStream.apply(this, arguments), this\n    else\n      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)\n  }\n\n  function WriteStream$open () {\n    var that = this\n    open(that.path, that.flags, that.mode, function (err, fd) {\n      if (err) {\n        that.destroy()\n        that.emit('error', err)\n      } else {\n        that.fd = fd\n        that.emit('open', fd)\n      }\n    })\n  }\n\n  function createReadStream (path, options) {\n    return new ReadStream(path, options)\n  }\n\n  function createWriteStream (path, options) {\n    return new WriteStream(path, options)\n  }\n\n  var fs$open = fs.open\n  fs.open = open\n  function open (path, flags, mode, cb) {\n    if (typeof mode === 'function')\n      cb = mode, mode = null\n\n    return go$open(path, flags, mode, cb)\n\n    function go$open (path, flags, mode, cb) {\n      return fs$open(path, flags, mode, function (err, fd) {\n        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))\n          enqueue([go$open, [path, flags, mode, cb]])\n        else {\n          if (typeof cb === 'function')\n            cb.apply(this, arguments)\n          retry()\n        }\n      })\n    }\n  }\n\n  return fs\n}\n\nfunction enqueue (elem) {\n  debug('ENQUEUE', elem[0].name, elem[1])\n  queue.push(elem)\n}\n\nfunction retry () {\n  var elem = queue.shift()\n  if (elem) {\n    debug('RETRY', elem[0].name, elem[1])\n    elem[0].apply(null, elem[1])\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/graceful-fs/graceful-fs.js?");

/***/ }),

/***/ "./node_modules/graceful-fs/legacy-streams.js":
/*!****************************************************!*\
  !*** ./node_modules/graceful-fs/legacy-streams.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stream = __webpack_require__(/*! stream */ \"stream\").Stream\n\nmodule.exports = legacy\n\nfunction legacy (fs) {\n  return {\n    ReadStream: ReadStream,\n    WriteStream: WriteStream\n  }\n\n  function ReadStream (path, options) {\n    if (!(this instanceof ReadStream)) return new ReadStream(path, options);\n\n    Stream.call(this);\n\n    var self = this;\n\n    this.path = path;\n    this.fd = null;\n    this.readable = true;\n    this.paused = false;\n\n    this.flags = 'r';\n    this.mode = 438; /*=0666*/\n    this.bufferSize = 64 * 1024;\n\n    options = options || {};\n\n    // Mixin options into this\n    var keys = Object.keys(options);\n    for (var index = 0, length = keys.length; index < length; index++) {\n      var key = keys[index];\n      this[key] = options[key];\n    }\n\n    if (this.encoding) this.setEncoding(this.encoding);\n\n    if (this.start !== undefined) {\n      if ('number' !== typeof this.start) {\n        throw TypeError('start must be a Number');\n      }\n      if (this.end === undefined) {\n        this.end = Infinity;\n      } else if ('number' !== typeof this.end) {\n        throw TypeError('end must be a Number');\n      }\n\n      if (this.start > this.end) {\n        throw new Error('start must be <= end');\n      }\n\n      this.pos = this.start;\n    }\n\n    if (this.fd !== null) {\n      process.nextTick(function() {\n        self._read();\n      });\n      return;\n    }\n\n    fs.open(this.path, this.flags, this.mode, function (err, fd) {\n      if (err) {\n        self.emit('error', err);\n        self.readable = false;\n        return;\n      }\n\n      self.fd = fd;\n      self.emit('open', fd);\n      self._read();\n    })\n  }\n\n  function WriteStream (path, options) {\n    if (!(this instanceof WriteStream)) return new WriteStream(path, options);\n\n    Stream.call(this);\n\n    this.path = path;\n    this.fd = null;\n    this.writable = true;\n\n    this.flags = 'w';\n    this.encoding = 'binary';\n    this.mode = 438; /*=0666*/\n    this.bytesWritten = 0;\n\n    options = options || {};\n\n    // Mixin options into this\n    var keys = Object.keys(options);\n    for (var index = 0, length = keys.length; index < length; index++) {\n      var key = keys[index];\n      this[key] = options[key];\n    }\n\n    if (this.start !== undefined) {\n      if ('number' !== typeof this.start) {\n        throw TypeError('start must be a Number');\n      }\n      if (this.start < 0) {\n        throw new Error('start must be >= zero');\n      }\n\n      this.pos = this.start;\n    }\n\n    this.busy = false;\n    this._queue = [];\n\n    if (this.fd === null) {\n      this._open = fs.open;\n      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);\n      this.flush();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/graceful-fs/legacy-streams.js?");

/***/ }),

/***/ "./node_modules/graceful-fs/polyfills.js":
/*!***********************************************!*\
  !*** ./node_modules/graceful-fs/polyfills.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fs = __webpack_require__(/*! ./fs.js */ \"./node_modules/graceful-fs/fs.js\")\nvar constants = __webpack_require__(/*! constants */ \"constants\")\n\nvar origCwd = process.cwd\nvar cwd = null\n\nvar platform = process.env.GRACEFUL_FS_PLATFORM || process.platform\n\nprocess.cwd = function() {\n  if (!cwd)\n    cwd = origCwd.call(process)\n  return cwd\n}\ntry {\n  process.cwd()\n} catch (er) {}\n\nvar chdir = process.chdir\nprocess.chdir = function(d) {\n  cwd = null\n  chdir.call(process, d)\n}\n\nmodule.exports = patch\n\nfunction patch (fs) {\n  // (re-)implement some things that are known busted or missing.\n\n  // lchmod, broken prior to 0.6.2\n  // back-port the fix here.\n  if (constants.hasOwnProperty('O_SYMLINK') &&\n      process.version.match(/^v0\\.6\\.[0-2]|^v0\\.5\\./)) {\n    patchLchmod(fs)\n  }\n\n  // lutimes implementation, or no-op\n  if (!fs.lutimes) {\n    patchLutimes(fs)\n  }\n\n  // https://github.com/isaacs/node-graceful-fs/issues/4\n  // Chown should not fail on einval or eperm if non-root.\n  // It should not fail on enosys ever, as this just indicates\n  // that a fs doesn't support the intended operation.\n\n  fs.chown = chownFix(fs.chown)\n  fs.fchown = chownFix(fs.fchown)\n  fs.lchown = chownFix(fs.lchown)\n\n  fs.chmod = chmodFix(fs.chmod)\n  fs.fchmod = chmodFix(fs.fchmod)\n  fs.lchmod = chmodFix(fs.lchmod)\n\n  fs.chownSync = chownFixSync(fs.chownSync)\n  fs.fchownSync = chownFixSync(fs.fchownSync)\n  fs.lchownSync = chownFixSync(fs.lchownSync)\n\n  fs.chmodSync = chmodFixSync(fs.chmodSync)\n  fs.fchmodSync = chmodFixSync(fs.fchmodSync)\n  fs.lchmodSync = chmodFixSync(fs.lchmodSync)\n\n  fs.stat = statFix(fs.stat)\n  fs.fstat = statFix(fs.fstat)\n  fs.lstat = statFix(fs.lstat)\n\n  fs.statSync = statFixSync(fs.statSync)\n  fs.fstatSync = statFixSync(fs.fstatSync)\n  fs.lstatSync = statFixSync(fs.lstatSync)\n\n  // if lchmod/lchown do not exist, then make them no-ops\n  if (!fs.lchmod) {\n    fs.lchmod = function (path, mode, cb) {\n      if (cb) process.nextTick(cb)\n    }\n    fs.lchmodSync = function () {}\n  }\n  if (!fs.lchown) {\n    fs.lchown = function (path, uid, gid, cb) {\n      if (cb) process.nextTick(cb)\n    }\n    fs.lchownSync = function () {}\n  }\n\n  // on Windows, A/V software can lock the directory, causing this\n  // to fail with an EACCES or EPERM if the directory contains newly\n  // created files.  Try again on failure, for up to 60 seconds.\n\n  // Set the timeout this long because some Windows Anti-Virus, such as Parity\n  // bit9, may lock files for up to a minute, causing npm package install\n  // failures. Also, take care to yield the scheduler. Windows scheduling gives\n  // CPU to a busy looping process, which can cause the program causing the lock\n  // contention to be starved of CPU by node, so the contention doesn't resolve.\n  if (platform === \"win32\") {\n    fs.rename = (function (fs$rename) { return function (from, to, cb) {\n      var start = Date.now()\n      var backoff = 0;\n      fs$rename(from, to, function CB (er) {\n        if (er\n            && (er.code === \"EACCES\" || er.code === \"EPERM\")\n            && Date.now() - start < 60000) {\n          setTimeout(function() {\n            fs.stat(to, function (stater, st) {\n              if (stater && stater.code === \"ENOENT\")\n                fs$rename(from, to, CB);\n              else\n                cb(er)\n            })\n          }, backoff)\n          if (backoff < 100)\n            backoff += 10;\n          return;\n        }\n        if (cb) cb(er)\n      })\n    }})(fs.rename)\n  }\n\n  // if read() returns EAGAIN, then just try it again.\n  fs.read = (function (fs$read) { return function (fd, buffer, offset, length, position, callback_) {\n    var callback\n    if (callback_ && typeof callback_ === 'function') {\n      var eagCounter = 0\n      callback = function (er, _, __) {\n        if (er && er.code === 'EAGAIN' && eagCounter < 10) {\n          eagCounter ++\n          return fs$read.call(fs, fd, buffer, offset, length, position, callback)\n        }\n        callback_.apply(this, arguments)\n      }\n    }\n    return fs$read.call(fs, fd, buffer, offset, length, position, callback)\n  }})(fs.read)\n\n  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {\n    var eagCounter = 0\n    while (true) {\n      try {\n        return fs$readSync.call(fs, fd, buffer, offset, length, position)\n      } catch (er) {\n        if (er.code === 'EAGAIN' && eagCounter < 10) {\n          eagCounter ++\n          continue\n        }\n        throw er\n      }\n    }\n  }})(fs.readSync)\n}\n\nfunction patchLchmod (fs) {\n  fs.lchmod = function (path, mode, callback) {\n    fs.open( path\n           , constants.O_WRONLY | constants.O_SYMLINK\n           , mode\n           , function (err, fd) {\n      if (err) {\n        if (callback) callback(err)\n        return\n      }\n      // prefer to return the chmod error, if one occurs,\n      // but still try to close, and report closing errors if they occur.\n      fs.fchmod(fd, mode, function (err) {\n        fs.close(fd, function(err2) {\n          if (callback) callback(err || err2)\n        })\n      })\n    })\n  }\n\n  fs.lchmodSync = function (path, mode) {\n    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)\n\n    // prefer to return the chmod error, if one occurs,\n    // but still try to close, and report closing errors if they occur.\n    var threw = true\n    var ret\n    try {\n      ret = fs.fchmodSync(fd, mode)\n      threw = false\n    } finally {\n      if (threw) {\n        try {\n          fs.closeSync(fd)\n        } catch (er) {}\n      } else {\n        fs.closeSync(fd)\n      }\n    }\n    return ret\n  }\n}\n\nfunction patchLutimes (fs) {\n  if (constants.hasOwnProperty(\"O_SYMLINK\")) {\n    fs.lutimes = function (path, at, mt, cb) {\n      fs.open(path, constants.O_SYMLINK, function (er, fd) {\n        if (er) {\n          if (cb) cb(er)\n          return\n        }\n        fs.futimes(fd, at, mt, function (er) {\n          fs.close(fd, function (er2) {\n            if (cb) cb(er || er2)\n          })\n        })\n      })\n    }\n\n    fs.lutimesSync = function (path, at, mt) {\n      var fd = fs.openSync(path, constants.O_SYMLINK)\n      var ret\n      var threw = true\n      try {\n        ret = fs.futimesSync(fd, at, mt)\n        threw = false\n      } finally {\n        if (threw) {\n          try {\n            fs.closeSync(fd)\n          } catch (er) {}\n        } else {\n          fs.closeSync(fd)\n        }\n      }\n      return ret\n    }\n\n  } else {\n    fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }\n    fs.lutimesSync = function () {}\n  }\n}\n\nfunction chmodFix (orig) {\n  if (!orig) return orig\n  return function (target, mode, cb) {\n    return orig.call(fs, target, mode, function (er) {\n      if (chownErOk(er)) er = null\n      if (cb) cb.apply(this, arguments)\n    })\n  }\n}\n\nfunction chmodFixSync (orig) {\n  if (!orig) return orig\n  return function (target, mode) {\n    try {\n      return orig.call(fs, target, mode)\n    } catch (er) {\n      if (!chownErOk(er)) throw er\n    }\n  }\n}\n\n\nfunction chownFix (orig) {\n  if (!orig) return orig\n  return function (target, uid, gid, cb) {\n    return orig.call(fs, target, uid, gid, function (er) {\n      if (chownErOk(er)) er = null\n      if (cb) cb.apply(this, arguments)\n    })\n  }\n}\n\nfunction chownFixSync (orig) {\n  if (!orig) return orig\n  return function (target, uid, gid) {\n    try {\n      return orig.call(fs, target, uid, gid)\n    } catch (er) {\n      if (!chownErOk(er)) throw er\n    }\n  }\n}\n\n\nfunction statFix (orig) {\n  if (!orig) return orig\n  // Older versions of Node erroneously returned signed integers for\n  // uid + gid.\n  return function (target, cb) {\n    return orig.call(fs, target, function (er, stats) {\n      if (!stats) return cb.apply(this, arguments)\n      if (stats.uid < 0) stats.uid += 0x100000000\n      if (stats.gid < 0) stats.gid += 0x100000000\n      if (cb) cb.apply(this, arguments)\n    })\n  }\n}\n\nfunction statFixSync (orig) {\n  if (!orig) return orig\n  // Older versions of Node erroneously returned signed integers for\n  // uid + gid.\n  return function (target) {\n    var stats = orig.call(fs, target)\n    if (stats.uid < 0) stats.uid += 0x100000000\n    if (stats.gid < 0) stats.gid += 0x100000000\n    return stats;\n  }\n}\n\n// ENOSYS means that the fs doesn't support the op. Just ignore\n// that, because it doesn't matter.\n//\n// if there's no getuid, or if getuid() is something other\n// than 0, and the error is EINVAL or EPERM, then just ignore\n// it.\n//\n// This specific case is a silent failure in cp, install, tar,\n// and most other unix tools that manage permissions.\n//\n// When running as root, or if other types of errors are\n// encountered, then it's strict.\nfunction chownErOk (er) {\n  if (!er)\n    return true\n\n  if (er.code === \"ENOSYS\")\n    return true\n\n  var nonroot = !process.getuid || process.getuid() !== 0\n  if (nonroot) {\n    if (er.code === \"EINVAL\" || er.code === \"EPERM\")\n      return true\n  }\n\n  return false\n}\n\n\n//# sourceURL=webpack:///./node_modules/graceful-fs/polyfills.js?");

/***/ }),

/***/ "./node_modules/lowdb/adapters/Base.js":
/*!*********************************************!*\
  !*** ./node_modules/lowdb/adapters/Base.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar stringify = __webpack_require__(/*! ./_stringify */ \"./node_modules/lowdb/adapters/_stringify.js\");\n\nvar Base = function Base(source) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$defaultValue = _ref.defaultValue,\n      defaultValue = _ref$defaultValue === undefined ? {} : _ref$defaultValue,\n      _ref$serialize = _ref.serialize,\n      serialize = _ref$serialize === undefined ? stringify : _ref$serialize,\n      _ref$deserialize = _ref.deserialize,\n      deserialize = _ref$deserialize === undefined ? JSON.parse : _ref$deserialize;\n\n  _classCallCheck(this, Base);\n\n  this.source = source;\n  this.defaultValue = defaultValue;\n  this.serialize = serialize;\n  this.deserialize = deserialize;\n};\n\nmodule.exports = Base;\n\n//# sourceURL=webpack:///./node_modules/lowdb/adapters/Base.js?");

/***/ }),

/***/ "./node_modules/lowdb/adapters/FileSync.js":
/*!*************************************************!*\
  !*** ./node_modules/lowdb/adapters/FileSync.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar fs = __webpack_require__(/*! graceful-fs */ \"./node_modules/graceful-fs/graceful-fs.js\");\nvar Base = __webpack_require__(/*! ./Base */ \"./node_modules/lowdb/adapters/Base.js\");\n\nvar readFile = fs.readFileSync;\nvar writeFile = fs.writeFileSync;\n\n// Same code as in FileAsync, minus `await`\n\nvar FileSync = function (_Base) {\n  _inherits(FileSync, _Base);\n\n  function FileSync() {\n    _classCallCheck(this, FileSync);\n\n    return _possibleConstructorReturn(this, (FileSync.__proto__ || Object.getPrototypeOf(FileSync)).apply(this, arguments));\n  }\n\n  _createClass(FileSync, [{\n    key: 'read',\n    value: function read() {\n      // fs.exists is deprecated but not fs.existsSync\n      if (fs.existsSync(this.source)) {\n        // Read database\n        try {\n          var data = readFile(this.source, 'utf-8').trim();\n          // Handle blank file\n          return data ? this.deserialize(data) : this.defaultValue;\n        } catch (e) {\n          if (e instanceof SyntaxError) {\n            e.message = `Malformed JSON in file: ${this.source}\\n${e.message}`;\n          }\n          throw e;\n        }\n      } else {\n        // Initialize\n        writeFile(this.source, this.serialize(this.defaultValue));\n        return this.defaultValue;\n      }\n    }\n  }, {\n    key: 'write',\n    value: function write(data) {\n      return writeFile(this.source, this.serialize(data));\n    }\n  }]);\n\n  return FileSync;\n}(Base);\n\nmodule.exports = FileSync;\n\n//# sourceURL=webpack:///./node_modules/lowdb/adapters/FileSync.js?");

/***/ }),

/***/ "./node_modules/lowdb/adapters/_stringify.js":
/*!***************************************************!*\
  !*** ./node_modules/lowdb/adapters/_stringify.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Pretty stringify\nmodule.exports = function stringify(obj) {\n  return JSON.stringify(obj, null, 2);\n};\n\n//# sourceURL=webpack:///./node_modules/lowdb/adapters/_stringify.js?");

/***/ }),

/***/ "./src/main/persistence.js":
/*!*********************************!*\
  !*** ./src/main/persistence.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var low = __webpack_require__(/*! lowdb */ \"lowdb\");\nvar FileSync = __webpack_require__(/*! lowdb/adapters/FileSync */ \"./node_modules/lowdb/adapters/FileSync.js\");\nvar lodashId = __webpack_require__(/*! lodash-id */ \"lodash-id\");\n\nvar dataAdapter = new FileSync(global['userDataPath']);\nvar db = low(dataAdapter);\n\ndb._.mixin(lodashId);\n\nmodule.exports = {\n  db: db\n};\n\n//# sourceURL=webpack:///./src/main/persistence.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"constants\");\n\n//# sourceURL=webpack:///external_%22constants%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash-id":
/*!****************************!*\
  !*** external "lodash-id" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash-id\");\n\n//# sourceURL=webpack:///external_%22lodash-id%22?");

/***/ }),

/***/ "lowdb":
/*!************************!*\
  !*** external "lowdb" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lowdb\");\n\n//# sourceURL=webpack:///external_%22lowdb%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack:///external_%22stream%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });