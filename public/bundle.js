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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/firebase */ \"./src/js/firebase.js\");\n\r\n\r\nconst app = new Vue({\r\n  el: '#app',\r\n  data: {\r\n    message: 'Hello Vue!',\r\n    projects: [],\r\n    lightMode: true,\r\n    form: {\r\n      email: '',\r\n      message: ''\r\n    },\r\n    sending: false,\r\n    mailFnURL: 'https://us-central1-portfolio-faed7.cloudfunctions.net/sendMail'\r\n  },\r\n  methods: {\r\n    async sendMail() {\r\n      try {\r\n        this.sending = !this.sending;\r\n        const mesgResp = await axios.post(this.mailFnURL, {...this.form});\r\n\r\n        Object.keys(this.form).forEach(key => {\r\n          this.form[key] = '';\r\n        });\r\n        alert('Thanks for reaching out. Your message is on its way!');\r\n      } catch (e) {\r\n        alert('Something went wrong. Please try again.');\r\n      } finally {\r\n        this.sending = !this.sending;\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    _js_firebase__WEBPACK_IMPORTED_MODULE_0__[\"db\"].collection('projects').where('active', '==', true).get().then((querySnapshot) => {\r\n      querySnapshot.forEach(doc => {\r\n        this.projects.unshift(doc.data());\r\n      });\r\n    });\r\n  }\r\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/firebase.js":
/*!****************************!*\
  !*** ./src/js/firebase.js ***!
  \****************************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\nconst config = {\r\n  apiKey: \"AIzaSyCVJyObK2aCRFleRa0-xd1KtQ_BM3tUNC8\",\r\n  authDomain: 'portfolio-faed7.firebaseapp.com',\r\n  databaseURL: 'https://portfolio-faed7.firebaseio.com',\r\n  projectId: 'portfolio-faed7',\r\n  storageBucket: 'portfolio-faed7.appspot.com',\r\n  messagingSenderId: \"587600286915\"\r\n};\r\n\r\nfirebase.initializeApp(config);\r\nconst db = firebase.firestore();\n\n//# sourceURL=webpack:///./src/js/firebase.js?");

/***/ })

/******/ });