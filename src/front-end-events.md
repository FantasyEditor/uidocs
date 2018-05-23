# 如何响应界面事件

在 `custom_ui.lua` 的逻辑代码中实现对应的回调函数即可，如

```

custom = {}

-- 注册游戏逻辑
game_events.register_ui_logic(custom)

-- 按钮被点击
custom.on_button_clicked = function(button_id)

    -- 调用游戏接口，请求释放技能
	game.CastSpell(1, true)

end

```

---

### button_clicked

**on_button_clicked(button_id)**

按钮被点击

#### _参数列表_

- `button_id [string]` 按钮控件的 id

---

### button_right_clicked

**on_button_right_clicked(button_id)**

按钮被右击

#### _参数列表_

- `button_id [string]` 按钮控件的 id

---

### button_drag_and_drop

**on_button_drag_and_drop(drag_info)**

结束拖拽按钮

#### _参数列表_

- `drag_info [table]` 包含两个子属性
    - `source_id [string]` 被拖放按钮的 id
    - `target_id [string]` 松开鼠标时，鼠标指针所在按钮的 id，如果松开鼠标时鼠标指针没有在任何按钮上，此值为 `nil`

---

### button_mouse_enter

**on_button_mouse_enter(button_id)**

鼠标指针移入按钮，一般在这个回调里调用 `set_tooltip` 显示提示信息

#### _参数列表_

- `button_id [string]` 按钮控件的 id

---

### button_mouse_leave

**on_button_mouse_leave(button_id)**

鼠标指针移出按钮，一般在这个回调里调用 `remove_tooltip` 移除提示信息

#### _参数列表_

- `button_id [string]` 按钮控件的 id

---

### button_touch_started

**on_button_touch_started(button_id, localPosX, localPosY)**

按下按钮

[只在移动平台使用]因移动平台以手指触控操作为主,没有鼠标的概念,故与PC平台的事件分开. 表示刚开始按下按钮,此时会捕获焦点

#### _参数列表_

- `button_id [string]` 按钮控件的 id
- `localPosX [number]` 按下位置在按钮控件的本地坐标X
- `localPosY [number]` 按下位置在按钮控件的本地坐标Y

---

### button_touch_moved

**on_button_touch_moved(button_id, localPosX, localPosY)**

在按钮上滑动

[只在移动平台使用]因移动平台以手指触控操作为主,没有鼠标的概念,故与PC平台的事件分开. 表示在按钮上的滑动操作,按钮会持有焦点,因此手指离开按钮区域,仍然可以接受到move事件

#### _参数列表_

- `button_id [string]` 按钮控件的 id
- `localPosX [number]` 手指位置在按钮控件的本地坐标X
- `localPosY [number]` 手指位置在按钮控件的本地坐标Y

---

### button_touch_ended

**on_button_touch_ended(button_id, localPosX, localPosY)**

松开按钮

[只在移动平台使用]因移动平台以手指触控操作为主,没有鼠标的概念,故与PC平台的事件分开. 表示手指离开屏幕,松开按钮(不是手指离开按钮控件区域)

#### _参数列表_

- `button_id [string]` 按钮控件的 id
- `localPosX [number]` 手指位置在按钮控件的本地坐标X
- `localPosY [number]` 手指位置在按钮控件的本地坐标Y

---

### label_mouse_enter

**on_label_mouse_enter(label_id)**

鼠标指针移入标签，一般在这个回调里调用 `set_tooltip` 显示提示信息

#### _参数列表_

- `label_id [string]` 标签控件的 id

---

### label_mouse_leave

**on_label_mouse_leave(label_id)**

鼠标指针移出标签，一般在这个回调里调用 `remove_tooltip` 移除提示信息

#### _参数列表_

- `label_id [string]` 标签控件的 id

---

### canvas_clicked

**on_canvas_clicked(canvas_id, x, y)**

画布控件被点击

#### _参数列表_

- `canvas_id [string]` 画布控件的 id
- `x [int]` `y [int]` 点击时鼠标指针相对于画布左上角的坐标

---

### canvas_right_clicked

**on_canvas_right_clicked(canvas_id, x, y)**

画布控件被右击

#### _参数列表_

- `canvas_id [string]` 画布控件的 id
- `x [int]` `y [int]` 点击时鼠标指针相对于画布左上角的坐标


---

### canvas_mousedown

**on_canvas_mousedown(canvas_id, x, y)**

画布控件被按下

#### _参数列表_

- `canvas_id [string]` 画布控件的 id
- `x [int]` `y [int]` 点击时鼠标指针相对于画布左上角的坐标

---

### canvas_mousemove

**on_canvas_mousemove(canvas_id, x, y)**

画布控件的move事件

#### _参数列表_

- `canvas_id [string]` 画布控件的 id
- `x [int]` `y [int]` 点击时鼠标指针相对于画布左上角的坐标

---

### canvas_mouseup

**on_canvas_mouseup(canvas_id, x, y)**

画布控件的move事件

#### _参数列表_

- `canvas_id [string]` 画布控件的 id
- `x [int]` `y [int]` 点击时鼠标指针相对于画布左上角的坐标

---

### input_text_changed

**on_input_text_changed(input_id, text)**

输入框文本改变

#### _参数列表_

- `input_id [string]` 输入框 id
- `text [string]` 输入框文本

---

### input_get_focus

**on_input_get_focus(input_id)**

输入框得到焦点

#### _参数列表_

- `input_id [string]` 输入框 id

---

### input_lose_focus

**on_input_lose_focus(input_id)**

输入框失去焦点

#### _参数列表_

- `input_id [string]` 输入框 id

---

### panel_mouse_enter

**on_panel_mouse_move(panel_id)**

鼠标进入面板

#### _参数列表_

- `panel_id [string]` 面板 id

---

### panel_mouse_leave

**on_panel_mouse_move(panel_id)**

鼠标进入面板

#### _参数列表_

- `panel_id [string]` 面板 id

---

### panel_clicked

**on_panel_clicked(panel_id)**

面板被点击

#### _参数列表_

- `panel_id [string]` 面板 id

---


### joystick_touch_started

**on_joystick_touch_started(Joystick_id, DirX, DirY)**

开始按下摇杆

[只在移动平台使用] 按下摇杆后会捕获焦点,即使手指离开控件视觉范围,依然可以滑动摇杆
#### _参数列表_

- `Joystick_id [string]` 摇杆 id
- `DirX [number]` 摇杆的操作方向X [0.0, 1.0]
- `DirY [number]` 摇杆的操作方向Y [0.0, 1.0]


```
                (0.0, -1.0)
                    上
                    |
                    |
                    |
(-1.0, 0.0左)一一一摇杆中心(0.0, 0.0)一一一右(1.0, 0.0) 
                    |
                    |
                    |
                    下
                (0.0, 1.0)
```

---


### joystick_touch_moved

**on_joystick_touch_moved(Joystick_id, DirX, DirY)**

滑动摇杆

[只在移动平台使用] 持有焦点,无论手指是否在摇杆控件可视范围内,都能收到滑动事件
#### _参数列表_

- `Joystick_id [string]` 摇杆 id
- `DirX [number]` 摇杆的操作方向X [0.0, 1.0]
- `DirY [number]` 摇杆的操作方向Y [0.0, 1.0]

                
---

### joystick_touch_ended

**on_joystick_touch_ended(Joystick_id, DirX, DirY)**

松开摇杆(手指离开屏幕,不是离开摇杆控件范围)

[只在移动平台使用]
#### _参数列表_

- `Joystick_id [string]` 摇杆 id
- `DirX [number]` 摇杆的操作方向X [0.0, 1.0]
- `DirY [number]` 摇杆的操作方向Y [0.0, 1.0]

                
---