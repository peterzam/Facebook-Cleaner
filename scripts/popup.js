document.getElementById('showID').addEventListener('click', showID);
document.getElementById('delReact').addEventListener('click', delReact);
document.getElementById('delComment').addEventListener('click', delComment);
document.getElementById('clearSearch').addEventListener('click', clearSearch);
document.getElementById('clearWatched').addEventListener('click', clearWatched);
document.getElementById('delUnfollowed').addEventListener('click', delUnfollowed);
document.getElementById('delStoriesReact').addEventListener('click', delStoriesReact);
document.getElementById('delArchivedStories').addEventListener('click', delArchivedStories);
document.getElementById('delSentFriReq').addEventListener('click', delSentFriReq);
document.getElementById('delVoted').addEventListener('click', delVoted);
document.getElementById('delHidden').addEventListener('click', delHidden);
document.getElementById('delPhotos').addEventListener('click', delPhotos);
document.getElementById('delSaved').addEventListener('click', delSaved);

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'var id = document.getElementsByClassName("_2s25 _606w")[0].href;'}
        );
  });

function showID() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'alert(id.slice(25))'}
            );
      });

  }

function delReact() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delReact.js" });
          }); 
    });
}

function delComment() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delComment.js" });
          }); 
    });
}

function clearSearch() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/clearSearch.js" });
          }); 
    });
}

function delStoriesReact() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delStoriesReact.js" });
          }); 
    });
}

function delArchivedStories() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delArchivedStories.js" });
          }); 
    });
}

function delSentFriReq() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delSentFriReq.js" });
          }); 
    });
}

function clearWatched() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/clearWatched.js" });
          }); 
    });
}
function delVoted() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delVoted.js" });
          }); 
    });
}

function delUnfollowed() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delUnfollowed.js" });
          }); 
    });
}

function delHidden() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delHidden.js" });
          }); 
    });
}

function delPhotos() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delPhotos.js" });
          }); 
    });
}

function delSaved() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(null, { file: "scripts/jquery.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "scripts/delSaved.js" });
          }); 
    });
}