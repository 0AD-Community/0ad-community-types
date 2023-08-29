// ScriptFunction::Register<&StartGetGameId>(rq, "ModIoStartGetGameId");
// ScriptFunction::Register<&ModIo::StartListMods, &ModIoGetter>(rq, "ModIoStartListMods");
// ScriptFunction::Register<&ModIo::StartDownloadMod, &ModIoGetter>(rq, "ModIoStartDownloadMod");
// ScriptFunction::Register<&ModIo::AdvanceRequest, &ModIoGetter>(rq, "ModIoAdvanceRequest");
// ScriptFunction::Register<&ModIo::CancelRequest, &ModIoGetter>(rq, "ModIoCancelRequest");
// ScriptFunction::Register<&GetMods>(rq, "ModIoGetMods");
// ScriptFunction::Register<&GetDownloadProgress>(rq, "ModIoGetDownloadProgress");

declare namespace Engine {
  /**
   * @TODO
   */
  function ModIoStartGetGameId(): void;

  /**
   * @TODO
   */
  function ModIoStartListMods(): void;

  /**
   * @TODO
   */
  function ModIoStartDownloadMod(): void;

  /**
   * @TODO
   */
  function ModIoAdvanceRequest(): void;

  /**
   * @TODO
   */
  function ModIoCancelRequest(): void;

  /**
   * @TODO
   */
  function ModIoGetMods(): void;

  /**
   * @TODO
   */
  function ModIoGetDownloadProgress(): void;
}
