// ScriptFunction::Register<GetEngineInfo>(rq, "GetEngineInfo");
// ScriptFunction::Register<GetAvailableMods>(rq, "GetAvailableMods");
// ScriptFunction::Register<&Mod::GetEnabledMods, ModGetter>(rq, "GetEnabledMods");
// ScriptFunction::Register<AreModsPlayCompatible>(rq, "AreModsPlayCompatible");
// ScriptFunction::Register<HasIncompatibleMods> (rq, "HasIncompatibleMods");
// ScriptFunction::Register<&Mod::GetIncompatibleMods, ModGetter>(rq, "GetIncompatibleMods");
// ScriptFunction::Register<&SetModsAndRestartEngine>(rq, "SetModsAndRestartEngine");

declare namespace Engine {
  /**
   * @TODO
   */
  function GetEngineInfo(): void;

  /**
   * @TODO
   */
  function GetAvailableMods(): void;

  /**
   * @TODO
   */
  function GetEnabledMods(): void;

  /**
   * @TODO
   */
  function AreModsPlayCompatible(): void;

  /**
   * @TODO
   */
  function HasIncompatibleMods(): void;

  /**
   * @TODO
   */
  function GetIncompatibleMods(): void;

  /**
   * @TODO
   */
  function SetModsAndRestartEngine(): void;
}
