({
    toggleSection : function(component, event, helper) {
        console.log("found button");
        component.set('v.isSidebarCollapsed', !component.get('v.isSidebarCollapsed'));
    },
    // headerToggleSection : function(component, event, helper) {
    //     console.log("found Header button");
    //     component.set('v.isHeaderCollapsed', !component.get('v.isHeaderCollapsed'));
    // },
    scrollToTop: function(component, event, helper) {
        console.log("scrollToTop");
        const main = component.find("mainId").getElement();
        const sidebar = component.find("sidebarId").getElement();
        sidebar.scrollTop = 0;
        main.scrollTop = 0;
        window.scrollTo({ top:0, behavior: 'smooth'});
        var isHeaderCollapsed = component.get('v.isHeaderCollapsed');
        if (isHeaderCollapsed) {
            component.set('v.isHeaderCollapsed', false);
        }
    },
    scrollMainToTop: function(component, event, helper) {
        console.log("scrollMainToTop");
        const main = component.find("mainId").getElement();
        main.scrollTop= 0;
    },

    scrollSidebarToTop: function(component, event, helper) {
        console.log('scrollSidebarToTop')
        const sidebar = component.find("sidebarId").getElement();
        sidebar.scrollTop = 0;
    },

    // handleScroll: function(component, event, helper) {
    //     console.log("fire");
    //     var lastScrollTop = component.get('v.lastScrollTop') || 0;
    //     var main = component.find('mainId').getElement();
    //     var currentScrollTop = main.scrollTop;
    //     console.log("lastScrollTop " + lastScrollTop + "currentScrollTop " + currentScrollTop)
    //     // if(currentScrollTop > lastScrollTop  || currentScrollTop !== 0) {
    //     if(currentScrollTop > lastScrollTop) {
    //         component.set('v.isHeaderHidden', true);
    //         console.log(' header not hidden')
    //     } else {
    //         component.set('v.isHeaderHidden', false);
    //         console.log('header is hidden');
    //     }
    //     component.set('v.lastScrollTop', currentScrollTop);
    // }

    // onRender: function(cmp, event, helper) {

    //     var toggleButton=cmp.find("toggleSectionButton").getElement();
    //     toggleButton.addEventListener('focus', function() {
    //         console.log("side toggle success");
    //         toggleButton.style.outline = 'none';
    //         toggleButton.style.boxShadow = 'none';
    //     });

    //     var toggleHeaderButton=cmp.find("toggleHeaderButton").getElement();
    //     toggleHeaderButton.addEventListener('focus', function() {
    //         console.log("Header toggle success");
    //         toggleHeaderButton.style.outline = 'none';
    //         toggleHeaderButton.style.boxShadow = 'none';
    //     });
    // }
    
// 
//     doneRendering: function(component, event, helper) {
//         let workspaceAPI = component.find("workspace");
//         let sidebarCmp = component.find("sidebar")
//         let headCmp = component.find("head")
//             if(sidebarCmp && headCmp) {
//                 workspaceAPI.getFocusedTabInfo().then(function(response) {
//                 console.log("Done Rendering. Get Focused Tab Info " + JSON.stringify(response));
//                     if(response.parentTabId || response.subtabs.length > 0) {
//                         $A.util.addClass(sidebarCmp, 'sideStyleWithSubtab');
//                         $A.util.removeClass(sidebarCmp, 'sideStyle');
//                         $A.util.addClass(headCmp, 'headerStyleWithSubtab');
//                         $A.util.removeClass(headCmp, 'headerStyle');
//                         console.log("Done Rendering if");
//                     } else {
//                         $A.util.addClass(sidebarCmp, 'sideStyle');
//                         $A.util.removeClass(sidebarCmp, 'sideStyleWithSubtab');
//                         $A.util.addClass(headCmp, 'headerStyle');
//                         $A.util.removeClass(headCmp, 'headerStyleWithSubtab');
//                         console.log("Done Rendering else");
//                     }
//             })
//         }
//     },
            // onRender: function(component, event, helper) {
            //     let workspaceAPI = component.find("workspace");
            //     var headCmp = component.find("head").getElement();
            //     console.log("found headCmp" + headCmp);
            //         workspaceAPI.getFocusedTabInfo().then(function(response) {
            //             if(response.parentTabId || response.subtabs.length > 0) {
            //             var initialTop = headCmp.getBoundingClientRect().top;
                //var originalTop = initialTop;
                // var pageElement = component.find("page").getElement();
                // console.log("found page " + pageElement);
                // const percentOfScreenHeightScrolled = pageElement.scrollTop / pageElement.clientHeight;
                // pageElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
                        // console.log("Top Value = " + initialTop);
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
                        
//                         window.addEventListener('scroll', function() {
//                             if(window.scrollY > 12) {
//                                 console.log(window.scrollY);
//                                 headCmp.style.top = (initialTop - 10) + "px";
//                                 console.log("scroll if " + initialTop);
//                             }
//                         })
//                         } else {
                    
//                         initialTop = headCmp.getBoundingClientRect().top;
//                         window.addEventListener('scroll', function() {
//                             if(window.scrollY > 12) {
//                                 console.log(window.scrollY);
//                                 headCmp.style.top = (initialTop - 10) + "px";
//                                 console.log("scroll if " + initialTop);
//                             } 
//                             })
//                         }
//                     })
                    
//     }
// })
                
                
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
        
        

})