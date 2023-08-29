// JS_DefineProperty(m_cx, m_glob, "global", m_glob, JSPROP_ENUMERATE | JSPROP_READONLY | JSPROP_PERMANENT);
// JS_DefineFunction(m_cx, m_glob, "print", ::print,        0, JSPROP_ENUMERATE | JSPROP_READONLY | JSPROP_PERMANENT);
// JS_DefineFunction(m_cx, m_glob, "log",   ::logmsg,       1, JSPROP_ENUMERATE | JSPROP_READONLY | JSPROP_PERMANENT);
// JS_DefineFunction(m_cx, m_glob, "warn",  ::warn,         1, JSPROP_ENUMERATE | JSPROP_READONLY | JSPROP_PERMANENT);
// JS_DefineFunction(m_cx, m_glob, "error", ::error,        1, JSPROP_ENUMERATE | JSPROP_READONLY | JSPROP_PERMANENT);
// ScriptFunction::Register<deepcopy>(m_cx, m_glob, "clone");
// ScriptFunction::Register<deepfreeze>(m_cx, m_glob, "deepfreeze");
// ScriptFunction::Register<&ProfileStart>(m_cx, m_nativeScope, "ProfileStart");
// ScriptFunction::Register<&ProfileStop>(m_cx, m_nativeScope, "ProfileStop");
// ScriptFunction::Register<&ProfileAttribute>(m_cx, m_nativeScope, "ProfileAttribute");

declare var global: any;
declare var sprintf: any;
declare var vsprintf: any;

/**
 * Prints to stdout if in debug mode
 */
declare function print(...text: string[]): void;

/**
 * Prints to internal console and to mainlog.html
 */
declare function log(text: string): void;

/**
 * Prints to internal console, mainlog.html and interestinglog.html
 * Prefixed with "WARNING:"
 */
declare function warn(text: string): void;

/**
 * Prints to internal console, mainlog.html and interestinglog.html
 * Prefixed with "ERROR:"" and color red
 */
declare function error(text: string): void;

/**
 * Deep copy (recursive copy)
 */
declare function clone(data: any): any | undefined;

/**
 * Deep freeez object (recursive freezed)
 * @returns deep freezed object
 */
declare function deepfreeze(object: object): object | undefined;

declare namespace Engine {
  /**
   * Flags the start of a profiling with the identifier "name"
   */
  function ProfileStart(name: string): void;

  /**
   * Ends the more recent ProfileStart flag started
   */
  function ProfileStop(): void;

  /**
   * Flag to call in between ProfileEnd and ProfileEnd calls.
   * Can be called zero or more times.
   */
  function ProfileAttribute(name: string): void;
}
