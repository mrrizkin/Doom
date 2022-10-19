const Doom = {
  createElement: function(tag, prop = {}) {
    let $__el = document.createElement(tag);

    if(prop.attributes) {
      for(let [key, value] of Object.entries(prop.attributes)) {
        if(typeof value === 'boolean') {
          value && $__el.setAttribute(key, value)
          continue
        }
        $__el.setAttribute(key, value);
      }
    }

    if(prop.events) {
      for(let [event, callback] of Object.entries(prop.events)) {
        $__el.addEventListener(event, callback);
      }
    }

    for(let child in prop.children) {
      $__el.appendChild(prop.children[child]);
    }

    return $__el;
  }
}
