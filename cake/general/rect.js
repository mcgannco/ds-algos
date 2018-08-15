function intersection(rect1, rect2) {
  if(isIntersected(rect1, rect2)) {
    let newRect = buildRect(rect1, rect2);
    return newRect;
  } else {
    return "no intersection"
  }
}

function isIntersected(rect1, rect2) {
  let mostLeft;
  let mostRight;
  let highest;
  let lowest;
  if(rect1.leftX >= rect2.leftX) {
    mostRight = rect1;
    mostLeft = rect2;
  } else {
    mostRight = rect2;
    mostLeft = rect1;
  }

  if(rect1.bottomY >= rect2.bottomY) {
    highest = rect1;
    lowest = rect2;
  } else {
    highest = rect2;
    lowest = rect1;
  }

  if((mostRight.leftX >= mostLeft.leftX) && (mostRight.leftX <= (mostLeft.leftX + mostLeft.width)) &&
  ((highest.bottomY >= lowest.bottomY) && (highest.bottomY <= (lowest.bottomY + lowest.height)))
) {
  return true
} else {
  return false
}
}

function buildRect(rect1, rect2) {
  left = Math.max(rect1.leftX, rect2.leftX);
  right = Math.min((rect1.leftX + rect1.width), (rect2.leftX + rect2.width) )
  bottom = Math.max(rect1.bottomY, rect2.bottomY)
  topp = Math.min((rect1.bottomY + rect1.height), (rect2.bottomY + rect2.height))

  return {
    leftX: left,
    bottomY: bottom,
    width: Math.abs(right - left),
    height: Math.abs(topp - bottom),
  }
}

let rect1 = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3
}

let rect2 = {
  leftX: 5,
  bottomY: 2,
  width: 3,
  height: 6
}

let rect3 = {
  leftX: 2,
  bottomY: 2,
  width: 1,
  height: 2
}
