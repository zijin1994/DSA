// # Meeting Room II


// # Given an array of meeting time intervals consisting of start and end times 
// # [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms 
// # required. 

// # Example 1: 

// # Input: [[0, 30],[5, 10],[15, 20]] 
// # Output: 2 

// # Example 2: 

// # Input: [[7,10],[2,4]] 
// # Output: 1

// # Test cases
let print = console.log;

function rooms(arrs) {
    let sortedArrs = arrs.slice().sort((a, b) => a[1] - b[1]);

    let rooms = 1;
    let end = sortedArrs[0][1];

    let currMeeting = 1;

    while (currMeeting < sortedArrs.length) {
        let currMeetingStart = sortedArrs[currMeeting][0];

        if (currMeetingStart < end) {
          rooms++;  
        }
        
        end = Math.min(sortedArrs[currMeeting][1], end);
        currMeeting++;
    }
    return rooms;
}

function rooms(meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let maxRooms = 0;
    let currentMeetings = [];
    
    for (let i = 0; i < meetings.length; i++) {
      currentMeetings.push(meetings[i]);
      
      currentMeetings = currentMeetings.filter(meeting => {
        return meeting[1] > meetings[i][0];
      });
  
      if (maxRooms < currentMeetings.length) {
        maxRooms = currentMeetings.length;
      }
    }
  
    return maxRooms;
  }


  var minMeetingRooms = function(arrs) {
    if (arrs.length === 0) return 0;
    
    let start = [];
    let end = [];

    for (let idx = 0; idx < arrs.length; idx++) {
        [start[idx], end[idx]] = [arrs[idx][0], arrs[idx][1]];
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    let rooms = 0;
    let startIdx = 0;
    let endIdx = 0;

    while (startIdx < arrs.length) {

        if (start[startIdx] >= end[endIdx]) {
          rooms--;
          endIdx++;  
        }
        
        rooms++;
        startIdx++;
    }
    return rooms;

};

print(rooms([[0, 30], [5, 10], [15, 20]]) == 2)                   
print(rooms([[7, 10], [2, 4]]) == 1)                               
print(rooms([[1, 2], [3, 4], [5, 6]]) == 1)                         
print(rooms([[1, 4], [2, 5], [3, 6]]) == 3)               
print(rooms([[1, 3], [3, 6], [6, 8]]) == 1)                          
print(rooms([[1, 10]]) == 1)                                        
print(rooms([[1, 3], [2, 4], [4, 6]]) == 2)                          
print(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) == 2)                
print(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) == 3) 
print(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) == 1)            
print(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) == 2)         
print(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) == 4) 

// # All test cases should print True