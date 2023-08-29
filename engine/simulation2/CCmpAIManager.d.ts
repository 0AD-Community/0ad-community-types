// m_ScriptInterface->SetGlobal("Sim", global, true);
// m_ScriptInterface->SetGlobal("SimEngine", scope, true);
// REGISTER_FUNC_NAME(PostCommand, "PostCommand");
// REGISTER_FUNC_NAME(LoadScripts, "IncludeModule");
// ScriptFunction::Register<QuitEngine>(rq, "Exit");
// REGISTER_FUNC_NAME(ComputePathScript, "ComputePath");
// REGISTER_FUNC_NAME(DumpImage, "DumpImage");
// REGISTER_FUNC_NAME(GetTemplate, "GetTemplate");

declare const Sim: any;
declare const SimEngine: any;

declare namespace Engine {
  /**
   * @TODO
   */

  function PostCommand(): void;

  /**
   * @TODO
   */
  function IncludeModule(name: string): void;

  /**
   * @TODO
   */
  function ComputePath(): void;

  /**
   * @TODO
   */
  function DumpImage(
    filename: string,
    map: any,
    width: any,
    height: any,
    threshold: any,
  ): void;
}
