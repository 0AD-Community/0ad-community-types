// ScriptFunction::Register<&IsUserReportEnabled>(rq, "IsUserReportEnabled");
// ScriptFunction::Register<&SetUserReportEnabled>(rq, "SetUserReportEnabled");
// ScriptFunction::Register<&GetUserReportStatus>(rq, "GetUserReportStatus");
// ScriptFunction::Register<&GetUserReportLogPath>(rq, "GetUserReportLogPath");
// ScriptFunction::Register<&GetUserReportConfigPath>(rq, "GetUserReportConfigPath");

declare namespace Engine {
  /**
   * @TODO
   */
  function IsUserReportEnabled(): boolean;

  /**
   * @TODO
   */
  function SetUserReportEnabled(): void;

  /**
   * @TODO
   */
  function GetUserReportStatus(): void;

  /**
   * @TODO
   */
  function GetUserReportLogPath(): void;

  /**
   * @TODO
   */
  function GetUserReportConfigPath(): void;
}
