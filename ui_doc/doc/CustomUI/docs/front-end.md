# 界面接口用法

在 lua 代码中调用：
common.InvokeFrontEndMethod( *界面接口名*, *参数1*, *参数2*, ... )

例如 ： 
```
-- 在 lua 中调用 set_text(label_id, text) 方法
common.InvokeFrontEndMethod("set_text", "label", "测试文本")
```

---

### create_custom_ui

**create_custom_ui(json_str)**

根据 json 字符串所描述的界面信息创建界面，json 的定义参见 [界面描述文件](json-define.md)

#### _参数列表_

* `json_str [string]` - 用于描述界面的 json 字符串.

---

### show

**show(control_id)**

显示控件

#### _参数列表_

* `control_id [string]` - 控件 id

---

### show_with_animation

**show_with_animation(control_id, animation)**

显示控件（带动画效果)

#### _参数列表_

 * `control_id [string]` 控件 id
 * `animation [string]` 动画效果名称，可用的动画效果列表参见 [动画效果预览](../animation/Animate.css.html)

---

### hide

**hide(control_id)**

隐藏控件

#### _参数列表_

* `control_id [string]` - 控件 id

---

### hide_with_animation

**hide_with_animation(control_id, animation)**

隐藏控件（带动画效果)

#### _参数列表_

* `control_id [string]` 控件 id
* `animation [string]` 动画效果名称，可用的动画效果列表参见 [动画效果预览](../animation/Animate.css.html)

---

### show_animation

**show_animation(control_id, animation)**

只播放动画效果，不隐藏/显示控件

#### _参数列表_

* `control_id [string]` 控件 id
* `animation [string]` 动画效果名称，可用的动画效果列表参见 [动画效果预览](../animation/Animate.css.html)

---

### set_enable

**set_enable(control_id, enable, reason)**

启用/禁用按钮

#### _参数列表_

* `button_id [string]` 按钮 id
* `enable [bool]` 是否可用
* `reason [string]` 禁用原因

---

### toggle_button

**toggle_button(button_id)**

切换按钮的开关状态，仅当按钮的 `toggle` 属性为 true 时有效

#### _参数列表_

* `button_id [string]` 按钮 id

---

### set_toggle

**set_toggle(button_id, toggle)**

设置按钮的开关状态，仅当按钮的 `toggle` 属性为 true 时有效

#### _参数列表_

* `button_id [string]` 按钮 id
* `toggle [bool]` 开关状态 true / false

---

### set_text

**set_text(control_id, text)**

设置文本

#### _参数列表_

* `control_id [string]` 控件 id
* `text [string]` 文本

---

### set_focus

**set_text(input_id)**

让输入框获取焦点

#### _参数列表_

* `input_id [string]` 输入框控件 id

---

### set_color

**set_color(control_id, color)**

设置文本颜色

#### _参数列表_

* `control_id [string]` 控件 id
* `color [string]` 颜色值，如 `#aabbcc` 或 `rgba(255, 200, 100, 0.5)`

---

### set_font_size

**set_color(control_id, font_size)**

设置文本字体大小

#### _参数列表_

* `control_id [string]` 控件 id
* `font_size [number]` 字体大小，单位像素

---

### add_child

**add_child(control_id, json_str)**

为指定控件添加一个子控件，子控件需要提供相对于父控件的坐标偏移量 `x` 和 `y`

#### _参数列表_

* `control_id [string]` 控件 id
* `json_str [string]` 子控件的界面描述信息

---
### append_child

**append_child(control_id, json_str)**

用于向浮动布局的容器中追加子控件，子控件不需要提供坐标信息 `x` 和 `y`，
父控件会自动将子控件布局到默认位置

#### _参数列表_

* `control_id [string]` 控件 id
* `json_str [string]` 子控件的界面描述信息

---
### remove_control

**remove_control(control_id)**

删除控件以及控件下的全部子控件

#### _参数列表_

* `control_id [string]` 控件 id

---
### set_position

**set_position(control_id, x, y)**

设置控件坐标

#### _参数列表_

* `control_id [string]` 控件 id
* `x [int]` x 坐标
* `y [int]` y 坐标

---
### set_control_size

**set_control_size(control_id, x, y)**

设置控件宽高

#### _参数列表_

* `control_id [string]` 控件 id
* `w [int]` 控件宽度
* `h [int]` 控件高度

---
### request_control_rect

**request_control_rect(control_id)**

请求获取控件位置及宽高

这个接口是异步的，前端会派发事件 `on_get_control_rect` 给 lua，控件的位置和宽高作为事件的参数传给用户

#### _参数列表_

* `control_id [string]` 控件 id

#### _返回值_

**on_get_control_rect(rect)**

* `rect.x [int]` `rect.y [int]` `rect.w [int]` `rect.h [int]` 控件的位置和宽高

---

### scroll_to

**scroll_to(control_id, pos)**

设置有滚动区域的控件（目前只支持 panel）中滚动条位置

#### _参数_

* `control_id [string]` 控件 id
* `pos [number]` 滚动条位置

---
### set_z_index

**set_z_index(control_id, z_index)**

设置控件层级

#### _参数列表_

* `control_id [string]` 控件 id
* `z_index [int]` 控件层级

---
### set_max_value

**set_max_value(process_id, max_value)**

设置进度条最大值

#### _参数列表_

* `process_id [string]` 进度条 id
* `max_value [float]` 进度条最大值

---
### set_current_value

**set_current_value(process_id, current_value)**

设置进度条当前值

#### _参数列表_

* `process_id [string]` 进度条 id
* `current_value [float]` 进度条当前值

---
### set_enable_drag

**set_enable_drag(button_id, enable)**

设置按钮是否允许拖放

#### _参数列表_

* `button_id [string]` 按钮 id
* `enable [bool]` true/false

---
### append_item

**append_item(button_group_id, button_json_str)**

为按钮组添加一个按钮

#### _参数列表_

* `button_group_id [string]` 按钮组 id
* `button_json_str [string]` 按钮的界面描述信息

---

### set_item_count

**set_item_count(button_group_id, item_count)*

修改按钮组中显示的格子数量

#### _参数列表_

* `button_group_id [string]` 按钮组 id
* `item_count [int]` 格子数量

---
### remove_item

**remove_item(button_group_id, button_id)**

移除按钮组中的指定按钮

#### _参数列表_

* `button_group_id [string]` 按钮组 id
* `button_json_str [string]` 按钮 id

---
### set_normal_image

**set_normal_image(button_id, image_path)**

设置按钮图片

#### _参数列表_

* `button_id [string]` 按钮 id
* `image_path [string]` 图片路径

---

### set_background_image

**set_background_image(control_id, image_path)**

设置控件背景图片

#### _参数列表_

* `control_id [string]` 控件 id
* `image_path [string]` 图片路径

---

### set_tooltip

**set_tooltip(control_id, json_str, offset_x, offset_y)**

设置控件的提示框，一般在鼠标移入控件的时候调用此接口。

提示框具体显示内容由 `json_str` 中配置的界面描述信息决定。默认情况下，提示框显示在控件的正上方，`offset_x` 和 `offset_y` 可以进一步调整控件的位置。

如果需要提示框自适应宽度，在 `json_str` 中配置的界面描述信息中不提供宽度属性 `w` 即可。

#### _参数列表_

* `control_id [string]` 控件 id
* `json_str [string]` 提示框的界面描述信息，可以是任意控件，如内含子控件的 panel
* `offset_x [int]` 横轴的偏移量
* `offset_y [int]` 纵轴的偏移量

---

### remove_tooltip

**remove_tooltip()**

移除控件的提示框，一般在鼠标移出控件时调用此接口

---

### set_cooldown

**set_cooldown(button_id, left_time, total_time, show_text)**

设置按钮的冷却效果，如技能、buff 的冷却效果等。

一般情况下不需要直接调用此接口，因为技能、buff 等常用界面逻辑已经被封装好了。

#### _参数列表_

* `button_id [string]` 按钮 id
* `left_time [float]` 剩余时间
* `total_time [float]` 总时间
* `show_text [bool]` 是否显示倒计时数字

---

### hide_cooldown

**hide_cooldown(button_id)**

隐藏按钮的冷却效果。

一般情况下不需要直接调用此接口，因为技能、buff 等常用界面逻辑已经被封装好了。

#### _参数列表_

* `button_id [string]` 按钮 id

---

### play_animation

**play_animation(label_id, animation_path, image_count, infinite, repeat_times)**

播放序列帧动画。

序列帧动画图片需要单独放在一个目录里，每帧命名为 `0_00001.png`, `0_00002.png`,`0_00003.png` 以此类推。

#### _参数列表_

* `label_id [string]` 动画控件 id (一般是一个标签)
* `animation_path [string]` 存放动画序列帧图片的目录
* `image_count [int]` 序列帧数量
* `infinite [int]` 0 或 1，代表是否循环播放
* `repeat_times [int]` 每帧重复播放几次，一般为 1

---

### stop_animation

**stop_animation(label_id)**

停止播放序列帧动画

#### _参数列表_

* `label_id [string]` 动画控件 id (一般是一个标签)

---

### play_video

**play_video(video_id, video_src, loading_image, loop, show_last_frame)**

播放视频，必须为 `webm` 格式

#### _参数列表_

* `video_id [string]` 视频控件的 id
* `video_src [string]` 视频路径
* `loading_image [string]` 视频加载时显示的图片路径
* `loop [bool]` 是否循环播放
* `show_last_frame [bool]` 播完是否停留在最后一帧

---

### pause_video

**pause_video(video_id)**

暂停视频

#### _参数列表_

* `video_id [string]` 视频控件的 id

---

### resume_video

**resume_video(video_id)**

继续播放视频

#### _参数列表_

* `video_id [string]` 视频控件的 id

---

### replay_video

**replay_video(video_id)**

重新播放视频

#### _参数列表_

* `video_id [string]` 视频控件的 id

---

### stop_play_video

**stop_play_video()**

停止播放视频

---
### clear_canvas

**clear_canvas(canvas_id)**

清空画布控件

#### _参数列表_

* `canvas_id [string]` 画布控件 id

---
### draw_arc

**draw_arc(canvas_id, params)**

在画布控件上画圆弧

#### _参数列表_

* `canvas_id [string]` 画布控件 id
* `params [string]` 圆弧相关参数，是一个 json 字符串，包含如下属性：
    * `x [int]` - 圆心起始 x 坐标
    * `y [int]` - 圆心起始 y 坐标
    * `radius [int]` - 半径
    * `start_arc [int]` - 起始点的角度,取值范围 0 ~ 360,可指定正负
    * `end_arc [int]` - 结束点的角度
    * `color [string]` - 颜色
    * `line_width [int]` - 线的粗细，-1 为填充

---
### draw_rect

**draw_rect(canvas_id, params)**

在画布控件上画矩形

#### _参数列表_

* `canvas_id [string]` 画布控件 id
* `params [string]` 矩形相关参数，是一个 json 字符串，包含如下属性：
    * `x [int]` - 起始 x 坐标
    * `y [int]` - 起始 y 坐标
    * `w [int]` - 宽度
    * `h [int]` - 高度
    * `color [string]` - 颜色
    * `line_width [int]` - 线的粗细，-1 为填充

---
### draw_line

**draw_line(canvas_id, params)**

在画布控件上画线

#### _参数列表_

* `canvas_id [string]` 画布控件 id
* `params [string]` 画线相关参数，是一个 json 字符串，包含如下属性：
    * `src_x [int]` - 起始 x 坐标
    * `src_y [int]` - 起始 y 坐标
    * `dst_x [int]` - 目标 x 坐标
    * `dst_y [int]` - 目标 y 坐标
    * `color [string]` - 颜色
    * `line_width [int]` - 线的宽度

---
### draw_lines

**draw_lines(canvas_id, params)**

在画布上画折线

#### _参数列表_

* `canvas_id [string]` 画布控件 id
* `params [string]` 画折线相关参数，是一个 json 字符串，包含如下属性：
    * `points [array]` - 折线上拐点的数组，`[{x1, y1}, {x2, y2} ...]`
    * `color [string]` - 颜色
    * `line_width [int]` - 线的宽度

---
### play_animation_on_canvas

**play_animation_on_canvas(canvas_id, params)**

在画布上播放序列帧动画，序列帧的命名规则详见 [play_animation](#play_animation)

#### _参数列表_

* `canvas_id [string]` 画布控件 id
* `params [string]` 播放动画的相关参数，是一个 json 字符串，包含如下属性：
    * `x [int]` 动画中心的 x 坐标
    * `y [int]` 动画中心的 y 坐标
    * `w [int]` 动画的宽度
    * `h [int]` 动画的高度
    * `animation_path [string]` 序列帧路径
    * `frame_coutn [int]` 序列帧图片数量
    * `loop [bool]` 是否循环播放
    * `loop_start [int]` (可选) 从第几帧开始循环播放
    * `duration [int]` 持续时间，单位毫秒

---

### preload_image_folder

**preload_image_folder(image_folder_path, image_count)**

预加载序列帧图片。

当序列帧图片过大，数量过多时，第一次播放序列帧时会卡顿。可以在界面初始化的时候调用此接口将序列帧图片预加载一下，让序列帧动画能够流畅播放

#### _参数列表_

* `image_folder_path [string]` 序列帧图片目录
* `image_count [int]` 序列帧数量

---

### preload_image_folder

**preload_image_folder(image_folder_path, image_count)**

预加载序列帧图片。

当序列帧图片过大，数量过多时，第一次播放序列帧时会卡顿。可以在界面初始化的时候调用此接口将序列帧图片预加载一下，让序列帧动画能够流畅播放

#### _参数列表_

* `image_folder_path [string]` 序列帧图片目录
* `image_count [int]` 序列帧数量

---

### show_global_mask

**game.show_global_mask()**

显示蒙版

---

### hide_global_mask

**game.hide_global_mask()**

隐藏蒙版

---

### set_global_mask

**game.set_global_mask(mask_info)**

设置蒙版的颜色，以及镂空区域信息

#### _参数列表_

* `mask_info [string]` 一个 json 字符串，包含如下参数
    - `mask_color [string]` 蒙版颜色
    - `clip_area [array]` 镂空区域数组，包含的对象的属性如下：
        - `type [string]` 可以是矩形 `rect` 或圆形 `circle`
        - `x [number]` `y [number]` 矩形起点坐标或圆形圆心坐标
        - `r [number]` 圆形半径
        - `w [number]` `h [number]` 矩形宽高

---