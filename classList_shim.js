function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

//(function () {
//
//    if (typeof window.Element === "undefined" || "classList" in document.documentElement)
//        return;
//
//    var prototype = Array.prototype,
//        push = prototype.push,
//        splice = prototype.splice,
//        join = prototype.join;
//
//    function DOMTokenList(el) {
//        this.el = el;
//        // The className needs to be trimmed and split on whitespace
//        // to retrieve a list of classes.
//        var classes = el.className.replace(/^\s+|\s+$/g, '').split(/\s+/);
//        for (var i = 0; i < classes.length; i++) {
//            push.call(this, classes[i]);
//        }
//    }
//
//    DOMTokenList.prototype = {
//        add: function (token) {
//            if (this.contains(token))
//                return;
//            push.call(this, token);
//            this.el.className = this.toString();
//        },
//        contains: function (token) {
//            return this.el.className.indexOf(token) != -1;
//        },
//        item: function (index) {
//            return this[index] || null;
//        },
//        remove: function (token) {
//            if (!this.contains(token))
//                return;
//            for (var i = 0; i < this.length; i++) {
//                if (this[i] == token)
//                    break;
//            }
//            splice.call(this, i, 1);
//            this.el.className = this.toString();
//        },
//        toString: function () {
//            return join.call(this, ' ');
//        },
//        toggle: function (token) {
//            if (!this.contains(token)) {
//                this.add(token);
//            } else {
//                this.remove(token);
//            }
//
//            return this.contains(token);
//        }
//    };
//
//    window.DOMTokenList = DOMTokenList;
//
//    function defineElementGetter(obj, prop, getter) {
//        if (Object.defineProperty) {
//            Object.defineProperty(obj, prop, {
//                get: getter
//            });
//        } else {
//            obj.__defineGetter__(prop, getter);
//        }
//    }
//
//    defineElementGetter(Element.prototype, 'classList', function () {
//        return new DOMTokenList(this);
//    });
//})();