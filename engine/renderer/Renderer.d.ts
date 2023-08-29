// ScriptFunction::Register<&GetRenderPath>(rq, "Renderer_GetRenderPath");
// ScriptFunction::Register<&TextureExists>(rq, "TextureExists");
// ScriptFunction::Register<&GetRenderDebugMode>(rq, "Renderer_GetRenderDebugMode");
// ScriptFunction::Register<&SetRenderDebugMode>(rq, "Renderer_SetRenderDebugMode");

// ScriptFunction::Register<&Get##NAME##Enabled>(rq, "Renderer_Get" #NAME "Enabled"); \
// ScriptFunction::Register<&Set##NAME##Enabled>(rq, "Renderer_Set" #NAME "Enabled");

declare namespace Engine {
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
}
