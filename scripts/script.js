// intially active tab is first 
var activeTab = 1;
setActiveTab = (tabNum, view) => {
    if (view == "mobileView") {
        document.getElementsByClassName(tabNum)[0].click();
    }
    else {
        document.getElementsByClassName(tabNum)[1].click();
    }
    activeTab = tabNum;
    resizeContainer1();
}
resizeContainer = (contactName, lastSeenTime, imgSrc = "images/propic.png") => {
    var element;
    const rightContainer = 'right-container' + activeTab;
    const mobileView = "mobile-view" + activeTab;
    document.getElementById('rightContactName' + activeTab).innerHTML = contactName;
    document.getElementById('lastSeenTime' + activeTab).innerHTML = "Last seen " + lastSeenTime;
    document.getElementById('right-profile-pic' + activeTab).src = imgSrc;
    if (screen.width < 768 || window.innerWidth < 768) {
        element = document.getElementById(rightContainer);


        if (element !== null) {
            element.id = mobileView

        }
        else {
            element = document.getElementById(mobileView);
        }

    }
    else {

        element = document.getElementById(mobileView);
        if (element !== null) {
            element.id = rightContainer
        }
        else {
            element = document.getElementById(rightContainer);
        }
    }

    if (element !== null) {

        element.style.display = 'block';
    }
    // displaying back-icon only in mobile-view
    toggleBackButton(activeTab, rightContainer);
}
resizeContainer1 = () => {
    const rightContainer = 'right-container' + activeTab;
    const mobileView = "mobile-view" + activeTab;
    // on resize applying diffrent id class
    var element;
    if (screen.width < 768 || window.innerWidth < 768) {
        element = document.getElementById(rightContainer);
        if (element !== null) {
            element.id = mobileView;
        }
    }
    else {
        element = document.getElementById(mobileView);
        if (element !== null) {
            element.id = rightContainer;
        }
    }
    // displaying back-icon only in mobile-view
    toggleBackButton(activeTab, rightContainer);
}

closeMsgBox = (tabNum) => {
    const mobileView = 'mobile-view' + tabNum
    var closeContainer = document.getElementById(mobileView);
    closeContainer.style.display = "none";
}
toggleBackButton = (tabNum, container) => {
    var backIcon = document.getElementById("back-icon" + tabNum);
    if (backIcon !== null) {
        var rightContainer1 = document.getElementById(container);
        if (rightContainer1 !== null) {
            backIcon.style.display = "none";
        }
        else {
            backIcon.style.display = "block";

        }
    }
}

