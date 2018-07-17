# 如何响应游戏事件

在 `custom_ui.lua` 的逻辑代码中实现对应的回调函数即可，如

```

custom = {}

-- 注册游戏逻辑
game_events.register_ui_logic(custom)

-- 响应按键事件
custom.on_key_down = function(event_args)
	if event_args == "F7" then
        -- do something
	end
end

```

---

### on_screen_resolution_changed

**on_screen_resolution_changed(w, h)**

游戏分辨率改变

#### _参数列表_

- `x [int]` 横轴分辨率
- `y [int]` 纵轴分辨率


---

### on_key_down

**on_key_down(key_str)**

按键按下

#### _参数列表_

- `key_str [string]` 按下的按键


---

### on_key_up

**on_key_up(key_str)**

按键松开

#### _参数列表_

- `key_str [string]` 松开的按键


---

### on_mouse_down

**on_mouse_down(button_type, x, y)**

鼠标按下

#### _参数列表_

- `button_type [string]` 按键类型，是左键还是右键
- `x [number]` `y [number]` 当前鼠标坐标


---

### on_mouse_up

**on_mouse_up(button_type, x, y)**

鼠标松开

#### _参数列表_

- `button_type [string]` 按键类型，是左键还是右键
- `x [number]` `y [number]` 当前鼠标坐标


---

### on_mouse_move

**on_mouse_move(x, y)**

鼠标移动

#### _参数列表_

- `x [number]` `y [number]` 当前鼠标坐标

---

### on_mouse_lose_capture

**on_mouse_lose_capture()**

鼠标失去焦点（按下鼠标，然后 alt + tab）

---

### on_update

**on_update(delta)**

帧回调，每帧都会被调用

#### _参数列表_

- `delta [float]` 距离上一帧的间隔时间，单位为秒

举例，每隔 30 ms 执行一些逻辑，可以这样处理：

```
custom_ui.update = function(delta)
	
	delta = delta * 1000

	if timer.last_delta + delta >= 30 then
		delta = timer.last_delta + delta
		timer.last_delta = 0
	else
		timer.last_delta = timer.last_delta + delta
		return
	end

	-- do something ...
	
end
```


---

### on_enter_game

**on_enter_game()**

选人结束，进入游戏

---

### on_custom_ui_event

**on_custom_ui_event(event_id, info)**

接收服务器发过来的自定义界面消息

#### _参数列表_

- `event_id [int]` 消息 id
- `info [string]` 自定义消息内容

服务端给自定义界面发消息的例子（服务端脚本代码):
```
ac.auxiliary.custom_ui_event(81, "御坂美琴")

```

自定义界面处理服务端发送过来的消息：
```
custom_ui.on_custom_ui_event = function(event_id, info)
    if event_id == 81 then
        common.InvokeFrontEndMethod("set_text", "label_1", info)
    end
end
```
---

### on_game_setting_changed

**on_game_setting_changed()**

游戏设置改变的回调。

举例，自定义界面某个控件显示玩家技能快捷键的字符。当玩家修改快捷键后，点击设置界面的确定按钮，会触发这个回调，在这个回调函数里更新快捷键控件的显示内容即可。


---


### on_error_tip

**on_error_tip(error_text, duration)**

技能释放错误信息

#### _参数列表_

- `error_text [string]` 错误信息
- `duration [int]` 持续时间(ms)


---

### on_system_message

**on_system_message(message, duration)**

系统消息

#### _参数列表_

- `message [string]` 系统消息
- `duration [int]` 持续时间(ms)


---

### on_server_message

**on_server_message(message)**

服务器错误提示

#### _参数列表_

- `message [string]` 错误信息


---

### on_unit_clicked

**on_unit_clicked(unit_id, shop_index)**

单位被点击，如果是商店被点击，则 shop_index 为商店的编号

#### _参数列表_

- `unit_id [int]` 单位 id
- `shop_index [int]` 单位的编号


---

### on_init_player_info

**on_init_player_info(hero_changed)**

玩家信息初始化。

一般自定义界面的初始化放到这个回调里执行，因为此时能够保证玩家信息已经获取完毕。

当玩家切换英雄时也会调用这个回调函数，此时 `hero_changed` 为 `true`

#### _参数列表_

- `hero_changed [bool]` 当玩家信息初始化时，此值为 false。当切换英雄时，此值为 true。


---

### on_unit_created

单位创建事件。

**on_unit_created(unit_id, unit_attrs)**

#### _参数列表_

- `unit_id [int]` 单位 id
- `unit_attrs [table]` 单位创建时附带的属性

单位属性 `unit_attrs` 是一个属性的键值对集合，key 是 `table/constant.ini` 中定义的整数, 如 unit_attrs[1] 为单位的生命值。

```
['单位属性']
-- 以下不要修改 --
'生命' = 1
'生命上限' = 2
'生命恢复' = 3
'魔法' = 4
'魔法上限' = 5
'魔法恢复' = 6
'视野范围' = 7
'行为限制' = 10
'攻击速度' = 11
'冷却缩减' = 12
'减耗' = 13
'护甲' = 14
'攻击' = 15
'攻击范围' = 16
'搜敌范围' = 17
'移动速度' = 18
-- 以上不要修改 --
'等级' = 21
'护盾' = 22
'经验' = 23
'经验上限' = 24
'技能点' = 25
-----------------
'破甲' = 31
'穿透' = 32
'吸血' = 33
'暴击' = 34
'暴击伤害' = 35
'格挡' = 36
'魔抗' = 37
'法术破甲' = 38
'法术穿透' = 39
'基础攻击' = 40
'额外攻击' = 41
```

除此之外，有一个特殊的单位属性 `unit_attrs["unit_type"]` 代表单位类型


---

### on_player_attributes_changed

**on_player_attributes_changed(player_attrs)**

玩家属性变化事件。

#### _参数列表_

- `player_attrs [table]` 变化的玩家属性集合

玩家属性 `player_attrs` 是一个属性的键值对集合，key 是 `constant.ini` 中定义的整数, 如 player_attrs[4] 为玩家的金钱。

```
['玩家属性']
-- 以下不要修改 --
'英雄ID' = 1
'英雄类型' = 2
'队伍' = 3
-- 以上不要修改 --
'金钱' = 4
'击杀' = 5
'死亡' = 6
'助攻' = 7
'补刀' = 8
'杀兵' = 9
'杀野' = 10
'屠龙' = 11
'大招状态' = 12
'大招冷却' = 13
'大招冷却上限' = 14
'复活时间' = 15
'复活时间上限' = 16
'总资产' = 17
'BUFF状态' = 18
```


---

### on_unit_attributes_changed

**on_unit_attributes_changed(unit_attrs)**

单位属性变化事件。

#### _参数列表_

- `unit_attrs [table]` 变化的单位属性集合


---


### on_buff_attached

**on_buff_attached(unit_id, buff_id, buff_index, total_time, left_time, engery_count, source_slot)**

添加 buff

#### _参数列表_

- `unit_id [int]` 单位 id
- `buff_id [int]` buff id
- `buff_index [int]` buff 索引
- `total_time [int]` buff 持续时间
- `left_time [int]` 剩余持续时间
- `engery_count [int]` buff 层数
- `source_slot [int]` buff 槽位


---

### on_buff_detached

**on_buff_detached(unit_id, buff_id, buff_index)**

删除 buff

#### _参数列表_

- `unit_id [int]` 单位 id
- `buff_id [int]` buff id
- `buff_index [int]` buff 索引

---

### on_buff_update

**on_buff_update(unit_id, buff_id, buff_index, total_time, left_time, engery_count, source_slot)**

更新 buff

#### _参数列表_

- `unit_id [int]` 单位 id
- `buff_id [int]` buff id
- `buff_index [int]` buff 索引
- `total_time [int]` buff 持续时间
- `left_time [int]` 剩余持续时间
- `engery_count [int]` buff 层数
- `source_slot [int]` buff 槽位

---


### on_update_spell_upgradable

**on_update_spell_upgradable(spell_unique_id, upgradable)**

技能是否可以升级。

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id
- `upgradable [bool]` 技能是否可升级


---

### on_spell_actived

**on_spell_actived(unique_id, actived)**

技能激活状态变化

#### _参数列表_

- `unique_id [int]` 技能唯一 id
- `actived [bool]` 技能是否处于激活状态

---

### on_spell_attributes_changed

**on_spell_attributes_changed(unique_id, spell_attrs)**

技能属性变化

#### _参数列表_

- `unique_id [int]` 技能唯一 id
- `spell_attrs [table]` 变化的技能属性

spell_attrs 是一个键值对集合， key 的含义参见下表

```
-- 技能属性 id -> 描述
spell.spell_attr_id_to_desc = {
    [2] = "需要魔法",
    [4] = "目标类型",
    [10] = "冷却时间",
    [11] = "充能时间",
    [13] = "激活",
    [14] = "等级限制",
    [18] = "堆叠次数",
    [19] = "是否显示堆叠次数",
    [20] = "槽位",
    [21] = "等级",
    [22] = "冷却模式",
    [23] = "充能最大次数",
    ["spell_id"] = "技能编号"
}

```


---

### on_spell_upgrade

**on_spell_upgrade(unique_id, spell_level)**

技能升级事件

#### _参数列表_

- `unique_id [int]` 技能唯一 id
- `spell_level [int]` 技能当前等级


---

### on_add_spell

**on_add_spell(unique_id , spell_attrs)**

添加技能（或物品）事件

#### _参数列表_

- `unique_id [int]` 技能唯一 id
- `spell_attrs [table]` 技能属性集合


---

### on_remove_spell

**on_remove_spell(removed_spells)**

删除技能事件

#### _参数列表_

- `removed_spells [array]` 删除的技能数组

例子：

```
for index, spells in pairs(removed_spells) do
    for unique_id, spell_id in pairs(spells) do
        -- unique_id spell_id 分别对应技能唯一 id 和技能编号
    end
end

```


---

### on_spell_stack_change

**on_spell_stack_change(unique_id, spell_attrs)**

技能层数变化

#### _参数列表_

- `unque_id [int]` 技能唯一 id
- `spell_attrs [table]` 技能属性

---

### on_spell_slot_changed

**on_spell_slot_changed(unique_id, source_slot, target_slot)**

技能槽位变化

#### _参数列表_

- `unque_id [int]` 技能唯一 id
- `source_slot [int]` 变化前的技能槽位
- `target_slot [int]` 变化后的技能槽位

---

### on_spell_cd_changed

**on_spell_cd_changed(spell_unique_id, left_time, total_time, cd_type)**

技能 CD 变化

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id
- `left_time [int]` 剩余 CD 时间 (ms)
- `total_time [int]` 总时间
- `cd_type [int]` CD 类型
    - 0 ：普通 CD
    - 1 ：充能 CD

---

### on_spell_cd_finished

**on_spell_cd_finished(spell_unique_id, cd_type)**

技能 CD 结束

#### _参数列表_

- `spell_unique_id [int]` 技能唯一 id
- `cd_type [int]` CD 类型
    - 0 ：普通 CD
    - 1 ：充能 CD

---

### on_spell_cast_start

**on_spell_cast_start(spell_id, left_time, total_time)**

技能开始读条

#### _参数列表_

- `spell_id [int]` 技能编号
- `left_time [int]` 剩余时间
- `total_time [int]` 总时间


---

### on_spell_cast_notify

**on_spell_cast_notify(spell_id, left_time, total_time)**

技能读条进度更新

#### _参数列表_

- `spell_id [int]` 技能编号
- `left_time [int]` 剩余时间
- `total_time [int]` 总时间

---

### on_spell_cast_end

**on_spell_cast_end(spell_id, left_time, total_time)**

技能终止读条

#### _参数列表_

- `spell_id [int]` 技能编号
- `left_time [int]` 剩余时间
- `total_time [int]` 总时间

---

### on_spell_cast_break

**on_spell_cast_break(spell_id)**

技能读条中断

#### _参数列表_

- `spell_id [int]` 技能编号

---

### on_spell_cast_result

**on_spell_cast_result(error_message)**

技能释放结果

#### _参数列表_

- `error_message [string]` 技能释放失败的错误信息


---


### on_minimap_init

**on_minimap_init()**

小地图初始化


---

### on_minimap_clicked

**on_minimap_clicked(x, y)**

小地图被左击

#### _参数列表_

- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y


---

### on_minimap_right_clicked

**on_minimap_right_clicked(x, y)**

小地图被右击

#### _参数列表_

- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y


---

### on_minimap_signal_response

**on_minimap_signal_response(type, x, y, unit_id, duration)**

显示小地图信号

#### _参数列表_

- `type [int]` 信号类型
- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y
- `unit_id [int]` 单位 id
- `duration [int]` 持续时间

信号类型的枚举：
```
local MINIMAP_SIGNAL_DEFEND_TOWER = 1
local MINIMAP_SIGNAL_GATHER = 2
local MINIMAP_SIGNAL_ATTACK = 3
local MINIMAP_SIGNAL_RETREAT = 4
local MINIMAP_SIGNAL_SOS = 5
local MINIMAP_SIGNAL_ENEMY_DISAPPEAR = 6
local MINIMAP_SIGNAL_COMING = 7
```


---

### on_minimap_show_spell_indicator

**on_minimap_show_spell_indicator(x, y, radius)**

小地图显示技能指示器

#### _参数列表_

- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y
- `radius [int]` 技能指示器半径


---

### on_minimap_hide_spell_indicator

**on_minimap_hide_spell_indicator()**

小地图隐藏技能指示器

---

### on_minimap_show_hero_move_path

**on_minimap_show_hero_move_path(path_info)**

小地图显示英雄移动路径

#### _参数列表_

- `path_info [array]` 英雄在小地图上移动路径的数组，包含路径点的信息
    - `x [int]` 路径点 x 坐标
    - `y [int]` 路径点 y 坐标

---

### on_minimap_show_spell_indicator

**on_minimap_show_spell_indicator(x, y, radius)**

小地图显示技能指示器

#### _参数列表_

- `x [int]` 小地图坐标 x
- `y [int]` 小地图坐标 y
- `radius [int]` 技能指示器半径

---

### on_minimap_creep_appear_notify

**on_minimap_creep_appear_notify(has_time, pos_x, pos_y, time, map_width, map_height)**

小地图野怪出现消消息通知

#### _参数列表_

- `has_time [bool]` 是否有时间
- `pos_x [number]` 野怪坐标 x
- `pos_y [number]` 野怪坐标 y
- `time [number]` 野怪出现时间
- `map_width [number]` 地图宽度
- `map_height [number]` 地图高度

---

### on_show_unit_tip

**on_show_unit_tip(panel_visible, tip_title, tip_content, pos_x, pos_y)**

显示单位tip
在UnitData.ini里可配置

```
TipTitle="<FONT COLOR='#0000ff'>基础伤害</FONT>"
TipContent="<FONT COLOR='#0000ff'>怎么办怎么办水利水电拉法基怎么办怎么办水利水电拉法基</FONT>"
```


来确定要显示的标题，内容，以及文字颜色

#### _参数列表_

- `panel_visible[bool]` 单位tip显示还是关闭
- `tip_title [string]` tip 标题
- `tip_content [string]` tip 内容
- `pos_x [int]` 显示的屏幕坐标 x
- `pos_y [int]` 显示的屏幕坐标 y


---

### on_unit_destory

**on_unit_destory(unit_id)**

单位销毁

#### _参数列表_

- `unit_id [int]` 单位 id

---

### on_game_over_lobby_reward

**on_game_over_lobby_reward(lobby_data_info)**

大厅相关数据通知

#### _参数列表_

- `lobby_data_info [string]` 大厅战报数据

---

### on_game_result

**on_game_result(result_info)**

游戏结束数据通知

#### _参数列表_

- `result_info [string]` 游戏内战报数据

---

### on_block_speak_res

**on_block_speak_res(slot_id, result)**

玩家禁言结果返回

#### _参数列表_

- `slot_id [int]` 玩家槽位id
- `result [int]` 禁言结果返回(0成功，其他失败)

---

### on_unblock_speak_res

**on_unblock_speak_res(slot_id, result)**

玩家解除禁言结果返回

#### _参数列表_

- `slot_id [int]` 玩家槽位id
- `result [int]` 禁言结果返回(0成功，其他失败)

---

### on_user_guide_notify

**on_user_guide_notify(msg_str)**

新手引导流程通知

#### _参数列表_

- `msg_str [string]` 引导步骤消息内容

---

### on_user_guide_showhide_shop

**on_user_guide_showhide_shop(bshop)**

打开关闭商店通知

#### _参数列表_

- `bshop [bool]` 是否打开

---

### on_user_move_target

**on_user_move_target(pos_x, pos_y)**

移动到指定位置通知

#### _参数列表_

- `pos_x [number]` x 坐标
- `pos_y [number]` y 坐标

---

### on_disconnected

**on_disconnected(error_code)**

断开连接通知

#### _参数列表_

- `error_code [int]` 返回的errorcode

---

### on_tower_attack_notify

**on_tower_attack_notify(tower_id, tower_target_id)**

被塔攻击的消息通知

#### _参数列表_

- `tower_id [int]` 塔的Id
- `tower_target_id [int]` 塔攻击的目标Id

---

### on_sound_play_finished

**on_sound_play_finished(sound_id)**

声音播完的通知

#### _参数列表_

- `sound_id [string]` 播完的soundId

---

### on_speech_channel_changed

**on_speech_channel_changed(current_channel)**

语音频道切换通知

#### _参数列表_

- `current_channel [int]` 当前语音频道

---

### on_start_loading

**on_start_loading(left_time)**

开始加载游戏通知

#### _参数列表_

- `left_time [int]` 加载剩余时间

---

### on_finish_loading

**on_finish_loading()**

结束加载游戏通知

---

### on_loading_progress_notify

**on_loading_progress_notify(slot_id, progress)**

加载进度通知

#### _参数列表_

- `slot_id [int]` 玩家槽位
- `progress [int]` 进度（0-100）

---

### on_start_pick

**on_start_pick()**

开始选人通知

---

### on_req_surrender_vote_res

**on_req_surrender_vote_res(result)**

请求投降投票返回

#### _参数列表_

- `result [bool]` 返回结果 
    - 1： 阵营不合法
    - 2： 没有到投降时间
    - 3： 投降在cd中

---

### on_surrender_vote_start

**on_surrender_vote_start(vote_info, left_time, player_count)**

开始投降投票

#### _参数列表_

- `vote_info [table]` 投票信息数组 (slot_id, confirm) 
- `left_time [int]` 投票剩余时间 
- `player_count [int]` 有几个玩家参与投票 

---

### on_surrender_vote_notify

**on_surrender_vote_notify(slot_id, confirm)**

投降投票消息通知

#### _参数列表_

- `slot_id [int]` 玩家槽位id 
- `confirm [bool]` 是否确认投降 

---

### on_surrender_vote_end

**on_surrender_vote_end(agree_count, total_count, vote_result, camp_id)**

投降投票结果通知

#### _参数列表_

- `agree_count [int]` 同意投降人数 
- `total_count [int]` 总参与投票人数 
- `vote_result [bool]` 投降结果 
- `camp_id [int]` 阵营id 

---


### on_click_setting

**on_click_setting()**

大厅点击设置按钮 (GlobalLogic.cpp)

---

### on_state_change

**on_state_change(state)**

客户端状态改变消息 (GlobalLogic.cpp)

#### _参数列表_

- `state [int]` state 

客户端状态机枚举：
```
-- 小地图信号枚举
local GAME_STATE_IDLE = 0
local GAME_STATE_MAP_LOADING = 1
local GAME_STATE_PICK_WAITING = 2
local GAME_STATE_PICK = 3
local GAME_STATE_GAMING = 4
local GAME_STATE_ENDIBG = 5
local GAME_STATE_EXITING = 6
```

---
