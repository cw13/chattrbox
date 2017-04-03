(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

exports.default = {
  init: init
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWixxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDRCxDOztJQUdHLFc7QUFDSiw2QkFJRztBQUFBLFFBSFEsQ0FHUixRQUhELE9BR0M7QUFBQSx5QkFGRCxJQUVDO0FBQUEsUUFGSyxDQUVMLDZCQUZPLFFBRVA7QUFBQSw4QkFERCxTQUNDO0FBQUEsUUFEVSxDQUNWLGtDQURhLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNaOztBQUFBOztBQUNELFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7Ozs7Z0NBQ1c7QUFDVixhQUFPO0FBQ0wsY0FBTSxLQUFLLElBRE47QUFFTCxpQkFBUyxLQUFLLE9BRlQ7QUFHTCxtQkFBVyxLQUFLO0FBSFgsT0FBUDtBQUtEOzs7Ozs7a0JBR1ksTzs7Ozs7QUMzQmY7Ozs7OztBQUNBOzs7Ozs7OztBQ0RBLElBQUksZUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCLFdBQVMsSUFBSSxTQUFKLENBQWMsR0FBZCxDQUFUO0FBQ0EsVUFBUSxHQUFSLENBQVksZUFBWjtBQUNEOztrQkFFYztBQUNiO0FBRGEsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50JztcblxuY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG4gIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWVzc2FnZTogbSxcbiAgICB1c2VyOiB1PSdiYXRtYW4nLFxuICAgIHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgIHRoaXMudXNlciA9IHU7XG4gICAgdGhpcy50aW1lc3RhbXAgPSB0O1xuICB9XG4gIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDtcbiIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcbm5ldyBDaGF0QXBwKCk7XG4iLCJsZXQgc29ja2V0O1xuXG5mdW5jdGlvbiBpbml0KHVybCkge1xuICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCxcbn1cbiJdfQ==
