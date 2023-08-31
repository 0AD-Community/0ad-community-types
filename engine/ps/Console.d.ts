declare namespace Engine {
  /**
   * Checks if the console is active or visible.
   *
   * C++: CConsole::IsActive
   *
   * @example
   * const isActive = Engine.Console_GetVisibleEnabled();
   *
   * @returns {boolean} True if the console is active, false otherwise.
   */
  function Console_GetVisibleEnabled(): boolean;

  /**
   * Sets the visibility of the console.
   *
   * C++: CConsole::SetVisible
   *
   * @example
   * Engine.Console_SetVisibleEnabled(true);
   *
   * @param {boolean} isVisible - True to make the console visible, false to hide it.
   */
  function Console_SetVisibleEnabled(isVisible: boolean): void;
}
