// ScriptFunction::Register<&IsGameStarted>(rq, "IsGameStarted");
// ScriptFunction::Register<&StartGame>(rq, "StartGame");
// ScriptFunction::Register<&Script_EndGame>(rq, "EndGame");
// ScriptFunction::Register<&GetPlayerID>(rq, "GetPlayerID");
// ScriptFunction::Register<&SetPlayerID>(rq, "SetPlayerID");
// ScriptFunction::Register<&SetViewedPlayer>(rq, "SetViewedPlayer");
// ScriptFunction::Register<&GetSimRate>(rq, "GetSimRate");
// ScriptFunction::Register<&SetSimRate>(rq, "SetSimRate");
// ScriptFunction::Register<&GetPendingTurns>(rq, "GetPendingTurns");
// ScriptFunction::Register<&IsPaused>(rq, "IsPaused");
// ScriptFunction::Register<&SetPaused>(rq, "SetPaused");
// ScriptFunction::Register<&IsVisualReplay>(rq, "IsVisualReplay");
// ScriptFunction::Register<&GetCurrentReplayDirectory>(rq, "GetCurrentReplayDirectory");
// ScriptFunction::Register<&EnableTimeWarpRecording>(rq, "EnableTimeWarpRecording");
// ScriptFunction::Register<&RewindTimeWarp>(rq, "RewindTimeWarp");
// ScriptFunction::Register<&DumpTerrainMipmap>(rq, "DumpTerrainMipmap");

declare namespace Engine {
  /**
   * @TODO
   */
  function IsGameStarted(): boolean;

  /**
   * @TODO
   */
  function StartGame(): void;

  /**
   * @TODO
   */
  function EndGame(): void;

  /**
   * @TODO
   */
  function GetPlayerID(): void;

  /**
   * @TODO
   */
  function SetPlayerID(): void;

  /**
   * @TODO
   */
  function SetViewedPlayer(): void;

  /**
   * @TODO
   */
  function GetSimRate(): void;

  /**
   * @TODO
   */
  function SetSimRate(): void;

  /**
   * @TODO
   */
  function GetPendingTurns(): void;

  /**
   * @TODO
   */
  function IsPaused(): boolean;

  /**
   * @TODO
   */
  function SetPaused(): void;

  /**
   * @TODO
   */
  function IsVisualReplay(): boolean;

  /**
   * @TODO
   */
  function GetCurrentReplayDirectory(): void;

  /**
   * @TODO
   */
  function EnableTimeWarpRecording(): void;

  /**
   * @TODO
   */
  function RewindTimeWarp(): void;

  /**
   * @TODO
   */
  function DumpTerrainMipmap(): void;
}
