({
    toggleSection : function(component, event, helper) {
        console.log("found button");
        component.set('v.isSidebarCollapsed', !component.get('v.isSidebarCollapsed'));
    },
    
// 
    doneRendering: function(component, event, helper) {
        let workspaceAPI = component.find("workspace");
        let sidebarCmp = component.find("sidebar")
        let headCmp = component.find("head")
            if(sidebarCmp && headCmp) {
                workspaceAPI.getFocusedTabInfo().then(function(response) {
                console.log("Done Rendering. Get Focused Tab Info " + JSON.stringify(response));
                    if(response.parentTabId || response.subtabs.length > 0) {
                        $A.util.addClass(sidebarCmp, 'sideStyleWithSubtab');
                        $A.util.removeClass(sidebarCmp, 'sideStyle');
                        $A.util.addClass(headCmp, 'headerStyleWithSubtab');
                        $A.util.removeClass(headCmp, 'headerStyle');
                        console.log("Done Rendering if");
                    } else {
                        $A.util.addClass(sidebarCmp, 'sideStyle');
                        $A.util.removeClass(sidebarCmp, 'sideStyleWithSubtab');
                        $A.util.addClass(headCmp, 'headerStyle');
                        $A.util.removeClass(headCmp, 'headerStyleWithSubtab');
                        console.log("Done Rendering else");
                    }
            })
        }
    },

    
            onRender: function(component, event, helper) {
                let workspaceAPI = component.find("workspace");
                var headCmp = component.find("head").getElement();
                console.log("found headCmp" + headCmp);
                var FirstTop = headCmp.getBoundingClientRect().top;
                var initialTop = headCmp.getBoundingClientRect().top;
                    workspaceAPI.getFocusedTabInfo().then(function(response) {
                        console.log("Done Rendering. Get Focused Tab Info " + JSON.stringify(response));
                        if(response.parentTabId || response.subtabs.length > 0) {
                        
                //var originalTop = initialTop;
                // var pageElement = component.find("page").getElement();
                // console.log("found page " + pageElement);
                // const percentOfScreenHeightScrolled = pageElement.scrollTop / pageElement.clientHeight;
                // pageElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
                        //console.log("Top Value = " + initialTop);
                // console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
                        //if (initialTop) {
                // window.addEventListener("scroll", function() {
                //     // var headCmp = component.find("head").getElement();
                //     // console.log("found headCmp" + headCmp);
                //     var htmlElement = document.documentElement;
                //     var percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
                //     htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
                //     console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
                //     headCmp.style.setProperty("top", initialTop - 15);
                    
                // });
                        // initialTop = headCmp.getBoundingClientRect().top;
                        window.addEventListener('scroll', function() {
                            if(window.scrollY > 12) {
                                console.log(window.scrollY);
                                headCmp.style.top = (initialTop - 10) + "px";
                                console.log("subtab if " + initialTop);
                            }
                        })
                        } else {
                    
                        var noTabTop = headCmp.getBoundingClientRect().top;
                        window.addEventListener('scroll', function() {
                            if(window.scrollY > 12) {
                                console.log(window.scrollY);
                                headCmp.style.top = (noTabTop - 10) + "px";
                                console.log("notab if " + noTabTop);
                            } 
                            })
                        }
                    })
                    
    }
})
                
                
                //     workspaceAPI.getFocusedTabInfo().then(function(response) {
                //         if(response.parentTabId || response.subtabs.length > 0) {
                //             initialTop = headCmp.getBoundingClientRect().top;
                //             console.log(tabSpaceTop + "if");
                //     } 

                // })
                // if (initialTop) {
                //     console.log("found cmp")
                //     window.addEventListener('scroll', function() {
                //     if(window.scrollY < 100) {
                //         header.style.top = (initialTop - 10) + "px";
                //         console.log("scroll if " + initialTop);
                //     } else {
                //         header.style.top = initialTop + "px";
                //         console.log("scroll else " + initialTop);
                //     }
                
         
                //     });
                //}
                //}
            // setScrollVar: function(component, event, helper) {
            // var headCmp = component.find("head").getElement();
            //     console.log("found headCmp" + headCmp);
            //     var htmlElement = document.documentElement;
            //     var percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
            //     htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
            //     console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
            // }
//})


                
                
                //     workspaceAPI.getFocusedTabInfo().then(function(response) {
                //         if(response.parentTabId || response.subtabs.length > 0) {
                //             initialTop = headCmp.getBoundingClientRect().top;
                //             console.log(tabSpaceTop + "if");
                //     } 

                // })
                // if (initialTop) {
                //     console.log("found cmp")
                //     window.addEventListener('scroll', function() {
                //     if(window.scrollY < 100) {
                //         header.style.top = (initialTop - 10) + "px";
                //         console.log("scroll if " + initialTop);
                //     } else {
                //         header.style.top = initialTop + "px";
                //         console.log("scroll else " + initialTop);
                //     }
                
         
                //     });
                //}
                //}
            // setScrollVar: function(component, event, helper) {
            // var headCmp = component.find("head").getElement();
            //     console.log("found headCmp" + headCmp);
            //     var htmlElement = document.documentElement;
            //     var percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
            //     htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
            //     console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
            // }
        
        

//})