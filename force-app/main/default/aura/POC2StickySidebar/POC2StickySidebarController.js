({
    toggleSection : function(component, event, helper) {
        component.set('v.isSidebarCollapsed', !component.get('v.isSidebarCollapsed'));
    },
// ,
//     onRender: function(component, event, helper) {
//         let workspaceAPI = component.find("workspace");
//         workspaceAPI.isConsoleNavigation().Then(function(isConsole) {
//             if (isConsole) {
//                 let headerCmp = component.find("c-header").getElement();
//                     if(headerCmp) {
//                         var initialHeaderTop = headerCmp.getBoundingClientRect().top;
//                         console.log("initialHeaderTop " + initialHeaderTop);
//                         if(headerCmp) {
//                             workspaceAPI.getFocusedTabInfo().then(function(response) {
                                
//                             console.log("Done Rendering. Get Focused Tab Info " + JSON.stringify(response));
                                // if(response.parentTabId || response.subtabs.length > 0) {
                                //     $A.util.addClass(sidebarCmp, 'sideStyleWithSubtab');
                                //     $A.util.removeClass(sidebarCmp, 'sideStyle');
                                //     console.log("Done Rendering if");
                                // } else {
                                //     $A.util.addClass(sidebarCmp, 'sideStyle');
                                //     $A.util.removeClass(sidebarCmp, 'sideStyleWithSubtab');
                                //     console.log("Done Rendering else");
                                // }
                                // if(response.parentTabId || response.subtabs.length > 0) {
                                //     let headerTop = headerCmp.getBoundingClientRect.top;
                                //     console.log(headerTop);
                                //     headerCmp.style.top = (initialHeaderTop - 20) + "px";
                                //         console.log("sticky top " + headerStyle.top - 20);
                                    // $A.util.addClass(headerCmp, 'headerStyleWithSubtab');
                                    // $A.util.removeClass(headerCmp, 'headerStyle');
        //                             headerTop = headerCmp.getBoundingClientRect.top;
        //                             console.log("Done Rendering if " + headerTop);
        //                         } else {
        //                             let headerTop = headerCmp.getBoundingClientRect.top;
        //                             console.log(headerTop);
        //                             // $A.util.addClass(headerCmp, 'headerStyle');
        //                             // $A.util.removeClass(headerCmp, 'headerStyleWithSubtab');
        //                             headerCmp.style.top = (initialHeaderTop - 20) + "px";
        //                                 console.log("sticky top " + headerCmp.top - 20);
        //                             console.log("Done Rendering else");
        //                         }
        //                 });
        //             }
        //         }
        //     }
        
        // });
        
    //}
    // onRender: function(cmp, event, helper) {
    // Intersection Observer logic for sidebar items
    // var cards = document.querySelectorAll(".card");
    // var observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         entry.target.classList.toggle("show", entry.isIntersecting);
    //     });
    // }, {
    //     threshold: .25
    // });

    // cards.forEach(card => {
    //     observer.observe(card);
    // });
    onRender: function(cmp, event, helper) {
        var scrollableContent = cmp.find("scrollableContent").getElement();
        var cards = scrollableContent.querySelectorAll(".card");

        let lastScrollTop = scrollableContent.scrollTop;

        const observerOptions = {
            root: scrollableContent,
            threshold: 0
        };

        const handleTopIntersect = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top < 0) {
                    const lastCard = scrollableContent.lastElementChild;
                    scrollableContent.insertBefore(lastCard, scrollableContent.firstElementChild);

                    // Reobserve first and last elements to keep the cycle going
                    topObserver.unobserve(scrollableContent.firstElementChild);
                    bottomObserver.unobserve(scrollableContent.lastElementChild);
                    topObserver.observe(scrollableContent.firstElementChild);
                    bottomObserver.observe(scrollableContent.lastElementChild);
                }
            });
        };

        const handleBottomIntersect = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.bottom > scrollableContent.clientHeight) {
                    const firstCard = scrollableContent.firstElementChild;
                    scrollableContent.appendChild(firstCard);

                    // Reobserve first and last elements to keep the cycle going
                    topObserver.unobserve(scrollableContent.firstElementChild);
                    bottomObserver.unobserve(scrollableContent.lastElementChild);
                    topObserver.observe(scrollableContent.firstElementChild);
                    bottomObserver.observe(scrollableContent.lastElementChild);
                }
            });
        };

        const topObserver = new IntersectionObserver(handleTopIntersect, observerOptions);
        const bottomObserver = new IntersectionObserver(handleBottomIntersect, observerOptions);

        // Initial observation
        topObserver.observe(scrollableContent.firstElementChild);
        bottomObserver.observe(scrollableContent.lastElementChild);

        // Observer for all cards to toggle visibility
        const visibilityObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
            });
        }, observerOptions);

        cards.forEach(card => {
            visibilityObserver.observe(card);
        });
    }
})