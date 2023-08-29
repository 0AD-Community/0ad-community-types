// ScriptFunction::Register<&Script_ListDirectoryFiles_GUI>(rq, "ListDirectoryFiles");
// ScriptFunction::Register<&Script_FileExists_GUI>(rq, "FileExists");
// ScriptFunction::Register<&GetFileMTime>(rq, "GetFileMTime");
// ScriptFunction::Register<&GetFileSize>(rq, "GetFileSize");
// ScriptFunction::Register<&Script_ReadFile_GUI>(rq, "ReadFile");
// ScriptFunction::Register<&Script_ReadFileLines_GUI>(rq, "ReadFileLines");
// ScriptFunction::Register<&Script_ReadJSONFile_GUI>(rq, "ReadJSONFile");
// ScriptFunction::Register<&Script_WriteJSONFile_GUI>(rq, "WriteJSONFile");
// ScriptFunction::Register<&DeleteCampaignSave>(rq, "DeleteCampaignSave");

declare namespace Engine {
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
    recurse?: boolean,
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
}
