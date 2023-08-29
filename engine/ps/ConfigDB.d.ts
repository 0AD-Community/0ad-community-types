// ScriptFunction::Register<&HasChanges>(rq, "ConfigDB_HasChanges");
// ScriptFunction::Register<&SetChanges>(rq, "ConfigDB_SetChanges");
// ScriptFunction::Register<&GetValue>(rq, "ConfigDB_GetValue");
// ScriptFunction::Register<&CreateValue>(rq, "ConfigDB_CreateValue");
// ScriptFunction::Register<&CreateValues>(rq, "ConfigDB_CreateValues");
// ScriptFunction::Register<&RemoveValue>(rq, "ConfigDB_RemoveValue");
// ScriptFunction::Register<&RemoveValueAndSave>(rq, "ConfigDB_RemoveValueAndSave");
// ScriptFunction::Register<&SaveChanges>(rq, "ConfigDB_SaveChanges");
// ScriptFunction::Register<&SaveValue>(rq, "ConfigDB_SaveValue");
// ScriptFunction::Register<&CreateAndSaveValue>(rq, "ConfigDB_CreateAndSaveValue");
// ScriptFunction::Register<&Reload>(rq, "ConfigDB_Reload");
// ScriptFunction::Register<&PauseOnFocusLoss>(rq, "PauseOnFocusLoss");
// ScriptFunction::Register<&SetGUIScale>(rq, "SetGUIScale");

declare namespace Engine {
  /**
   * @TODO
   */
  function ConfigDB_HasChanges(namespace: string): boolean;

  /**
   * @TODO
   */
  function ConfigDB_SetChanges(namespace: string, value: boolean): boolean;

  /**
   * @TODO
   */
  function ConfigDB_GetValue(namespace: string, name: string): string;

  /**
   * @TODO
   */
  function ConfigDB_CreateValue(
    namespace: string,
    name: string,
    value: string,
  ): boolean;

  /**
   * @TODO
   */
  function ConfigDB_CreateValues(
    namespace: string,
    name: string,
    values: string[],
  ): boolean;

  /**
   * @TODO
   */
  function ConfigDB_RemoveValue(namespace: string, name: string): boolean;

  /**
   * @TODO
   */
  function ConfigDB_RemoveValueAndSave(
    namespace: string,
    name: string,
  ): boolean;

  /**
   * @TODO
   */
  function ConfigDB_SaveChanges(namespace: string): boolean;

  /**
   * @TODO
   */
  function ConfigDB_SaveValue(
    namespace: string,
    name: string,
    value: string,
  ): boolean;

  /**
   * @TODO
   */
  function ConfigDB_CreateAndSaveValue(
    namespace: string,
    name: string,
    value: string,
  ): boolean;

  /**
   * @TODO
   */
  function ConfigDB_Reload(namespace: string): boolean;

  /**
   * @TODO
   */
  function PauseOnFocusLoss(pause: boolean): void;

  /**
   * @TODO
   */
  function SetGUIScale(scale: number): void;
}
