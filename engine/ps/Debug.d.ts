// ScriptFunction::Register<&GetMicroseconds>(rq, "GetMicroseconds");
// ScriptFunction::Register<&Crash>(rq, "Crash");
// ScriptFunction::Register<&DebugWarn>(rq, "DebugWarn");
// ScriptFunction::Register<&DisplayErrorDialog>(rq, "DisplayErrorDialog");
// ScriptFunction::Register<&GetBuildDate>(rq, "GetBuildDate");
// ScriptFunction::Register<&GetBuildTimestamp>(rq, "GetBuildTimestamp");
// ScriptFunction::Register<&GetBuildRevision>(rq, "GetBuildRevision");

declare namespace Engine {
  /**
   * @TODO
   */
  function GetMicroseconds(): number;

  /**
   * @TODO
   */
  function Crash(): void;

  /**
   * @TODO
   */
  function DebugWarn(): void;

  /**
   * @TODO
   */
  function DisplayErrorDialog(): void;

  /**
   * @TODO
   */
  function GetBuildDate(): void;

  /**
   * @TODO
   */
  function GetBuildTimestamp(): void;

  /**
   * @TODO
   */
  function GetBuildRevision(): void;
}
