// ScriptFunction::Register<&CComponentManager::Script_RegisterComponentType, Getter>(rq, "RegisterComponentType");
// ScriptFunction::Register<&CComponentManager::Script_RegisterSystemComponentType, Getter>(rq, "RegisterSystemComponentType");
// ScriptFunction::Register<&CComponentManager::Script_ReRegisterComponentType, Getter>(rq, "ReRegisterComponentType");
// ScriptFunction::Register<&CComponentManager::Script_RegisterInterface, Getter>(rq, "RegisterInterface");
// ScriptFunction::Register<&CComponentManager::Script_RegisterMessageType, Getter>(rq, "RegisterMessageType");
// ScriptFunction::Register<&CComponentManager::Script_RegisterGlobal, Getter>(rq, "RegisterGlobal");
// ScriptFunction::Register<&CComponentManager::Script_GetEntitiesWithInterface, Getter>(rq, "GetEntitiesWithInterface");
// ScriptFunction::Register<&CComponentManager::Script_GetComponentsWithInterface, Getter>(rq, "GetComponentsWithInterface");
// ScriptFunction::Register<&CComponentManager::Script_PostMessage, Getter>(rq, "PostMessage");
// ScriptFunction::Register<&CComponentManager::Script_BroadcastMessage, Getter>(rq, "BroadcastMessage");
// ScriptFunction::Register<&CComponentManager::Script_AddEntity, Getter>(rq, "AddEntity");
// ScriptFunction::Register<&CComponentManager::Script_AddLocalEntity, Getter>(rq, "AddLocalEntity");
// ScriptFunction::Register<&CComponentManager::QueryInterface, Getter>(rq, "QueryInterface");
// ScriptFunction::Register<&CComponentManager::DestroyComponentsSoon, Getter>(rq, "DestroyEntity");
// ScriptFunction::Register<&CComponentManager::FlushDestroyedComponents, Getter>(rq, "FlushDestroyedEntities");
// ScriptFunction::Register<&CComponentManager::Script_GetTemplate, Getter>(rq, "GetTemplate");

declare namespace Engine {
  /**
   * @TODO
   */
  function RegisterComponentType(): void;

  /**
   * @TODO
   */
  function RegisterSystemComponentType(): void;

  /**
   * @TODO
   */
  function ReRegisterComponentType(): void;

  /**
   * @TODO
   */
  function RegisterInterface(): void;

  /**
   * @TODO
   */
  function RegisterMessageType(): void;

  /**
   * @TODO
   */
  function RegisterGlobal(): void;

  /**
   * @TODO
   */
  function GetEntitiesWithInterface(): void;

  /**
   * @TODO
   */
  function GetComponentsWithInterface(): void;

  /**
   * @TODO
   */
  function PostMessage(): void;

  /**
   * @TODO
   */
  function BroadcastMessage(): void;

  /**
   * @TODO
   */
  function AddEntity(): void;

  /**
   * @TODO
   */
  function AddLocalEntity(): void;

  /**
   * @TODO
   */
  function QueryInterface(): void;

  /**
   * @TODO
   */
  function DestroyEntity(): void;

  /**
   * @TODO
   */
  function FlushDestroyedEntities(): void;

  /**
   * @TODO
   */
  function GetTemplate(): void;
}
