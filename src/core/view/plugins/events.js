import {
  supportsPassive
} from 'uni-shared'

import {
  normalizeDataset
} from 'uni-helpers/index'

import {
  wrapperMPEvent
} from 'uni-helpers/patch'

import getWindowOffset from 'uni-platform/helpers/get-window-offset'

function processTarget (target, detail) {
  const res = {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: normalizeDataset(target.dataset)
  }
  if (detail) {
    Object.assign(res, detail)
  }
  return res
}

function processTouches (touches) {
  if (touches) {
    const res = []

    const {
      top
    } = getWindowOffset()

    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i]
      res.push({
        identifier: touch.identifier,
        pageX: touch.pageX,
        pageY: touch.pageY - top,
        clientX: touch.clientX,
        clientY: touch.clientY - top,
        force: touch.force || 0
      })
    }
    return res
  }
  return []
}

export function processEvent (name, $event = {}, detail = {}, target = {}, currentTarget = {}) {
  if ($event._processed) {
    $event.type = detail.type || name
    return $event
  }

  // fixed 针对小程序 click（tap）事件，补充事件详情
  if (name === 'click') {
    const {
      top
    } = getWindowOffset()

    detail = {
      x: $event.x,
      y: $event.y - top
    }
    $event.touches = $event.changedTouches = [{
      force: 1,
      identifier: 0,
      clientX: $event.clientX,
      clientY: $event.clientY,
      pageX: $event.pageX,
      pageY: $event.pageY
    }]
  }

  // fixed mp-vue
  return wrapperMPEvent({
    type: detail.type || name,
    timeStamp: $event.timeStamp || 0,
    detail: detail,
    target: processTarget(target, detail),
    currentTarget: processTarget(currentTarget),
    // 只处理系统事件
    touches: $event instanceof Event ? processTouches($event.touches) : $event.touches,
    changedTouches: $event instanceof Event ? processTouches($event.changedTouches) : $event.changedTouches,
    preventDefault () { },
    stopPropagation () { }
  })
}

const LONGPRESS_TIMEOUT = 350
const LONGPRESS_THRESHOLD = 10

const passiveOptions = supportsPassive ? {
  passive: true
} : false

let longPressTimer = false

function clearLongPressTimer () {
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = false
  }
}

let startPageX = 0
let startPageY = 0

function touchstart (evt) {
  clearLongPressTimer()
  if (evt.touches.length !== 1) {
    return
  }
  const {
    touches: [{
      pageX,
      pageY
    }]
  } = evt

  startPageX = pageX
  startPageY = pageY

  longPressTimer = setTimeout(function () {
    evt.target.dispatchEvent(new TouchEvent('longpress', {
      bubbles: true,
      cancelable: true,
      target: evt.target,
      currentTarget: evt.currentTarget,
      touches: evt.touches,
      changedTouches: evt.changedTouches
    }))
  }, LONGPRESS_TIMEOUT)
}

function touchmove (evt) {
  if (!longPressTimer) {
    return
  }

  if (evt.touches.length !== 1) {
    return clearLongPressTimer()
  }

  const {
    touches: [{
      pageX,
      pageY
    }]
  } = evt

  if (Math.abs(pageX - startPageX) > LONGPRESS_THRESHOLD || Math.abs(pageY - startPageY) > LONGPRESS_THRESHOLD) {
    return clearLongPressTimer()
  }
}

export function initEvents () {
  window.addEventListener('touchstart', touchstart, passiveOptions)
  window.addEventListener('touchmove', touchmove, passiveOptions)
  window.addEventListener('touchend', clearLongPressTimer, passiveOptions)
  window.addEventListener('touchcancel', clearLongPressTimer, passiveOptions)
}
