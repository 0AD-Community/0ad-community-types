// ScriptFunction::Register<&GetDefaultPort>(rq, "GetDefaultPort");
// ScriptFunction::Register<&IsNetController>(rq, "IsNetController");
// ScriptFunction::Register<&HasNetServer>(rq, "HasNetServer");
// ScriptFunction::Register<&HasNetClient>(rq, "HasNetClient");
// ScriptFunction::Register<&StartNetworkHost>(rq, "StartNetworkHost");
// ScriptFunction::Register<&StartNetworkJoin>(rq, "StartNetworkJoin");
// ScriptFunction::Register<&StartNetworkJoinLobby>(rq, "StartNetworkJoinLobby");
// ScriptFunction::Register<&DisconnectNetworkGame>(rq, "DisconnectNetworkGame");
// ScriptFunction::Register<&GetPlayerGUID>(rq, "GetPlayerGUID");
// ScriptFunction::Register<&PollNetworkClient>(rq, "PollNetworkClient");
// ScriptFunction::Register<&SendGameSetupMessage>(rq, "SendGameSetupMessage");
// ScriptFunction::Register<&AssignNetworkPlayer>(rq, "AssignNetworkPlayer");
// ScriptFunction::Register<&KickPlayer>(rq, "KickPlayer");
// ScriptFunction::Register<&SendNetworkChat>(rq, "SendNetworkChat");
// ScriptFunction::Register<&SendNetworkReady>(rq, "SendNetworkReady");
// ScriptFunction::Register<&ClearAllPlayerReady>(rq, "ClearAllPlayerReady");
// ScriptFunction::Register<&StartNetworkGame>(rq, "StartNetworkGame");
// ScriptFunction::Register<&SetTurnLength>(rq, "SetTurnLength");

declare namespace Engine {
  /**
   * @TODO
   */
  function GetDefaultPort(): void;

  /**
   * @TODO
   */
  function IsNetController(): boolean;

  /**
   * @TODO
   */
  function HasNetServer(): void;

  /**
   * @TODO
   */
  function HasNetClient(): void;

  /**
   * @TODO
   */
  function StartNetworkHost(): void;

  /**
   * @TODO
   */
  function StartNetworkJoin(): void;

  /**
   * @TODO
   */
  function StartNetworkJoinLobby(): void;

  /**
   * @TODO
   */
  function DisconnectNetworkGame(): void;

  /**
   * @TODO
   */
  function GetPlayerGUID(): void;

  /**
   * @TODO
   */
  function PollNetworkClient(): void;

  /**
   * @TODO
   */
  function SendGameSetupMessage(): void;

  /**
   * @TODO
   */
  function AssignNetworkPlayer(): void;

  /**
   * @TODO
   */
  function KickPlayer(): void;

  /**
   * @TODO
   */
  function SendNetworkChat(): void;

  /**
   * @TODO
   */
  function SendNetworkReady(): void;

  /**
   * @TODO
   */
  function ClearAllPlayerReady(): void;

  /**
   * @TODO
   */
  function StartNetworkGame(): void;

  /**
   * @TODO
   */
  function SetTurnLength(): void;
}
