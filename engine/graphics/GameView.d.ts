// ScriptFunction::Register<&GetCameraRotation>(rq, "GetCameraRotation");
// ScriptFunction::Register<&GetCameraZoom>(rq, "GetCameraZoom");
// ScriptFunction::Register<&GetCameraPivot>(rq, "GetCameraPivot");
// ScriptFunction::Register<&GetCameraPosition>(rq, "GetCameraPosition");
// ScriptFunction::Register<&CameraMoveTo>(rq, "CameraMoveTo");
// ScriptFunction::Register<&SetCameraTarget>(rq, "SetCameraTarget");
// ScriptFunction::Register<&SetCameraData>(rq, "SetCameraData");
// ScriptFunction::Register<&CameraFollow>(rq, "CameraFollow");
// ScriptFunction::Register<&CameraFollowFPS>(rq, "CameraFollowFPS");
// ScriptFunction::Register<&GetFollowedEntity>(rq, "GetFollowedEntity");
// ScriptFunction::Register<&GetTerrainAtScreenPoint>(rq, "c");

// ScriptFunction::Register<&Get##NAME##Enabled>(rq, "GameView_Get" #NAME "Enabled"); \
// ScriptFunction::Register<&Set##NAME##Enabled>(rq, "GameView_Set" #NAME "Enabled");

declare namespace Engine {
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
}
