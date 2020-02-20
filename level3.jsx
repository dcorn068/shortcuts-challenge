// ------ START ------

function cleanup() {
  return updateData({
    item1: data.item1,
    item2: data.item2,
    item3: data.item3,
    item4: data.item4,
    item5: data.item5,
    item6: data.item6
  });
}

// ------ FINISH ------

function cleanup() {
  const { item1, item2, item3, item4, item5, item6 } = data;

  return updateData({
    item1,
    item2,
    item3,
    item4,
    item5,
    item6
  });
}

//
// 💡 Ctrl D - add next instance to selection
//
// 💡 Ctrl Shift L - add cursors to line ends
//
// 💡 Shift Alt UpArrow / DownArrow - add cursor above / below
//
// 💡 Shift Alt Mouse-drag - rectangular selection
