/// <reference path="./IGUIObject.d.ts" />

// ScriptFunction::Register<&PushGuiPage>(rq, "PushGuiPage");
// ScriptFunction::Register<&SwitchGuiPage>(rq, "SwitchGuiPage");
// ScriptFunction::Register<&PopGuiPage>(rq, "PopGuiPage");
// ScriptFunction::Register<&SetCursor>(rq, "SetCursor");
// ScriptFunction::Register<&ResetCursor>(rq, "ResetCursor");
// ScriptFunction::Register<&TemplateExists>(rq, "TemplateExists");
// ScriptFunction::Register<&GetTemplate>(rq, "GetTemplate");

// ScriptFunction::Register<&CGUI::FindObjectByName, &ScriptInterface::ObjectFromCBData<CGUI>>(rq, "GetGUIObjectByName");
// ScriptFunction::Register<&CGUI::SetGlobalHotkey, &ScriptInterface::ObjectFromCBData<CGUI>>(rq, "SetGlobalHotkey");
// ScriptFunction::Register<&CGUI::UnsetGlobalHotkey, &ScriptInterface::ObjectFromCBData<CGUI>>(rq, "UnsetGlobalHotkey");

declare namespace Engine {
  /**
   * @TODO
   */
  function PushGuiPage(): void;

  /**
   * @TODO
   */
  function SwitchGuiPage(): void;

  /**
   * @TODO
   */
  function PopGuiPage(): void;

  /**
   * @TODO
   */
  function SetCursor(): void;

  /**
   * @TODO
   */
  function ResetCursor(): void;

  /**
   * @TODO
   */
  function TemplateExists(): void;

  /**
   * @TODO
   */
  function GetTemplate(): void;

  /**
   * @TODO
   */
  function GetGUIObjectByName(name: string): IGUIObject;

  /**
   * @TODO
   */
  function SetGlobalHotkey(): void;

  /**
   * @TODO
   */
  function UnsetGlobalHotkey(): void;
}
