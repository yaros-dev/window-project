const tabs = (parentSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(parentSelector),
        tab = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {

        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => { 
        const target = e.target;
        if (target && (target.parentNode.classList.contains(tabsSelector.slice(1)) || 
        target.classList.contains(tabsSelector.slice(1)))) {
            tab.forEach((element, i) => {
                if (target == element || target.parentNode == element) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};







export default tabs;