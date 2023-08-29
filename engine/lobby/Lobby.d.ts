// ScriptFunction::Register<&HasXmppClient>(rq, "HasXmppClient");
// ScriptFunction::Register<&SetRankedGame>(rq, "SetRankedGame");
// ScriptFunction::Register<&StartXmppClient>(rq, "StartXmppClient");
// ScriptFunction::Register<&StartRegisterXmppClient>(rq, "StartRegisterXmppClient");
// ScriptFunction::Register<&StopXmppClient>(rq, "StopXmppClient");
// REGISTER_XMPP(connect, "ConnectXmppClient");
// REGISTER_XMPP(disconnect, "DisconnectXmppClient");
// REGISTER_XMPP(isConnected, "IsXmppClientConnected");
// REGISTER_XMPP(SendIqGetBoardList, "SendGetBoardList");
// REGISTER_XMPP(SendIqGetProfile, "SendGetProfile");
// REGISTER_XMPP(SendIqGameReport, "SendGameReport");
// REGISTER_XMPP(SendIqUnregisterGame, "SendUnregisterGame");
// REGISTER_XMPP(SendIqChangeStateGame, "SendChangeStateGame");
// REGISTER_XMPP(GUIGetPlayerList, "GetPlayerList");
// REGISTER_XMPP(GUIGetGameList, "GetGameList");
// REGISTER_XMPP(GUIGetBoardList, "GetBoardList");
// REGISTER_XMPP(GUIGetProfile, "GetProfile");
// REGISTER_XMPP(GuiPollHistoricMessages, "LobbyGuiPollHistoricMessages");
// REGISTER_XMPP(GuiPollHasPlayerListUpdate, "LobbyGuiPollHasPlayerListUpdate");
// REGISTER_XMPP(SendMUCMessage, "LobbySendMessage");
// REGISTER_XMPP(SetPresence, "LobbySetPlayerPresence");
// REGISTER_XMPP(SetNick, "LobbySetNick");
// REGISTER_XMPP(GetNick, "LobbyGetNick");
// REGISTER_XMPP(GetJID, "LobbyGetJID");
// REGISTER_XMPP(kick, "LobbyKick");
// REGISTER_XMPP(ban, "LobbyBan");
// REGISTER_XMPP(GetPresence, "LobbyGetPlayerPresence");
// REGISTER_XMPP(GetRole, "LobbyGetPlayerRole");
// REGISTER_XMPP(GetRating, "LobbyGetPlayerRating");
// REGISTER_XMPP(GetSubject, "LobbyGetRoomSubject");
// ScriptFunction::Register<&EncryptPassword>(rq, "EncryptPassword");

declare namespace Engine {
  /**
   * @TODO
   */
  function HasXmppClient(): void;

  /**
   * @TODO
   */
  function SetRankedGame(isRanked: boolean): void;

  /**
   * @Description
   */
  function StartXmppClient(): void;

  /**
   * @TODO
   */
  function StartRegisterXmppClient(): void;

  /**
   * @TODO
   */
  function StopXmppClient(): void;

  /**
   * @TODO
   */
  function ConnectXmppClient(): void;

  /**
   * @TODO
   */
  function DisconnectXmppClient(): void;

  /**
   * @TODO
   */
  function IsXmppClientConnected(): boolean;

  /**
   * @TODO
   */
  function SendGetBoardList(): void;

  /**
   * @TODO
   */
  function SendGetProfile(): void;

  /**
   * @TODO
   */
  function SendGameReport(): void;

  /**
   * @TODO
   */
  function SendRegisterGame(): void;

  /**
   * @TODO
   */
  function SendUnregisterGame(): void;

  /**
   * @TODO
   */
  function SendChangeStateGame(): void;

  /**
   * @TODO
   */
  function GetPlayerList(): void;

  /**
   * @TODO
   */
  function GetGameList(): void;

  /**
   * @TODO
   */
  function GetBoardList(): void;

  /**
   * @TODO
   */
  function GetProfile(): void;

  /**
   * @TODO
   */
  function LobbyGuiPollNewMessages(): void;

  /**
   * @TODO
   */
  function LobbyGuiPollHistoricMessages(): void;

  /**
   * @TODO
   */
  function LobbyGuiPollHasPlayerListUpdate(): void;

  /**
   * @TODO
   */
  function LobbySendMessage(): void;

  /**
   * @TODO
   */
  function LobbySetPlayerPresence(): void;

  /**
   * @TODO
   */
  function LobbySetNick(): void;

  /**
   * @TODO
   */
  function LobbyGetNick(): void;

  /**
   * @TODO
   */
  function LobbyGetJID(): void;

  /**
   * @TODO
   */
  function LobbyKick(): void;

  /**
   * @TODO
   */
  function LobbyBan(): void;

  /**
   * @TODO
   */
  function LobbyGetPlayerPresence(): void;

  /**
   * @TODO
   */
  function LobbyGetPlayerRole(): void;

  /**
   * @TODO
   */
  function LobbyGetPlayerRating(): void;

  /**
   * @TODO
   */
  function LobbyGetRoomSubject(): void;

  /**
   * @TODO
   */
  function EncryptPassword(): void;
}
