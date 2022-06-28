searchPerson = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.linkedin.com/search/results/people/?keywords=" + query + "&origin=CLUSTER_EXPANSION&position=0"});
  //chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + query + "&title=Special%3ASearch&go=Go"});
};

chrome.contextMenus.create({
  title: "Search for person",
  contexts:["selection"],
  onclick: searchPerson
});

searchCompany = function(word){
  var query = word.selectionText;
  //chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + query + "&title=Special%3ASearch&go=Go"});
  chrome.tabs.create({url:"https://www.linkedin.com/search/results/companies/?keywords=" + query})
};

chrome.contextMenus.create({
  title: "Search for company",
  contexts:["selection"],
  onclick: searchCompany
});
