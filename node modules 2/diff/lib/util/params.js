/*istanbul ignore start*/'use strict';

exports.__esModule = true;
exports. /*istanbul ignore end*/generateOptions = generateOptions;
function generateOptions(options, defaults) {
  if (typeof options === 'function') {
    defaults.callback = options;
  } else if (options) {
    for (var name in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(name)) {
        defaults[name] = options[name];
      }
    }
  }
  return defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCLGUsR0FBQSxlO0FBQVQsU0FBUyxlQUFULENBQXlCLE9BQXpCLEVBQWtDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBTyxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLGFBQVMsUUFBVCxHQUFvQixPQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJLE9BQUosRUFBYTtBQUNsQixTQUFLLElBQUksSUFBVCxJQUFpQixPQUFqQixFQUEwQjs7QUFFeEIsVUFBSSxRQUFRLGNBQVIsQ0FBdUIsSUFBdkIsQ0FBSixFQUFrQztBQUNoQyxpQkFBUyxJQUFULElBQWlCLFFBQVEsSUFBUixDQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU8sUUFBUDtBQUNEIiwiZmlsZSI6InBhcmFtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZhdWx0cztcbn1cbiJdfQ==
