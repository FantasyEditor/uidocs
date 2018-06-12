# 游戏接口用法

在 lua 代码中调用 **game.接口名(参数1, 参数2, ...)**, 如
```
game.CastSpell(1, true)
```

---

### GetGameTable

**game.GetGameTable(table_name)**

获取游戏中的表数据, 返回值是一个 table 类型的数据结构，用法：
```
local clien_spell_table = game.GetGameTable("ClientSpell")
```

#### _参数列表_

- `table_name [string]` 表名

#### _返回值_

- `table_data [table]` 对应的表数据

---

### CastSpell

**game.CastSpell(spell_slot, manual)**

请求释放技能（或使用物品)。

技能的槽位 0 ~ 99
物品的槽位 100 ~ 199
饰品的槽位 200 ~ 299
隐藏技能的槽位 300 ~ 

#### _参数列表_

- `spell_slot [int]` 技能或物品的槽位
- `manual [bool]` 是否为手动释放技能，如果为 false ，则为智能施法

---

### CastSpellMobile

**game.CastSpellMobile(spell_slot, world_location_x, world_location_y, world_location_z, target_unit_id)**
[注意]目前只在移动平台使用

请求释放技能（或使用物品)。对于需要在指定坐标释放的技能(如鹿目圆香--虹之雨)应当给出有效的世界坐标, 最后一个参数置为-1;
对于单体目标技能(琦玉--一拳超人)应当给出有效目标单位id, 坐标的给出默认的0即可;
对于方向技能(电磁炮)给出世界坐标即可,要求方向正确

技能的槽位 0 ~ 99
物品的槽位 100 ~ 199
饰品的槽位 200 ~ 299
隐藏技能的槽位 300 ~ 

#### _参数列表_

- `spell_slot [int]` 技能或物品的槽位
- `world_location_x [float]` 技能的目标位置x
- `world_location_y [float]` 技能的目标位置y
- `world_location_z [float]` 技能的目标位置z
- `target_unit_id [int]` 技能的目标是单位id

---

### GetSpellDescription

**game.GetSpellDescription(spell_unique_id, spell_id, spell_level)**

获取技能描述信息，这个描述信息是会根据当前人物属性、技能等级动态变化的。

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id
- `spell_id [int]` 技能 id
- `spell_level [int]` 技能等级。无等级设定的技能或物品，此值为 1

#### _返回值_

- `spell_desc [string]` 技能描述
- `spell_detail [string]` 详细描述
- `upgrade_desc [string]` 升级描述

例子：
```
local spell_unique_id = spell.slot_table[spell_slot]
local spell_id = spell.get_spell_attr(spell_unique_id, "技能编号")
local spell_level = spell.get_spell_attr(spell_unique_id, "等级")
if spell_level == nil then spell_level = 1 end

-- 获取技能描述
local spell_desc, spell_detail, upgrade_desc = 
    game.GetSpellDescription(spell_unique_id, spell_id, spell_level)

```

---

### ShowSpellAssist

**game.ShowSpellAssist(spell_slot, show, lock_direction)**

显示或隐藏技能指示器

#### _参数列表_

- `spell_slot [int]` 技能槽位
- `show [bool]` 显示/隐藏
- `lock_direction [bool]` 是否锁定技能指示器方向

---

### RequestMoveItem

**game.RequestMoveItem(spell_unique_id, target_slot)**

请求移动技能或物品

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id
- `target_slot [int]` 想要将技能或物品移动到哪个槽位

---

### RequestBuyItem

**game.RequestBuyItem(item_desc)**

请求购买物品

#### _参数列表_

- `item_desc [string]` 物品描述

例子：

```
game.RequestBuyItem("极速之影")
```

---

### RequestUnBuyItem

**game.RequestUnBuyRequestUnBuyItem()**

请求取消购买物品

---

### RequestSaleItem

**game.RequestSaleItem(spell_unique_id)**

请求卖出物品

#### _参数列表_

- `spell_unique_id [int]` 物品唯一 id

---

### RequestUpgradeSpell

**game.RequestUpgradeSpell(spell_unique_id)**

请求升级技能

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id

---

### SendCustomMessage

**game.SendCustomMessage(message)**

发送自定义消息给服务器

#### _参数列表_

- `message [string]` 自定义消息

服务端脚本这样接收客户端发送的自定义消息：
```
ac.game:event('自定义UI-消息', function(_, player , msg)
    -- do something
end)
```

---

### SendChatMessage

**game.SendChatMessage(message)**

发送聊天消息

#### _参数列表_

- `message [string]` 聊天消息

---

### GetPlayerList

**game.GetPlayerList()**

获取玩家列表

#### _返回值_

- `player_list [array]` 返回玩家数组，存储的内容为玩家的槽位(slot id)

---

### GetPlayerInfo

**game.GetPlayerInfo(slot_id)**

根据槽位获取玩家信息

#### _参数列表_

- `slot_id [int]` 玩家的槽位(slot id)

#### _返回值_

- `player_id [string]` 玩家 id
- `player_name [string]` 玩家名
- `player_title [string]` 玩家头衔
- `camp_id [int]` 阵营
- `onlie [bool]` 是否在线
- `player_type [int]` 玩家类型

---

### GetMyPlayerInfo

**game.GetMyPlayerInfo()**

获取自身信息

#### _返回值_

- `player_id [int]` 玩家 id
- `player_name [string]` 玩家名
- `player_nick_name [string]` 昵称

---

### GetMyPlayerLocation

**game.GetMyPlayerLocation()**

获取玩家在小地图上的坐标

#### _返回值_

- `x [float]` 玩家在小地图上的 x 坐标
- `y [float]` 玩家在小地图上的 y 坐标

---

### GetMyPlayerState

**game.GetMyPlayerState()**

获取玩家当前状态

#### _返回值_

- `state [int]` 当前状态

单位状态的枚举值如下：

```
-- 单位状态枚举
local US_Idle = 1
local US_Walking = 2
local US_Attacking = 3
local US_Dead = 4
local US_Dizzy = 5
local US_SpecialMoving = 6
local US_BUILDING_PREPARE = 7
local US_Relax = 8
```

---

### GetUnitLocation

**game.GetUnitLocation(unit_id)**

获取单位坐标

#### _参数列表_

- `unit_id [int]` 单位 id

#### _返回值_

- `x [number]` `y [number]` `z [number]` 单位坐标

---

### GetSocketLocation

**game.GetSocketLocation(unit_id, socket_name)**

获取单位绑点坐标

#### _参数列表_

- `unit_id [int]` 单位 id
- `socket_name [string]` 绑点名

#### _返回值_

- `x [number]` `y [number]` `z [number]` 绑点坐标


---

### GetUnitFacing

**game.GetUnitFacing(unit_id)**

获取单位朝向

#### _参数列表_

- `unit_id [int]` 单位 id

#### _返回值_

- `facing [number]` 单位朝向

---

### GetLineIntersection

**game.GetLineIntersection(x1, y1, x2, y2)**

获取线段与地图碰撞交点

#### _参数列表_

- `x1 [number]` `y1 [number]` 起点坐标
- `x2 [number]` `y2 [number]` 终点坐标

#### _返回值_

- `x [number]` `y [number]` 碰撞点坐标

---

### GetLocationUnderCursor

**game.GetLocationUnderCursor()**

获取鼠标指针对应的世界坐标

#### _返回值_

- `x [number]` `y [number]` 世界坐标

---

### ScreenToWorld

**game.ScreenToWorld(x, y)**

屏幕坐标转换成世界坐标

#### _参数列表_

- `x [number]` `y [number]` 屏幕坐标

#### _返回值_

- `x [number]` `y [number]` `z [number]` 世界坐标

---

### WorldToScreen

**game.WorldToScreen(x, y, z)**

世界坐标转成屏幕坐标转

#### _参数列表_

- `x [number]` `y [number]` `y [number]` 世界坐标

#### _返回值_

- `x [number]` `y [number]` `z [number]` 屏幕坐标

---

### GetGameTime

**game.GetGameTime()**

获取游戏时间

#### _返回值_

当前游戏时间(从进入游戏开始)

---

### GetDisplayTimeSigned

**game.GetDisplayTimeSigned()**

获取游戏显示的时间。
游戏处于开始前的倒计时时，返回值是负的。
游戏开始后，返回值是正数。

#### _返回值_

游戏显示时间

---

### GetScreenResolution

**game.GetScreenResolution()**

获取窗口分辨率

#### _返回值_

- `x [int]` 窗口分辨率 x
- `y [int]` 窗口分辨率 y

---

### GetHotKeyList

**game.GetHotKeyList()**

获取快捷键列表

#### _返回值_

- `hot_key_list [table]` 返回快捷键列表

hot_key_list 的结构如下:
```
local hot_key_list = game.GetHotKeyList()

-- spell_cast[1], spell_cast[2], spell_cast[3], spell_cast[4]
-- 分别对应技能 1， 2， 3， 4 的快捷键
local spell_cast = hot_key_list["spell_cast"]

-- spell_quick_cast[1], spell_quick_cast[2], spell_quick_cast[3], spell_quick_cast[4]
-- 分别对应技能 1， 2， 3， 4 的智能施法快捷键
local spell_quick_cast = hot_key_list["spell_quick_cast"]

-- 物品栏的快捷键，和上面类似
local item_cast = hot_key_list["item_cast"]

-- 物品栏的快捷键，和上面类似
local item_quick_cast = hot_key_list["item_quick_cast"]

-- 菜单的快捷键，常用的包括：
-- 截屏 1 
-- 队伍聊天 2 
-- 黑店聊天 3 
-- 显示/隐藏UI 4 
-- 显示/隐藏属性面板 10
-- 显示/隐藏商店 12
local menu = hot_key_list["menu"]

-- 镜头的快捷键，常用的包括:
-- 锁定镜头 1
-- 选择英雄 2
-- 将英雄设置为焦点 3
-- 暂停/开始游戏 4
local scene = hot_key_list["scene"]
```

---

### ToggleSettingPanel

**game.ToggleSettingPanel()**

打开/关闭设置面板

---

### ToggleShopPanel

---

### ExitGame

**game.ExitGame()**

退出游戏

---

### LockGameCursor

**game.LockGameCursor()**

在 tps 模式下，显示鼠标指针

---

### IsWatchingGame

**game.IsWatchingGame()**

判断是否处于观战模式

#### _返回值_

- `isWatching [bool]` 是否处于观战模式

---

### IsShipping

**game.IsShipping()**

客户端是否为 shipping 版

#### _返回值_

- `isShipping [bool]` 是否为 shipping 版

---

### ExecuteConsoleCommand

**game.ExecuteConsoleCommand(command)**

执行控制台命令

#### _参数列表_

- `command [string]` 控制台命令

---

### SetEnableClickThrough

**game.SetEnableClickThrough(enable)**

设置鼠标右键穿透

#### _参数列表_

- `enable [string]` 鼠标右键是否穿透到界面

---

### ShowMiniMap

**game.ShowMiniMap()**

显示小地图

---

### HideMiniMap

**game.HideMiniMap()**

隐藏小地图

---

### UpdateMiniMap

**game.UpdateMiniMap(x, y, w, h)**

修改小地图大小及位置

#### _参数列表_

- `x [int]` 横轴坐标
- `y [int]` 纵轴坐标
- `w [int]` 小地图宽度
- `h [int]` 小地图高度

---

### SetMiniMapBackgroundImage

**game.SetMiniMapBackgroundImage(iamge_path)**

设置小地图背景图片,图片必须为 png 格式

#### _参数列表_

- `image_path [string]` 小地图背景图片路径,背景图片需要放在 `CustomUI\Gaming\MiniMap` 路径下

例子：
```
game.SetMiniMapBackgroundImage("Gaming/MiniMap/map.png")
```

---

### MoveCameraToMiniMapPosition

**game.MoveCameraToMiniMapPosition(x, y)**

移动镜头到指定小地图坐标

#### _参数列表_

- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y

---

### MoveHeroToMiniMapPosition

**game.MoveHeroToMiniMapPosition(x, y)**

移动英雄到指定小地图坐标

#### _参数列表_

- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y


---

### RequestSendMiniMapSignal

**game.RequestSendMiniMapSignal(singal_type, x, y)**

在小地图上显示信号

#### _参数列表_

- `signal_type [int]` 信号类型
- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y

信号类型枚举：
```
-- 小地图信号枚举
local MINIMAP_SIGNAL_DEFEND_TOWER = 1
local MINIMAP_SIGNAL_GATHER = 2
local MINIMAP_SIGNAL_ATTACK = 3
local MINIMAP_SIGNAL_RETREAT = 4
local MINIMAP_SIGNAL_SOS = 5
local MINIMAP_SIGNAL_ENEMY_DISAPPEAR = 6
local MINIMAP_SIGNAL_COMING = 7
```

---

### GetMiniMapCameraArea

**game.GetMiniMapCameraArea()**

获取小地图上对应的镜头范围

#### _返回值_

- `area [array]` 包含 4 个点，每个点包含 x、y 坐标。这四个点对应的四边形即为小地图上对应的镜头范围 

---

---

### DisableCameraMove

**game.DisableCameraMove(is_Disable)**

关闭鼠标在窗口边缘时 镜头会移动的接口

#### _参数列表_

- `is_Disable [bool]` true时 禁止镜头移动 false时恢复


---

### ShowEffect

**game.ShowEffect(effect_name, life_time)**

播放特效

#### _参数列表_

- `effect_name [string]` 特效名
- `life_time [int]` 持续时间 (ms)

---

### ClearCameraEffect

**game.ClearCameraEffect()**

清除镜头特效，无参数

---

### PlayEventParticle

**game.PlayEventParticle(effect_name)**

播放音效

#### _参数列表_

- `effect_name [string]` 音效名

---

### SetSceneGray

**game.SetSceneGray()**

使屏幕变灰

---

### AddModelToPreviewScene

**game.AddModelToPreviewScene(hero_name, x, y, z)**

添加预览模型到模型预览控件

#### _参数列表_

- `hero_name [string]` 英雄名
- `x [number]` 模型 x 坐标
- `y [number]` 模型 y 坐标
- `z [number]` 模型 z 坐标

#### _返回值_

- `model_id [int]` 模型 id，供删除和设置模型缩放和朝向时使用

---

### RemoveModelFromPreviewScene

**game.RemoveModelFromPreviewScene(model_id)**

删除预览模型

#### _参数列表_

- `model_id [int]` 模型 id

---

### SetModelPosInPreviewScene

**game.SetModelPosInPreviewScene(model_id, scale, rotate)**

设置模型缩放和朝向

#### _参数列表_

- `model_id [int]` 模型 id
- `scale [number]` 缩放系数，大于 1 代表放大，小于 1 代表缩小
- `rotate [number]` 设置模型朝向，取值范围 0 ~ 360
---

### SetModelLocationInPreviewScene

**game.SetModelLocationInPreviewScene(model_id, x, y, z)**

设置模型在预览场景中的位置

#### _参数列表_

- `model_id [int]` 模型 id
- `x [number]` `y [number]` `z [number]` 模型在预览场景中的坐标

---

### PlayAnimationInPreviewScene

**game.PlayAnimationInPreviewScene(model_id, animation_name, speed, loop)**

使预览场景中的模型播放动画

#### _参数列表_

- `model_id [int]` 模型 id
- `animation_name [string]` 动画名
- `speed [number]` 播放速度
- `loop [bool]` 是否循环播放

---

### StopAnimationInPreviewScene

**game.StopAnimationInPreviewScene(model_id, animation_name)**

使预览场景中的模型停止播放动画

#### _参数列表_

- `model_id [int]` 模型 id
- `animation_name [string]` 动画名

---

### IsPlayerMute

**game.IsPlayerMute(player_id)**

玩家是否被禁音

#### _参数列表_

- `player_id [string]` 玩家id


---

### OnPlayerMute

**game.OnPlayerMute(player_id, bMute)**

禁音玩家

#### _参数列表_

- `player_id [string]` 玩家id
- `bMute [bool]` 是否禁音


---

### RequestBlockPlayerSpeak

**game.RequestBlockPlayerSpeak(slot, bBlock)**

请求禁言玩家

#### _参数列表_

- `slot [int]` 玩家槽位id
- `bBlock [bool]` 是否禁言

---

### IsPlayerBlock

**game.IsPlayerBlock(slot)**

玩家是否被禁音

#### _参数列表_

- `slot [int]` 玩家槽位id


---

### PlayParticle

**game.PlayParticle(x, y, z, scale)**

在指定点播放particle

#### _参数列表_

- `x [number]` 模型 x 坐标
- `y [number]` 模型 y 坐标
- `z [number]` 模型 z 坐标
- `scale[number]` 缩放比例

#### _返回值_

- `psc [int]` 创建的particle componet指针

---

### ClearParticle

**game.ClearParticle(psc)**

在指定点播放particle

#### _参数列表_

- `psc [int]` 要清掉的particle componet指针

---

### CreateParticleUnit

**game.CreateParticleUnit(x, y, z)**

创建一个特效（需要保存创建的特效单位，方便销毁和移动用）

#### _参数列表_

- `particle_name [string]` 特效名字(table/通用/ParticleData里面配置)
- `x [number]` x 坐标
- `y [number]` y 坐标
- `z [number]` z 坐标

#### _返回值_

- `unit [int]` 创建的particle单位指针

---

### DestoryParticleUnit

**game.DestoryParticleUnit(unit)**

显示镜头移动

#### _参数列表_

- `unit [int]` 需要销毁的particle单位

---

### MoveParticleUnit

**game.MoveParticleUnit(unit, x, y, z)**

创建一个特效

#### _参数列表_

- `unit [int]` 需要移动的particle单位
- `x [number]` x 坐标
- `y [number]` y 坐标
- `z [number]` z 坐标

---  

### CreateClientUnit

**game.CreateClientUnit(type_id,x, y, z,facing)**

创建一个客户端单位（只有模型显示，不跑服务端，只完全被客户端操控的单位）

#### _参数列表_

- `type_id [int]` 单位类型id (UnitData.ini里面配置的单位类型)
- `x [number]` x 坐标
- `y [number]` y 坐标
- `z [number]` z 坐标
- `facing [number]` 面向角度

#### _返回值_

- `unit [int]` 客户端单位的handle

---

### DestroyClientUnit

**game.DestroyClientUnit(unit_handle)**

销毁一个客户端单位

#### _参数列表_

- `unit_handle [int]` 有效的单位句柄

---


### SetClientUnitLocation

**game.SetClientUnitLocation(unit_handle,x, y, z)**

设置客户端单位的位置 (改变显示的位置)

#### _参数列表_

- `unit_handle [int]` 有效的单位句柄
- `x [number]` x 坐标
- `y [number]` y 坐标
- `z [number]` z 坐标

---


### GetClientUnitLocation

**game.GetClientUnitLocation(unit_handle,x, y, z)**

获取客户端单位的位置 (当前位置)

#### _参数列表_

- `unit_handle [int]` 有效的单位句柄

#### _返回值_

- `x [number]` x 坐标
- `y [number]` y 坐标
- `z [number]` z 坐标

---


### SetClientUnitRotation

**game.SetClientUnitRotation(unit_handle,x, y, z)**

设置客户端单位的旋转轴参数 (旋转模型跟设置面向)

#### _参数列表_

- `unit_handle [int]` 有效的单位句柄
- `x [number]` x 角度制 围绕x轴旋转
- `y [number]` y 角度制 围绕y轴旋转 y轴为游戏的水平轴
- `z [number]` z 角度制 围绕y轴旋转 z轴为改变单位的面向角度

---

### GetClientUnitRotation

**game.GetClientUnitRotation(unit_handle,x, y, z)**

获取客户端单位的旋转轴参数 (旋转模型)

#### _参数列表_

- `unit_handle [int]` 有效的单位句柄

#### _返回值_

- `x [number]` x 角度制 围绕x轴旋转
- `y [number]` y 角度制 围绕y轴旋转 y轴为游戏的水平轴
- `z [number]` z 角度制 围绕y轴旋转 z轴为改变单位的面向角度

---


### ShowCameraMove

**game.ShowCameraMove(camera_name)**

显示镜头移动

#### _参数列表_

- `camera_name [string]` 镜头事件的名字

---

### SetForbidRightMouse

**game.SetForbidRightMouse(bforbid)**

禁止右键移动

#### _参数列表_

- `bforbid [bool]` 是否禁止

---

### SetForbidRightMouse

**game.SetForbidRightMouse(bforbid)**

禁止右键移动

#### _参数列表_

- `bforbid [bool]` 是否禁止

---

### SetForceGuideShop

**game.SetForceGuideShop(bforce)**

设置是否强制商店引导

#### _参数列表_

- `bforce [bool]` 是否强制

---

### SetForbidKey

**game.SetForbidKey(bforce)**

设置是否禁止按键响应

#### _参数列表_

- `bforbid [bool]` 是否禁止

---

### GetTargetSpellDescription

**game.GetTargetSpellDescription(spell_unique_id, spell_id, spell_level, unit_id)**

获取单位左上角技能描述信息，这个描述信息是会根据当前人物属性、技能等级动态变化的(敌方的不会随等级变化)

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id
- `spell_id [int]` 技能 id
- `spell_level [int]` 技能等级。无等级设定的技能或物品，此值为 1
- `unit_id[int]` 单位id

#### _返回值_

- `spell_desc [string]` 技能描述
- `spell_detail [string]` 详细描述

---




### OpenInputMethod

**game.OpenInputMethod(is_ignore_default_ui)**

打开输入法，忽略掉默认的ui
打开后 游戏里的按键操作会被输入法屏蔽

#### _参数列表_

- `is_ignore_default_ui [bool]` 是否忽略自带的UI

---


### CloseInputMethod

**game.CloseInputMethod()**

关闭输入法
关闭后 恢复被屏蔽的按键

---

### IsPariticleStop

**game.IsPariticleStop(sound_id)**

音效是否播放结束

#### _参数列表_

- `sound_id [string]` 音效sound_id

#### _返回值_

- `bstop [bool]` 是否播放结束

---

### StopEventParticle

**game.StopEventParticle(sound_id)**

主动停止播放某个音效

#### _参数列表_

- `sound_id [string]` 音效sound_id

---

### PlayMiniMapSignalTips

**game.PlayMiniMapSignalTips(minimap_singnal_type, x, y, unit_id, time_delay, singal_type)**

在地图上播放信号标志

#### _参数列表_

- `minimap_singnal_type [int]` 小地图信号类型
- `x [float]` 信号位置x
- `y [float]` 信号位置y
- `unit_id [int]` 单位id
- `time_delay [float]` 持续时间
- `singal_type [int]` 大地图上的信号类型

---

### IsSettingOpen

**game.IsSettingOpen()**

设置面板是否打开

#### _返回值_

- `bopen [bool]` 是否打开

---

### ReconnectGame

**game.ReconnectGame()**

重连游戏

---