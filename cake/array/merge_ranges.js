function mergeRanges(meetings) {
  let sortedMeetings = mergeSort(meetings)
  let condensedMeetings = [];
  sortedMeetings.forEach(meeting => {
      if(condensedMeetings && condensedMeetings.length === 0) {
        condensedMeetings.push(meeting)
      } else {
        let lastMeeting = condensedMeetings[condensedMeetings.length - 1];
        if(meeting.startTime <= lastMeeting.endTime) {
          condensedMeetings[condensedMeetings.length - 1] = {startTime: lastMeeting.startTime, endTime: Math.max(meeting.endTime, lastMeeting.endTime)}
        } else {
          condensedMeetings.push(meeting)
        }
      }
    }
  )
  return condensedMeetings
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

function merge(left, right) {
  const merged = [];

 while (left.length > 0 && right.length > 0) {
   let nextItem = (left[0].startTime < right[0].startTime) ? left.shift() : right.shift();
   merged.push(nextItem);
 }

 return merged.concat(left, right);
}
