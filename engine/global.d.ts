var global: any;
var sprintf: any;
var vsprintf: any;

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
