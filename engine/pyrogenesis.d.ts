/// <reference path="./IGUIObject.d.ts" />

declare namespace Engine {
    /**
     * Flags the start of a profiling with the identifier "name"
     */
    function ProfileStart(name: string): void;

    /**
     * Ends the more recent ProfileStart flag started
     */
    function ProfileStop(): void;

    /**
     * Flag to call in between ProfileEnd and ProfileEnd calls.
     * Can be called zero or more times.
     */
    function ProfileAttribute(name: string): void;

    /**
     * Return an array of pathname strings, one for each matching entry
     * in the specified directory.
     * @param path - Path base directory. Empty string means root dir.
     * @param filterStr - Default: "" - String match; see vfs_next_dirent for syntax
     * @param recurse - Default: false - Make search recursive
     */
    function ListDirectoryFiles(
        path: string,
        filterStr?: string,
        recurse?: boolean
    ): string[];

    /**
     * @returns true if the file exits
     */
    function FileExists(filePath: string): boolean;

    /**
     * @returns JSON as an javascirpt object.
     */
    function ReadJSONFile(filePath: string): object | null;

    /**
     * @TODO
     */
    function ConfigDB_HasChanges(namespace: string): boolean;

    /**
     * @TODO
     */
    function ConfigDB_SetChanges(namespace: string, value: boolean): boolean;

    /**
     * @TODO
     */
    function ConfigDB_GetValue(namespace: string, name: string): string;

    /**
     * @TODO
     */
    function ConfigDB_CreateValue(
        namespace: string,
        name: string,
        value: string
    ): boolean;

    /**
     * @TODO
     */
    function ConfigDB_CreateValues(
        namespace: string,
        name: string,
        values: string[]
    ): boolean;

    /**
     * @TODO
     */
    function ConfigDB_RemoveValue(): void;

    /**
     * @TODO
     */
    function ConfigDB_RemoveValueAndSave(): void;

    /**
     * @TODO
     */
    function ConfigDB_SaveChanges(): void;

    /**
     * @TODO
     */
    function ConfigDB_SaveValue(): void;

    /**
     * @TODO
     */
    function ConfigDB_CreateAndSaveValue(): void;

    /**
     * @TODO
     */
    function ConfigDB_Reload(): void;

    /**
     * @TODO
     */
    function PauseOnFocusLoss(): void;

    /**
     * @TODO
     */
    function SetGUIScale(): void;

    /**
     * @TODO
     */
    function Console_GetVisibleEnabled(): void;

    /**
     * @TODO
     */
    function Console_SetVisibleEnabled(): void;

    /**
     * @TODO
     */
    function GetMicroseconds(): void;

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

    /**
     * @TODO
     */
    function GameView_GetCullingEnabled(): void;

    /**
     * @TODO
     */
    function GameView_SetCullingEnabled(): void;

    /**
     * @TODO
     */
    function GameView_GetLockCullCameraEnabled(): void;

    /**
     * @TODO
     */
    function GameView_SetLockCullCameraEnabled(): void;

    /**
     * @TODO
     */
    function GameView_GetConstrainCameraEnabled(): void;

    /**
     * @TODO
     */
    function GameView_SetConstrainCameraEnabled(): void;

    /**
     * @TODO
     */
    function GetCameraRotation(): void;

    /**
     * @TODO
     */
    function GetCameraZoom(): void;

    /**
     * @TODO
     */
    function GetCameraPivot(): void;

    /**
     * @TODO
     */
    function GetCameraPosition(): void;

    /**
     * @TODO
     */
    function CameraMoveTo(): void;

    /**
     * @TODO
     */
    function SetCameraTarget(): void;

    /**
     * @TODO
     */
    function SetCameraData(): void;

    /**
     * @TODO
     */
    function CameraFollow(): void;

    /**
     * @TODO
     */
    function CameraFollowFPS(): void;

    /**
     * @TODO
     */
    function GetFollowedEntity(): void;

    /**
     * @TODO
     */
    function GetTerrainAtScreenPoint(): void;

    /**
     * @TODO
     */
    function HotkeyIsPressed(): void;

    /**
     * @TODO
     */
    function GetHotkeyMap(): void;

    /**
     * @TODO
     */
    function GetScancodeKeyNames(): void;

    /**
     * @TODO
     */
    function ReloadHotkeys(): void;

    /**
     * @TODO
     */
    function GetConflicts(): void;

    /**
     * @TODO
     */
    function Translate(): void;

    /**
     * @TODO
     */
    function TranslateWithContext(): void;

    /**
     * @TODO
     */
    function TranslatePlural(): void;

    /**
     * @TODO
     */
    function TranslatePluralWithContext(): void;

    /**
     * @TODO
     */
    function TranslateLines(): void;

    /**
     * @TODO
     */
    function TranslateArray(): void;

    /**
     * @TODO
     */
    function FormatMillisecondsIntoDateStringLocal(): void;

    /**
     * @TODO
     */
    function FormatMillisecondsIntoDateStringGMT(): void;

    /**
     * @TODO
     */
    function FormatDecimalNumberIntoString(): void;

    /**
     * @TODO
     */
    function GetSupportedLocaleBaseNames(): void;

    /**
     * @TODO
     */
    function GetSupportedLocaleDisplayNames(): void;

    /**
     * @TODO
     */
    function GetCurrentLocale(): void;

    /**
     * @TODO
     */
    function GetAllLocales(): void;

    /**
     * @TODO
     */
    function GetDictionaryLocale(): void;

    /**
     * @TODO
     */
    function GetDictionariesForLocale(): void;

    /**
     * @TODO
     */
    function UseLongStrings(): void;

    /**
     * @TODO
     */
    function GetLocaleLanguage(): void;

    /**
     * @TODO
     */
    function GetLocaleBaseName(): void;

    /**
     * @TODO
     */
    function GetLocaleCountry(): void;

    /**
     * @TODO
     */
    function GetLocaleScript(): void;

    /**
     * @TODO
     */
    function GetFallbackToAvailableDictLocale(): void;

    /**
     * @TODO
     */
    function ValidateLocale(): void;

    /**
     * @TODO
     */
    function SaveLocale(): void;

    /**
     * @TODO
     */
    function ReevaluateCurrentLocaleAndReload(): void;

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

    /**
     * @TODO
     */
    function Exit(): void;

    /**
     * @TODO
     */
    function RestartInAtlas(): void;

    /**
     * @TODO
     */
    function AtlasIsAvailable(): void;

    /**
     * @TODO
     */
    function IsAtlasRunning(): boolean;

    /**
     * @TODO
     */
    function OpenURL(): void;

    /**
     * @TODO
     */
    function GetSystemUsername(): void;

    /**
     * @TODO
     */
    function GetMatchID(): void;

    /**
     * @TODO
     */
    function LoadMapSettings(): void;

    /**
     * @TODO
     */
    function GetFPS(): void;

    /**
     * @TODO
     */
    function GetTextSize(): void;

    /**
     * @TODO
     */
    function GetTextWidth(): void;

    /**
     * @TODO
     */
    function CalculateMD5(): void;

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

    /**
     * @TODO
     */
    function Renderer_GetRenderPath(): void;

    /**
     * @TODO
     */
    function TextureExists(): void;

    /**
     * @TODO
     */
    function Renderer_GetRenderDebugMode(): void;

    /**
     * @TODO
     */
    function Renderer_SetRenderDebugMode(): void;

    /**
     * @TODO
     */
    function Renderer_GetDisplayFrustumEnabled(): void;

    /**
     * @TODO
     */
    function Renderer_SetDisplayFrustumEnabled(): void;

    /**
     * @TODO
     */
    function Renderer_GetDisplayShadowsFrustumEnabled(): void;

    /**
     * @TODO
     */
    function Renderer_SetDisplayShadowsFrustumEnabled(): void;

    /**
     * @TODO
     */
    function GetSavedGames(): void;

    /**
     * @TODO
     */
    function DeleteSavedGame(): void;

    /**
     * @TODO
     */
    function SaveGame(): void;

    /**
     * @TODO
     */
    function SaveGamePrefix(): void;

    /**
     * @TODO
     */
    function QuickSave(): void;

    /**
     * @TODO
     */
    function QuickLoad(): void;

    /**
     * @TODO
     */
    function ActivateRejoinTest(): void;

    /**
     * @TODO
     */
    function StartSavedGame(): void;

    /**
     * @TODO
     */
    function GuiInterfaceCall(): void;

    /**
     * @TODO
     */
    function PostNetworkCommand(): void;

    /**
     * @TODO
     */
    function DumpSimState(): void;

    /**
     * @TODO
     */
    function GetAIs(): void;

    /**
     * @TODO
     */
    function PickEntityAtPoint(): void;

    /**
     * @TODO
     */
    function PickPlayerEntitiesInRect(): void;

    /**
     * @TODO
     */
    function PickPlayerEntitiesOnScreen(): void;

    /**
     * @TODO
     */
    function PickNonGaiaEntitiesOnScreen(): void;

    /**
     * @TODO
     */
    function GetEntitiesWithStaticObstructionOnScreen(): void;

    /**
     * @TODO
     */
    function GetEdgesOfStaticObstructionsOnScreenNearTo(): void;

    /**
     * @TODO
     */
    function PickSimilarPlayerEntities(): void;

    /**
     * @TODO
     */
    function SetBoundingBoxDebugOverlay(): void;

    /**
     * @TODO
     */
    function StartMusic(): void;

    /**
     * @TODO
     */
    function StopMusic(): void;

    /**
     * @TODO
     */
    function ClearPlaylist(): void;

    /**
     * @TODO
     */
    function AddPlaylistItem(): void;

    /**
     * @TODO
     */
    function StartPlaylist(): void;

    /**
     * @TODO
     */
    function PlayMusic(): void;

    /**
     * @TODO
     */
    function PlayUISound(): void;

    /**
     * @TODO
     */
    function PlayAmbientSound(): void;

    /**
     * @TODO
     */
    function MusicPlaying(): void;

    /**
     * @TODO
     */
    function SetMasterGain(): void;

    /**
     * @TODO
     */
    function SetMusicGain(): void;

    /**
     * @TODO
     */
    function SetAmbientGain(): void;

    /**
     * @TODO
     */
    function SetActionGain(): void;

    /**
     * @TODO
     */
    function SetUIGain(): void;

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

    /**
     * @TODO
     */
    function GetFileMTime(): void;

    /**
     * @TODO
     */
    function GetFileSize(): void;

    /**
     * @TODO
     */
    function ReadFile(): void;

    /**
     * @TODO
     */
    function ReadFileLines(): void;

    /**
     * @TODO
     */
    function WriteJSONFile(): void;

    /**
     * @TODO
     */
    function DeleteCampaignSave(): void;

    /**
     * @TODO
     */
    function GetReplays(): void;

    /**
     * @TODO
     */
    function DeleteReplay(): void;

    /**
     * @TODO
     */
    function StartVisualReplay(): void;

    /**
     * @TODO
     */
    function GetReplayAttributes(): void;

    /**
     * @TODO
     */
    function GetReplayMetadata(): void;

    /**
     * @TODO
     */
    function HasReplayMetadata(): void;

    /**
     * @TODO
     */
    function AddReplayToCache(): void;

    /**
     * @TODO
     */
    function GetReplayDirectoryName(): void;
}
