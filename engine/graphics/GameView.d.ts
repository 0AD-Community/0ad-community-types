declare namespace Engine {
  /**
   * Gets the rotation of the camera.
   * C++: JSI_GameView::GetCameraRotation
   * @returns {Array} An array [pitch, yaw] describing the rotation of the camera.
   */
  function GetCameraRotation(): [number, number];

  /**
   * Gets the zoom level of the camera.
   * C++: JSI_GameView::GetCameraZoom
   * @returns {number} The zoom level of the camera.
   */
  function GetCameraZoom(): number;

  /**
   * Gets the pivot point of the camera.
   * C++: JSI_GameView::GetCameraPivot
   * @returns {Object} An object {x, y, z} representing the pivot point of the camera.
   */
  function GetCameraPivot(): { x: number; y: number; z: number };

  /**
   * Gets the current position of the camera.
   * C++: JSI_GameView::GetCameraPosition
   * @returns {Object} An object {x, y, z} representing the position of the camera.
   */
  function GetCameraPosition(): { x: number; y: number; z: number };

  /**
   * Moves the camera to the specified coordinates.
   * C++: JSI_GameView::CameraMoveTo
   * @param {number} x The x-coordinate.
   * @param {number} z The z-coordinate.
   */
  function CameraMoveTo(x: number, z: number): void;

  /**
   * Sets the camera target.
   * C++: JSI_GameView::SetCameraTarget
   * @param {number} x The x-coordinate.
   * @param {number} y The y-coordinate.
   * @param {number} z The z-coordinate.
   */
  function SetCameraTarget(x: number, y: number, z: number): void;

  /**
   * Sets the camera's position, rotation, and zoom.
   * C++: JSI_GameView::SetCameraData
   * @param {number} posX The x-coordinate for the camera's position.
   * @param {number} posY The y-coordinate for the camera's position.
   * @param {number} posZ The z-coordinate for the camera's position.
   * @param {number} rotX The rotation around the x-axis.
   * @param {number} rotY The rotation around the y-axis.
   * @param {number} zoom The zoom level.
   */
  function SetCameraData(
    posX: number,
    posY: number,
    posZ: number,
    rotX: number,
    rotY: number,
    zoom: number,
  ): void;

  /**
   * Start / stop camera following mode.
   * C++: JSI_GameView::CameraFollow
   * @param {number} entityid Entity id to follow. If zero, stop following mode.
   */
  function CameraFollow(entityid: number): void;

  /**
   * Start / stop first-person camera following mode.
   * C++: JSI_GameView::CameraFollowFPS
   * @param {number} entityid Entity id to follow in first-person. If zero, stop following mode.
   */
  function CameraFollowFPS(entityid: number): void;

  /**
   * Gets the ID of the entity currently being followed.
   * C++: JSI_GameView::GetFollowedEntity
   * @returns {number} The ID of the entity currently being followed.
   */
  function GetFollowedEntity(): number;

  /**
   * Gets the terrain coordinates at a given screen point.
   * C++: JSI_GameView::GetTerrainAtScreenPoint
   * @param {number} x The x-coordinate of the screen point.
   * @param {number} y The y-coordinate of the screen point.
   * @returns {Object} An object {x, y, z} representing the terrain coordinates.
   */
  function GetTerrainAtScreenPoint(
    x: number,
    y: number,
  ): { x: number; y: number; z: number };

  /**
   * Checks if culling is enabled.
   * C++: JSI_GameView::GameView_GetCullingEnabled
   * @returns {boolean} True if culling is enabled, otherwise false.
   */
  function GameView_GetCullingEnabled(): boolean;

  /**
   * Sets the culling enabled state.
   * C++: JSI_GameView::GameView_SetCullingEnabled
   * @param {boolean} checked The state to set.
   */
  function GameView_SetCullingEnabled(checked: boolean): void;

  /**
   * Checks if lock cull camera is enabled.
   * C++: JSI_GameView::GameView_GetLockCullCameraEnabled
   * @returns {boolean} True if lock cull camera is enabled, otherwise false.
   */
  function GameView_GetLockCullCameraEnabled(): boolean;

  /**
   * Sets the lock cull camera enabled state.
   * C++: JSI_GameView::GameView_SetLockCullCameraEnabled
   * @param {boolean} checked The state to set.
   */
  function GameView_SetLockCullCameraEnabled(checked: boolean): void;

  /**
   * Checks if constrain camera is enabled.
   * C++: JSI_GameView::GameView_GetConstrainCameraEnabled
   * @returns {boolean} True if constrain camera is enabled, otherwise false.
   */
  function GameView_GetConstrainCameraEnabled(): boolean;

  /**
   * Sets the constrain camera enabled state.
   * C++: JSI_GameView::GameView_SetConstrainCameraEnabled
   * @param {boolean} checked The state to set.
   */
  function GameView_SetConstrainCameraEnabled(checked: boolean): void;
}
