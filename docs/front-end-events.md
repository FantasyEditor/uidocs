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


