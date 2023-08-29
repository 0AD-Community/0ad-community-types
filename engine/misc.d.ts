// REGISTER_FUNC_NAME(PostCommand, "PostCommand");
// REGISTER_FUNC_NAME(LoadScripts, "IncludeModule");
// ScriptFunction::Register<QuitEngine>(rq, "Exit");
// REGISTER_FUNC_NAME(ComputePathScript, "ComputePath");
// REGISTER_FUNC_NAME(DumpImage, "DumpImage");
// REGISTER_FUNC_NAME(GetTemplate, "GetTemplate");

declare namespace Engine {
  /**
   * @TODO
   */
  function RegisterGlobal(variable: string, value: any): void;

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

  /**
   * @TODO
   */
  function GetTemplate(templateName: string): string;
}
