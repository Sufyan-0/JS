let visitCount = +(localStorage.getItem('visitCount') || 0);
visitCount++;
localStorage.setItem('visitCount', visitCount);
alert("You have visited this page " + visitCount + " times.");
