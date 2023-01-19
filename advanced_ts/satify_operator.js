var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_name_accessor_storage;
var Person = /** @class */ (function () {
    function Person(name) {
        _Person_name_accessor_storage.set(this, void 0);
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return __classPrivateFieldGet(this, _Person_name_accessor_storage, "f"); },
        set: function (value) { __classPrivateFieldSet(this, _Person_name_accessor_storage, value, "f"); },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
_Person_name_accessor_storage = new WeakMap();
