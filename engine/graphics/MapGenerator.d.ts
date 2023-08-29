// REGISTER_MAPGEN_FUNC(GetTemplate);
// REGISTER_MAPGEN_FUNC(TemplateExists);
// REGISTER_MAPGEN_FUNC(FindTemplates);
// REGISTER_MAPGEN_FUNC(FindActorTemplates);
// REGISTER_MAPGEN_FUNC(SetProgress);
// REGISTER_MAPGEN_FUNC(GetMicroseconds);
// REGISTER_MAPGEN_FUNC(ExportMap);
// REGISTER_MAPGEN_FUNC_NAME(LoadScripts, "LoadLibrary");
// REGISTER_MAPGEN_FUNC_NAME(LoadHeightmap, "LoadHeightmapImage");
// REGISTER_MAPGEN_FUNC(LoadMapTerrain);
// m_ScriptInterface->SetGlobal("TERRAIN_TILE_SIZE", static_cast<int>(TERRAIN_TILE_SIZE));
// m_ScriptInterface->SetGlobal("MAP_BORDER_WIDTH", static_cast<int>(MAP_EDGE_TILES));

declare const TERRAIN_TILE_SIZE: number;
declare const MAP_BORDER_WIDTH: number;

declare namespace Engine {
  /**
   * @TODO
   */
  function GetTemplate(): void;

  /**
   * @TODO
   */
  function TemplateExists(): void;

  /**
   * @TODO
   */
  function FindTemplates(): void;

  /**
   * @TODO
   */
  function FindActorTemplates(): void;

  /**
   * @TODO
   */
  function SetProgress(progress: number): void;

  /**
   * @TODO
   */
  function GetMicroseconds(): void;

  /**
   * @TODO
   */
  function ExportMap(): void;

  /**
   * @TODO
   */
  function LoadLibrary(libraryName: string): boolean;

  /**
   * @TODO
   */
  function LoadHeightmapImage(): void;

  /**
   * @TODO
   */
  function LoadMapTerrain(): void;
}
