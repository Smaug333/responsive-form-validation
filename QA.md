# Answers

1.1
- Tested and reliable Gridsystem
- CrossBrowser tested stylings for HTML-Elements
- Great Community
- many ready to use Components
- Most interactive elements in normal ui covered (modal, tabs, dropdowns, ...)

1.2
It always makes sense to use preprocessors for css
Enhancing and fastening development roundtrip
Many tasks can be automated, like browserprefixing, cleaning up code, copy tasks etc. Why do it by hand when the machine can do it quicker for me.

2.0
- Use namespaces
- Frameworks like terrifically
- CommonJs
- AMD
- ES6

2.1
In most cases it's better to use a Plugin. They are well tested by the community and cover problems you may not think of (saving debug time).
If just very basic funtionality is needed, you may code it yourself to spare download time and complexity. Often plugins provide more functionality than really needed.

2.4
- Unbind events when binding is not needed anymore.
- Always use var when defining variables.
- When deleting DOMNodes make sure also to delete every other references to it in vars, setIntervals/Timeouts.
- Use Chromes Memory Profiling Tool to detect memory leaks.

3.1
```
$.ajax({
type:'POST',
url: 'https://.../',
beforeSend: function() {
//show spinner or something
},
data: {...}, // data to be send
success: function (data) {
// or done
// remove spinner
// do something with recieved data
}
error: function(xhr, status, error) {
// remove spinner
// provide useful errormessage to user
}
})
```

3.2
In my opion ajax requests are always the right choice, because the user experience is better handled with it (show spinner, end spinner, show success or error). No Page refresh.

3.3
Http Codes show if a request was successful or not. If not they tell what exactly went wrong, the ui can react accordingly (bad request, not found, timedout). From Developers view maybe 4xx error codes are most important telling the user that and how their request went wrong.
